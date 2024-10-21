import React, { useState } from "react";
import { images } from "../constants";
import "./Header.css";
import { IoMdMenu, IoIosArrowDown } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
const navItemsInfo = [
  { name: "Home", type: "link" },
  { name: "Articles", type: "link" },
  { name: "Pages", type: "dropdown", items: ["About us", "Contact us"] },
  { name: "Pricing", type: "link" },
  { name: "Faq", type: "link" },
];

const NavItems = ({ item }) => {
  return (
    <li className="group relative ">
      {item.type === "link" ? (
        <React.Fragment>
          <a href="/" className="px-4 py-1 text-2xl md:text-xl lg:text-xl">
            {item.name}
          </a>
          <span className="absolute right-0 top-0 font-semibold text-blue-500 opacity-0 transition-all duration-500 group-hover:right-[90%] group-hover:opacity-100">
            /
          </span>
        </React.Fragment>
      ) : (
        <div className="group">
          <span
            className="flex flex-row items-center px-4 py-1 text-2xl md:text-xl lg:text-xl"
          >
            {item.name}
            <IoIosArrowDown className="ml-2" />
          </span>
          <div className="absolute bottom-0 right-0 hidden w-auto bg-slate-100 z-10 translate-y-full transform md:pt-4 rounded-xl transition-all duration-300 group-hover:flex group-hover:flex-col">
            <ul className="flex flex-col justify-center shadow-lg w-full rounded-lg overflow-hidden md:mx-2">
            {item.items.map((page) => {
              return (
                  <span
                    onClick={(e)=>e.stopPropagation()}
                    className=" md:px-1 text-center py-2 text-xl md:text-xl lg:text-xl hover:bg-dark-hard hover:text-white text-dark-hard lg:text-dark-soft"
                  >
                    {page}
                  </span>
              );
            })}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

const Header = () => {
  const [navIsvisible, setNavIsVisible] = useState(false);
  const navVisibleHandler = () => {
    setNavIsVisible((currState) => {
      return !currState;
    });
  };

  const { Logo } = images;
  return (
    <section>
      <header className="container mx-auto mt-4 flex items-center justify-between px-5 py-4 ">
        <div className="flex items-center">
          <img
            src={Logo}
            alt="ThoughtLoom"
            className="size-16 headerList rounded-2xl"
          />
          <div className="font-[monospace] text-xl text-blue-300">
            ThoughLoom
          </div>
        </div>
        <div className="z-50 lg:hidden">
          {navIsvisible ? (
            <AiOutlineClose className="h-6 w-6" onClick={navVisibleHandler} />
          ) : (
            <IoMdMenu className="h-6 w-6" onClick={navVisibleHandler} />
          )}
        </div>
        {/* Nav Items */}
        <div
          className={`${
            navIsvisible ? "right-0" : "-right-full"
          } bg-dark-hard bottoom-0 fixed top-0 z-[49] mt-[84px] flex h-full w-full flex-col items-center justify-center gap-x-9  transition-all duration-300 lg:static lg:mt-0 lg:w-auto lg:flex-row lg:justify-end lg:bg-transparent`}
        >
          <ul className="lg:text-dark-soft flex flex-col items-center gap-x-5 gap-y-5 font-semibold  text-white lg:flex-row">
            {navItemsInfo.map((item) => {
              return <NavItems key={item.name} item={item} />;
            })}
          </ul>
          <button className="mt-5 rounded-full border-2 border-blue-500 px-6 py-2 font-semibold text-blue-500 transition-all duration-300 hover:bg-blue-500 hover:text-white lg:mt-0">
            Sign In
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;
// ThoughtLoom
