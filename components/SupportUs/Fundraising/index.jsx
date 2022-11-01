import React from "react";
import { PageHeader } from "../../UIComponents";
import Content from "./Content";

const index = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <PageHeader
        imgURL="https://images.unsplash.com/photo-1516012999909-1dd29c71d3a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        pageName="Fundraising"
      />
      <Content />
    </div>
  );
};

export default index;
