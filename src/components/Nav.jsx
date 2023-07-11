import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";

const Nav = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  });

  return (
    <nav
      className={`fixed md:max-w-[540px] w-full md:mx-20 left-0 md:top-6 top-3 z-[999]  ${
        sticky ? "backdrop-blur-sm bg-white/10  text-gray-900" : "text-white"
      }`}
    >
      <div className="w-full flex justify-start xl:gap-16 items-center">
        <div className="z-[9999] md:hidden block pl-8 basis-1/5 text-start">
          {open ? (
            <XMarkIcon
              className={`w-8 h-8 text-black text-start ${
                open ? "text-black" : "text-white"
              }`}
              onClick={() => setOpen(!open)}
            />
          ) : (
            <Bars3Icon
              className={`w-8 h-8 ${sticky ? "text-black" : "text-white"}`}
              onClick={() => setOpen(!open)}
            />
          )}
        </div>

        <h2
          className={`text-3xl font-semibold text-center basis-4/5 md:basis-0 ${
            sticky ? "text-black" : "text-white"
          }`}
        >
          room
        </h2>

        <div className=" md:block hidden">
          <ul className="justify-between items-center flex flex-row gap-x-10 font-semibold text-xl px-5">
            <li
              className={`hover:border-b-2 border-white ${
                sticky ? "hover:text-white text-black" : "text-white"
              }`}
            >
              <a href="/">home</a>
            </li>
            <li
              className={`hover:border-b-2 border-white ${
                sticky ? "hover:text-white text-black" : "text-white"
              }`}
            >
              <a href="#">shop</a>
            </li>
            <li
              className={`hover:border-b-2 border-white ${
                sticky ? "hover:text-white text-black" : "text-white"
              }`}
            >
              <a href="#about">about</a>
            </li>
            <li
              className={`hover:border-b-2 border-white ${
                sticky ? "hover:text-white text-black" : "text-white"
              }`}
            >
              <a href="#"> contact</a>
            </li>
          </ul>
        </div>

        <div
          className={`md:hidden text-white absolute w-full  z-[999] font-medium bg-white left-0 duration-300 ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <ul className="justify-center items-center flex flex-row gap-x-5 font-semibold text-lg px-5 text-black">
            <li onClick={() => setOpen(!open)}>
              <a href="/">home</a>
            </li>
            <li onClick={() => setOpen(!open)}>
              <a href="#">shop</a>
            </li>
            <li onClick={() => setOpen(!open)}>
              <a href="#about">about</a>
            </li>
            <li onClick={() => setOpen(!open)}>
              <a href="#"> contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </nav>
  );
};

export default Nav;
