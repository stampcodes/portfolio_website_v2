// src/components/ContactForm.tsx

import React, { useState } from "react";
import { useEmail } from "../../hooks/useEmail";
import TextInput from "./TextInput";
import TextArea from "./TextArea";
import SubmitButton from "./SubmitButton";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const { sendEmail, isLoading } = useEmail();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formValues.name.trim() || !formValues.message.trim()) {
      setStatusMessage("Name and message are required.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formValues.email)) {
      setStatusMessage("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    if (!validateForm()) {
      setTimeout(() => setStatusMessage(null), 1500);
      return;
    }

    const form = e.target as HTMLFormElement;
    const { success } = await sendEmail(form);

    if (success) {
      setIsSuccess(true);
      setStatusMessage("Email sent successfully!");
      setFormValues({ name: "", email: "", message: "" });
    } else {
      setStatusMessage("Email not sent. Please try again later.");
      setTimeout(() => setStatusMessage(null), 1500);
    }
  };

  return (
    <>
      <div className="bg-[url('./assets/imgs/bg/bg-mobile.png')] lg:bg-[url('./assets/imgs/bg/bg-contact.png')] bg-boiler flex flex-col items-center bg-scroll lg:bg-fixed">
        <h2 className="text-4xl sm:text-3xl md:text-5xl lg:text-6xl font-bold pt-[150px]">
          Contact Me
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 max-w-md min-w-[350px] mx-auto bg-[#a5aabf] p-6 rounded-lg mt-[70px] shadow-xl shadow-black/50 "
        >
          <TextInput
            name="name"
            placeholder="Your Name"
            value={formValues.name}
            onChange={handleChange}
          />
          <TextInput
            name="email"
            placeholder="Your Email"
            value={formValues.email}
            onChange={handleChange}
          />
          <TextArea
            name="message"
            placeholder="Your Message"
            value={formValues.message}
            onChange={handleChange}
          />

          {!isSuccess && <SubmitButton isLoading={isLoading} />}

          {statusMessage && (
            <p
              className={`text-center mt-4 ${
                isSuccess ? "text-green-700" : "text-red-700"
              }`}
            >
              {statusMessage}
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default ContactForm;
