import { useState } from "react";
import emailjs from "emailjs-com";

export const useEmail = () => {
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (form: HTMLFormElement) => {
    setIsLoading(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_USER_ID
      );
      return { success: true };
    } catch (error) {
      return { success: false };
    } finally {
      setIsLoading(false);
    }
  };

  return { sendEmail, isLoading };
};
