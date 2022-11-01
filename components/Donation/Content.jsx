import React from "react";
import { SubHeadingText, Paragraph } from "../../components/UIComponents";

const Content = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 xl:px-0 lg:px-0 md:px-0 px-8 max-w-screen-md">
      <SubHeadingText text="Your Donation Makes a Difference!" />
      <Paragraph
        text="Our biggest challenge is keeping up with the increase of kids in the
          transitional program. School is one of the few stable, secure places
          in the lives of homeless youths, a place where they can acquire the
          skills needed to help them escape poverty."
      />
      <Paragraph
        text="We are proud to work with community partners, social workers and case
          managers to provide resources that make a difference."
      />
      <Paragraph
        text="Research has shown that a student that is homeless for even a short
          period of time suffers physical and emotional trauma for their rest of
          their life. We believe, it is a community responsibility to provide
          hope and opportunity to these students."
      />
      <Paragraph
        text="A direct donation to our program allows us to be flexible and
          responsive to the emergency needs of the families we serve. You can
          make a secure one-time or ongoing monthly donation via PayPal by
          clicking the DONATE button below."
      />

      <div className="flex flex-col items-center justify-center gap-5">
        <SubHeadingText text="We have two different chapters to donate directly to" />
        <Paragraph
          text="You can choose to send your donation to one of our chapters
          specifically. We operate out of two different chapters, PAYPAL and
          WireTransfer."
        />
      </div>
    </div>
  );
};

export default Content;
