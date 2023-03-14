import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { useTheme } from "next-themes";
import Image from "next/image";
import { RiAppStoreFill } from "react-icons/ri";

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
        iOS Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200"
        href="https://github.com/jacobkosmart"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>

      {/* social icon */}
      <div className="flex justify-around w-9/12 mx-auto my-5 cursor-pointer text-green md:w-full">
        {/* HomePage icon */}
        <a href="https://jacobko.info" target="_blank" rel="noreferrer">
          <IoMdHome className="w-8 h-8 cursor-pointer" aria-label="Home" />
        </a>
        {/* App Store icon */}
        <a
          href="https://apps.apple.com/us/developer/taehyun-ko/id1611508121"
          target="_blank"
          rel="noreferrer"
        >
          <RiAppStoreFill
            className="w-8 h-8 cursor-pointer"
            aria-label="AppStore"
          />
        </a>
        {/* Play Store icon */}
        <a
          href="https://play.google.com/store/apps/developer?id=Jacob+Taehyun+Ko"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoGooglePlaystore
            className="w-8 h-8 cursor-pointer"
            aria-label="playStore"
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
        onClick={() =>
          window.open(
            "https://www.youtube.com/channel/UCXXutxMvNx4EKXB-uQnm2oQ"
          )
        }
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
      >
        Youtube
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
