import React from "react";
import InputText from "../utils/InputText";
import TextArea from "../utils/TextArea";
import Button from "../utils/Button";

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-5 w-full">
      <InputText type="text" name="firstName" placeholder="Enter First Name" />
      <InputText type="text" name="lastName" placeholder="Enter Last Name" />
      <InputText type="email" name="firstName" placeholder="Enter Email Address" />
      <InputText type="text" name="firstName" placeholder="Cell No. e.g: +1 3004005000" />
      <TextArea placeholder="Enter your message..."/>
      <Button btnText="Send message" btnType="accent"/>
    </form>
  );
};

export default ContactForm;
