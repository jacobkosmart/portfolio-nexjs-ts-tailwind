import React from "react";
import { GiTie } from "react-icons/gi";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div>
      <img
        src="https://jacobko.info/assets/images/Jacob_avatar.png"
        alt="user avater"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kausan">
        <span className="text-green">Jacob </span>
        Ko
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">
        Front-end Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"
        href=""
        download="name"
      >
        <GiTie className="w-6 h-6" /> Download Resume
      </a>

      {/* social icon */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a href="">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* address */}
      <div
        className="py-4 my-5 bg-gray-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <p className="my-2">jacobkosmart@gmail.com</p>
        <p className="my-2">https://jacobko.info</p>
      </div>
      {/* Email Button */}
      <button
        onClick={() => window.open("mailto: jacobkosmart@gmail.com")}
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
      >
        Email me
      </button>
      <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400">
        Toggle Themem
      </button>
    </div>
  );
};

export default Sidebar;
