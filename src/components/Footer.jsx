import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p className="text-gray-300 text-sm">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io/">Frontend Mentor</a>
        </p>
        <p className="text-gray-300 text-sm">
          Coded by{" "}
          <a href="https://goodness-dev-portfolio.vercel.app/">Goodness Dev</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
