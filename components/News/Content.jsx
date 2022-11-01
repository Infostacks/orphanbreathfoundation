import React from "react";
import { SubHeadingText, NewsCard } from "../../components/UIComponents";

const Content = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 xl:px-0 lg:px-0 md:px-0 px-8 max-w-screen-md">
      <SubHeadingText text="Latest News" />

      <NewsCard
        img="https://layerdrops.com/oxpinswp/wp-content/uploads/2022/09/blog-07-370x250.jpg"
        title="Lorem Ipsum has been the industry standard"
        desc=""
        date="07 Sep, 22"
        comments="3"
        btnText="Read More"
      />
    </div>
  );
};

export default Content;
