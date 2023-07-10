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
      className={`fixed md:max-w-screen-md w-full mx-auto left-0 top-6 md:top-10 z-[999]  ${
        sticky ? "backdrop-blur-sm bg-white/10  text-gray-900" : "text-white"
      }`}
    >
      <div className="w-full mx-20">
        <div>
          <h2 className="text-3xl font-semibold text-white">room</h2>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
