import { useEffect } from "react";

const TawkTo = () => {
  useEffect(() => {
    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = "https://embed.tawk.to/69b58bafcdd3b51c3a6f60c2/1jjmij98t";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    document.head.appendChild(s1);

    return () => {
      document.head.removeChild(s1);
    };
  }, []);

  return null;
};

export default TawkTo;
