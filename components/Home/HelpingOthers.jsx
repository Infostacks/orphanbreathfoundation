import React from "react";
import Image from "next/image";
import {
  SubHeadingText,
  Paragraph,
  MaskImage,
  AnimatedButton,
  ProgressBar,
} from "../UIComponents";

const HelpingOthers = () => {
  return (
    <div className="flex xl:flex-row lg:flex-row flex-col justify-center items-center gap-10 pb-20">
      <Image
        src="http://layerdrops.com/oxpinswp/wp-content/uploads/2022/09/about-two-img-1.jpg"
        alt=""
        width="550"
        height="700"
        unoptimized
        className="rounded-t-[3rem] rounded-br-[3rem] drop-shadow-lg"
      />

      <div className="xl:w-1/2 lg:w-1/2 w-full flex flex-col gap-5">
        <h2 className="text-darkGreen font-bold italic">
          Get to know about oxpins
        </h2>

        <SubHeadingText text="Helping each other can make world better" />

        <Paragraph text="We help companies develop powerful corporate social responsibility, grantmaking, and employee engagement strategies. Our impact is about more than moving money to where it’s needed most." />

        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3 w-full">
          <div className="flex flex-row gap-3">
            <span>
              <MaskImage
                imgURL="https://img.icons8.com/external-doodle-bomsymbols-/91/000000/external-archer-doodle-business-shop-finance-set-1-doodle-bomsymbols-.png"
                altText=""
                width="100"
                height="100"
                maskType="circle"
              />
            </span>
            <div>
              <div className="card-title">Our Mission</div>
              <Paragraph text="Nonprofits around the world apply and join us to access more funding." />
            </div>
          </div>

          <div className="flex flex-row gap-3">
            <span>
              <MaskImage
                imgURL="https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/344/external-storytelling-digital-marketing-smashingstocks-mixed-smashing-stocks.png"
                altText=""
                width="100"
                height="100"
                maskType="circle"
              />
            </span>
            <div>
              <div className="card-title">Our story</div>
              <Paragraph text="Nonprofits around the world apply and join us to access more funding." />
            </div>
          </div>
        </div>

        <div className="mb-5">
          <div className="card-title">Charity</div>
          <ProgressBar value="70" max="100" />
          <div className="card-title">Donation</div>
          <ProgressBar value="86" max="100" />
        </div>

        <div>
          <AnimatedButton btnText="Discover More" link="/#" />
        </div>
      </div>
    </div>
  );
};

export default HelpingOthers;
