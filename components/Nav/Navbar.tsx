import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { NavItems } from "..";

const Navbar = () => {
  // state
  const [activeItem, setActiveItem] = useState<string>("");

  // next.js router 에서 pathname 가져오기
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/") setActiveItem("About");
    if (pathname === "/projects") setActiveItem("Projects");
    if (pathname === "/resume") setActiveItem("Resume");
  }, []);

  return (
    <>
      <div className="flex justify-between px-5 py-3 my-3 ">
        <span className="text-xl font-bold border-b-4 text-green border-green md:text-2xl">
          {activeItem}
        </span>
        <div className="flex space-x-5 font-lg">
          <NavItems
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            name="About"
            route="/"
          />
          <NavItems
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            name="Projects"
            route="/projects"
          />
          <NavItems
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            name="Resume"
            route="/resume"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
