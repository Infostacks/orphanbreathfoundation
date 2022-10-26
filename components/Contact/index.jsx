import React from "react";
import PageHeader from "../utils/PageHeader";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import Map from "./Map";

const index = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <PageHeader
        imgURL="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhcml0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
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
