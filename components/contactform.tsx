'use client';

import { useState } from "react";
import { Button, Input, Textarea } from "@nextui-org/react";
import { BsSendFill } from "react-icons/bs";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errorMessages, setErrorMessages] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let errors = false;

    if (formData.fullName === "") {
      setErrorMessages((prevErrors) => ({ ...prevErrors, fullName: "Please enter your full name." }));
      errors = true;
    } else {
      setErrorMessages((prevErrors) => ({ ...prevErrors, fullName: "" }));
    }

    if (formData.email === "") {
      setErrorMessages((prevErrors) => ({ ...prevErrors, email: "Please enter your email address." }));
      errors = true;
    } else {
      setErrorMessages((prevErrors) => ({ ...prevErrors, email: "" }));
    }

    if (formData.subject === "") {
      setErrorMessages((prevErrors) => ({ ...prevErrors, subject: "Please enter the subject." }));
      errors = true;
    } else {
      setErrorMessages((prevErrors) => ({ ...prevErrors, subject: "" }));
    }

    if (formData.message === "") {
      setErrorMessages((prevErrors) => ({ ...prevErrors, message: "Please enter your message." }));
      errors = true;
    } else {
      setErrorMessages((prevErrors) => ({ ...prevErrors, message: "" }));
    }

    if (!errors) {
      console.log(formData);
    }
  };

  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, fullName: e.target.value });
    setErrorMessages((prevErrors) => ({ ...prevErrors, fullName: "" }));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, email: e.target.value });
    setErrorMessages((prevErrors) => ({ ...prevErrors, email: "" }));
  };

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, subject: e.target.value });
    setErrorMessages((prevErrors) => ({ ...prevErrors, subject: "" }));
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, message: e.target.value });
    setErrorMessages((prevErrors) => ({ ...prevErrors, message: "" }));
  };

  return (
    <form className="flex flex-col w-full gap-5" onSubmit={handleFormSubmit}>
      <Input
        errorMessage={errorMessages.fullName}
        placeholder="Full Name *"
        required
        variant="underlined"
        value={formData.fullName}
        onChange={handleFullNameChange}
      />
      <Input
        errorMessage={errorMessages.email}
        placeholder="Email *"
        required
        variant="underlined"
        value={formData.email}
        onChange={handleEmailChange}
      />
      <Input
        errorMessage={errorMessages.subject}
        placeholder="Subject *"
        required
        variant="underlined"
        value={formData.subject}
        onChange={handleSubjectChange}
      />
      <Textarea
        required
        errorMessage={errorMessages.message}
        variant="underlined"
        label="Message *"
        placeholder="Write your message here..."
        className="w-full"
        value={formData.message}
        onChange={handleMessageChange}
      />
      <Button startContent={<BsSendFill />} className="bg-green-500 text-white p-2 rounded-md" type="submit">Send</Button>
    </form>
  )
}

export default ContactForm