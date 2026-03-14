import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  type: "contact" | "newsletter";
  name?: string;
  email: string;
  message?: string;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const CONTACT_EMAIL = Deno.env.get("CONTACT_EMAIL");
    if (!CONTACT_EMAIL) {
      throw new Error("CONTACT_EMAIL is not configured");
    }

    const { type, name, email, message }: ContactRequest = await req.json();

    let subject: string;
    let htmlContent: string;

    if (type === "contact") {
      subject = `[CloudSecure] Nouveau message de ${name}`;
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #22c55e; border-bottom: 2px solid #22c55e; padding-bottom: 10px;">Nouveau message de contact</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Message :</strong></p>
          <div style="background: #f4f4f5; padding: 15px; border-radius: 8px; margin-top: 8px;">
            ${message}
          </div>
          <p style="color: #888; font-size: 12px; margin-top: 20px;">Envoyé depuis le site CloudSecure</p>
        </div>
      `;
    } else {
      subject = `[CloudSecure] Nouvel abonné newsletter`;
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #22c55e; border-bottom: 2px solid #22c55e; padding-bottom: 10px;">Nouvel abonné à la newsletter</h2>
          <p><strong>Email :</strong> ${email}</p>
          <p style="color: #888; font-size: 12px; margin-top: 20px;">Envoyé depuis le site CloudSecure</p>
        </div>
      `;
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "AlgoSecure <onboarding@resend.dev>",
        to: [CONTACT_EMAIL],
        subject,
        html: htmlContent,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(`Resend API error [${res.status}]: ${JSON.stringify(data)}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error("Error sending email:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ success: false, error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
