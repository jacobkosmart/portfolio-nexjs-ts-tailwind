import React from "react";
import { HiOutlineHome } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { SiNotion } from "react-icons/si";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <Image
        src="https://jacobko.info/assets/images/Jacob_avatar.png"
        alt="user avater"
        className="mx-auto rounded-full "
        height="128"
        width="128"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kausan">
        <span className="text-green">Jacob </span>
        Ko
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        Front-end Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200"
        href="https://jacobko.info/"
        target="_blank"
        rel="noreferrer"
      >
        <HiOutlineHome className="w-4 h-4 mb-1 mr-2" /> Jacob&apos;s DevLog
      </a>

      {/* social icon */}
      <div className="flex justify-around w-9/12 mx-auto my-5 cursor-pointer text-green md:w-full">
        <a
          href="https://github.com/jacobkosmart"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub
            className="w-8 h-8 cursor-pointer"
            aria-label="Github"
          />
        </a>
        <a
          href="https://jacobko.notion.site/f375245e8e264a30bc366ede47814809"
          target="_blank"
          rel="noreferrer"
        >
          <SiNotion className="w-8 h-8 cursor-pointer" aria-label="LinkIn" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCXXutxMvNx4EKXB-uQnm2oQ"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillYoutube
            className="w-8 h-8 cursor-pointer"
            aria-label="Youtube"
          />
        </a>
      </div>

      {/* address */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <a
          className="my-2 no-underline cursor-pointer hover:text-blue-800"
          href="mailto:jacobkosmart@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <p className="py-1">jacobkosmart@gmail.com</p>
        </a>
        <a
          className="my-2 no-underline cursor-pointer hover:text-blue-800"
          href="https://jacobko.info"
          target="_blank"
          rel="noreferrer"
        >
          <p className="py-1">https://jacobko.info</p>
        </a>
      </div>
      {/* Email Button */}
      <a href="https://jacobko.info/" target="_blank" rel="noreferrer"></a>
      <button
        onClick={() => window.open("mailto: jacobkosmart@gmail.com")}
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
      >
        Korean 🇰🇷
      </button>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400"
        onClick={changeTheme}
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
};

export default Sidebar;
