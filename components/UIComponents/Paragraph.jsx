import React from "react";

// const Answer = (textData) => {
//   console.log(textData.textData);
//   return <div dangerouslySetInnerHTML={createMarkup(textData.textData)}></div>;
// };

// function createMarkup(textData) {
//   return { __html: textData };
// }

const Paragraph = ({ text }) => {
  return (
    <p className="text-justify">
      {/* <Answer textData={text} /> */}
      {text}
    </p>
  );
};

export default Paragraph;
