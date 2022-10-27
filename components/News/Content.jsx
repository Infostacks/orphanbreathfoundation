import React from "react";
import SubHeadingText from "../../components/UIComponents/SubHeadingText";
import Paragraph from "../../components/UIComponents/Paragraph";
import Card from "../UIComponents/Card";
import Image from "next/image";
import NewsCard from "../UIComponents/NewsCard";

const Content = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 xl:px-0 lg:px-0 md:px-0 px-8 max-w-screen-md">
      <SubHeadingText text="Latest News" />
      <Card
        img="https://layerdrops.com/oxpinswp/wp-content/uploads/2022/09/blog-07-370x250.jpg"
        title="img"
        desc=""
        btnText="Read More"
      />

      <NewsCard
        img="https://layerdrops.com/oxpinswp/wp-content/uploads/2022/09/blog-07-370x250.jpg"
        title="Lorem Ipsum has been the industry standard"
        desc=""
        btnText="Read More"
      />
    </div>
  );
};

export default Content;
