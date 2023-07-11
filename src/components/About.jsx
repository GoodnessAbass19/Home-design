import React from "react";
import Img_1 from "../assets/about-light.jpg";
import Img_2 from "../assets/about-dark.jpg";

const About = () => {
  return (
    <div id="about" className="w-full flex flex-col lg:flex-row lg:mt-0 mt-10 ">
      <div className="basis-1/3">
        <img
          src={Img_2}
          alt=""
          className="w-full h-full  object-center object-cover"
        />
      </div>
      <div className="basis-1/3 flex flex-col space-y-6 items-start justify-center px-10 md:px-20 lg:px-5 2xl:px-20 py-5">
        <h2 className="md:text-2xl text-[18px] font-semibold leading-snug uppercase tracking-[0.2em]">
          About our furniture
        </h2>

        <p className="text-black/60 text-base font-medium">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <div className="basis-1/3">
        <img
          src={Img_1}
          alt=""
          className="w-full h-full  object-center object-cover"
        />
      </div>
    </div>
  );
};

export default About;
