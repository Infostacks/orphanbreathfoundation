import React from "react";
import { ImageIcon } from "../UIComponents";

const ContactDetails = () => {
  return (
    <div className="flex flex-col gap-10 w-full xl:px-0 lg:px-0 md:px-0 px-8">
      <h3 className="font-bold">Orphan Breath Foundation</h3>
      <div className="flex flex-col gap-2 w-full">
        <h3 className="font-light">19721 Scriber Lake Road, Suite B</h3>
        <h3 className="font-light">Lynnwood, WA 98036</h3>
        <h3 className="font-light">
          <span className="font-bold">Office Hours</span>: Tuesday through
          Friday, 10am to 3pm
        </h3>
        <h3 className="font-light">
          <span className="font-bold">Office Phone</span>: 425-361-2916
        </h3>
      </div>
      <div className="flex flex-row gap-5">
        <ImageIcon
          imgURL="http://wakit.wpengine.com/wp-content/uploads/2019/12/Facebook.png"
          altText="facebook-icon"
        />
        <ImageIcon
          imgURL="http://wakit.wpengine.com/wp-content/uploads/2019/12/Paypal.png"
          altText="facebook-icon"
        />
        <ImageIcon
          imgURL="http://wakit.wpengine.com/wp-content/uploads/2019/12/Twitter.png"
          altText="facebook-icon"
        />
      </div>
    </div>
  );
};

export default ContactDetails;
