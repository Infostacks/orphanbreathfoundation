import React from "react";
import Button from "../../components/utils/Button";
import styles from "../../styles/Global";

const index = () => {
  return (
    <div
      className={`${styles.bgMainWhiteColor} py-20 flex flex-col gap-10 items-center justify-center`}
    >
      <div className="flex flex-col items-center justify-center gap-10 max-w-screen-md">
        <h1 className="card-title">Donate</h1>

        <h1 className="card-title">Your Donation Makes a Difference!</h1>
        <div className="flex flex-col gap-5">
          <p>
            Our biggest challenge is keeping up with the increase of kids in the
            transitional program. School is one of the few stable, secure places
            in the lives of homeless youths, a place where they can acquire the
            skills needed to help them escape poverty.
          </p>
          <p>
            We are proud to work with community partners, social workers and
            case managers to provide resources that make a difference.
          </p>
          <p>
            Research has shown that a student that is homeless for even a short
            period of time suffers physical and emotional trauma for their rest
            of their life. We believe, it is a community responsibility to
            provide hope and opportunity to these students.
          </p>
          <p>
            A direct donation to our program allows us to be flexible and
            responsive to the emergency needs of the families we serve. You can
            make a secure one-time or ongoing monthly donation via PayPal by{" "}
            <strong>clicking the DONATE button</strong> below.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="card-title">
            We have two different chapters to donate directly to
          </h1>
          <p>
            You can choose to send your donation to one of our chapters
            specifically. We operate out of two different chapters, PAYPAL and
            WireTransfer.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {/* <a class="btn btn-success">Donate Via PAYPAL</a> */}
          <Button btnText="Donate Via PAYPAL" btnType={`success`} />
          <Button btnText="Donate Via WireTransfer" btnType="outline" />
        </div>
      </div>
    </div>
  );
};

export default index;
