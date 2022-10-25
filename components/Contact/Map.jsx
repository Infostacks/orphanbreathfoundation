import React from "react";

const Map = () => {
  return (
    <div classNames="w-screen absolute inset-0 bg-bgColor">
      <iframe
        title="map"
        src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
        style={{
          width: "100%",
          height: "100%",
          frameBorder: "0",
          marginHeight: "0",
          marginWidth: "0",
          scrolling: "no",
        }}
      ></iframe>
    </div>
  );
};

export default Map;
