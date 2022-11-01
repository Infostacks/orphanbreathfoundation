import React from "react";
import { PageHeader } from "../UIComponents";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
// import Map from "./Map";

const index = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <PageHeader
        imgURL="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        pageName="Contact Us"
      />
      <div className="flex xl:flex-row lg:flex-row flex-col items-center justify-center py-20 gap-10 max-w-screen-lg">
        <ContactDetails />
        <ContactForm />
      </div>
      {/* <Map /> */}
    </div>
  );
};

export default index;
