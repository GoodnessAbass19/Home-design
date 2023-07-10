import React from "react";
import Img_1 from "../assets/about-light.jpg";
import Img_2 from "../assets/about-dark.jpg";

const About = () => {
  return (
    <div className="w-full flex flex-col items-center lg:flex-row pt-[30px] lg:mt-0 mt-20">
      <img src={Img_2} alt="" className="w-full h-full" />
      <img src={Img_1} alt="" className="w-full h-full" />
    </div>
  );
};

export default About;
