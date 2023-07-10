import React, { useState } from "react";
import Img_1 from "../assets/desktop-1.jpg";
import Img_2 from "../assets/desktop-2.jpg";
import Img_3 from "../assets/desktop-3.jpg";
import {
  ArrowLongRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";

const Images = [
  {
    img: Img_1,
    title: "Discover innovative ways to design",
    text: " We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    img: Img_2,
    title: "We are available all across the globe",
    text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    img: Img_3,
    title: "Manufacturing with the best material",
    text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const handleNextClick = () => {
    setIndex(index + 1);
    if (index === Images.length - 1) {
      setIndex(0);
    }
    window.scrollTo({ top: 0 });
  };
  const handlePrevClick = () => {
    setIndex(index - 1);
    if (index === 0) {
      setIndex(Images.length - 1);
    }
    window.scrollTo({ top: 0 });
  };
  let project = Images[index];
  return (
    <div className="w-full flex flex-col items-center lg:flex-row lg:min-h-[70vh] lg:gap-0 gap-20">
      <div className="basis-[60%] relative overflow-hidden">
        <img
          src={project.img}
          alt="img"
          className="w-full h-full object-center object-fill"
        />
        <div className="flex justify-between items-center max-w-[200px] absolute bg-black right-0 bottom-0">
          <button
            onClick={handlePrevClick}
            className="bg-black text-white hover:bg-gray-400 basis-1/2"
          >
            <ChevronLeftIcon className="md:w-16 md:h-16 w-6 h-6" />
          </button>
          <button
            onClick={handleNextClick}
            className="bg-black text-white hover:bg-gray-400 basis-1/2"
          >
            <ChevronRightIcon className="md:w-16 md:h-16 w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="text-black text-2xl basis-[40%] flex flex-col justify-end items-start">
        <div className="lg:px-32 flex flex-col gap-8 md:px-20 px-10">
          <h2 className="md:text-[40px] text-[28px] font-bold leading-snug">
            {project.title}
          </h2>
          <p className="text-black/60 text-lg font-medium">{project.text}</p>

          <a
            href="#"
            className="text-xl font-semibold tracking-[0.3em] uppercase hover:text-black/50 flex items-center"
          >
            <span> shop now</span> <ArrowLongRightIcon className="w-32 h-10" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
