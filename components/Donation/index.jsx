import React from "react";
// import Button from "../../components/UIComponents/Button";
import { PageHeader } from "../UIComponents";
import Content from "./Content";
import Paypal from "./Paypal";

const index = () => {
  return (
    <div className="flex flex-col items-center jusFify-center gap-10">
      <PageHeader
        imgURL="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        pageName="Donate Us"
      />

      <Content />

      <Paypal />

      {/* <div className="flex flex-col gap-5">
        <Button btnText="Donate Via PAYPAL" btnType={`success`} />
        <Button btnText="Donate Via WireTransfer" btnType="outline" />
      </div> */}
    </div>
  );
};

export default index;
