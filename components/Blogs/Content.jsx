import React from "react";
import { SubHeadingText, VolunteerCard } from "../UIComponents";

const Content = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 xl:px-0 lg:px-0 md:px-0 px-8 max-w-screen-md">
      <SubHeadingText text="Our Latest Blogs" />

      {/* <VolunteerCard
        img="http://layerdrops.com/oxpinswp/wp-content/uploads/2022/09/team-1-2.jpg"
        name="Kevin Martin"
        desc=""
        date="07 Sep, 22"
        comments="3"
        btnText="Read More"
      /> */}
    </div>
  );
};

export default Content;
