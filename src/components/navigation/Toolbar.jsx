import React, { useEffect, useState } from "react";
import navlinks from "../navigation/navdata";
import { Link, useLocation } from "react-router-dom";
import { FcMenu } from "react-icons/fc";
import Button from "components/ui/button/Button";
import { MdKeyboardArrowDown } from "react-icons/md";

const Toolbar = () => {
  const [Show, setShow] = useState("");
  const [topFixed, setTopFixed] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  const scroll = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      console.log(windowHeight);
      if (windowHeight > 240) {
        setTopFixed(true);
      } else {
        setTopFixed(false);
      }
    }
  };

  const location = useLocation();
  return (
    <header
      className={` ${
        topFixed
          ? "fixed -top-[60px] left-0 right-0 translate-y-[60px] duration-300"
          : "bg-tranparent  scroll_completed relative  duration-300"
      }  scrolling z-50  h-[108px] py-4 transition-all`}
    >
      <div
        className={`mx-auto flex h-full  w-10/12 items-center justify-between ${
          topFixed ? "rounded-3xl bg-gray-50 p-6" : ""
        }`}
      >
        <h2 className="text-3xl">
          <Link to={"/"}>Wiser University</Link>
        </h2>
        <nav className="hidden lg:flex lg:items-center lg:gap-8">
          <ul className="flex gap-8">
            {navlinks.map((link, index) => {
              if (link.children) {
                return (
                  <li
                    key={index}
                    className="relative flex cursor-pointer items-center text-lg"
                    onClick={() => {
                      setShow(link.name);
                    }}
                  >
                    {link.name}
                    <MdKeyboardArrowDown className="mt-1 text-2xl" />

                    <li
                      key={index}
                      className={`absolute z-10 ${
                        Show === link.name ? "block" : "hidden"
                      } `}
                    >
                      {link.children.map((childLink, count) => {
                        return (
                          <li
                            key={count}
                            className={`text-lg${
                              location.pathname === link.name
                                ? "text-blue-600"
                                : "text-gray-900"
                            } `}
                          >
                            <Link to={childLink.to}>
                              <div
                                className="text-lg text-blue-600"
                                onClick={(e) => {
                                  setShow("");
                                }}
                              >
                                {childLink.name}
                              </div>
                            </Link>
                          </li>
                        );
                      })}
                    </li>
                  </li>
                );
              } else {
                return (
                  <li
                    key={index}
                    className={`text-lg ${
                      location.pathname === link.to
                        ? "text-blue-800"
                        : "text-gray-900"
                    }`}
                  >
                    <Link to={link.to}>{link.name}</Link>
                  </li>
                );
              }
            })}
          </ul>

          <Button
            url={"/apply"}
            title="Apply Now"
            className={`rounded bg-blue-600 px-5 py-3 uppercase text-white transition hover:bg-blue-700`}
          />
        </nav>
        <button className="lg:hidden">
          <FcMenu className="text-4xl " />
        </button>
      </div>
    </header>
  );
};

export default Toolbar;
