import React, { useEffect, useState, useCallback } from "react";
import navlinks from "../navigation/navdata";
import { Link, useLocation } from "react-router-dom";
import { FcMenu } from "react-icons/fc";
import Button from "components/ui/button/Button";
import { MdKeyboardArrowDown } from "react-icons/md";

const Toolbar = () => {
  const [Show, setShow] = useState("");
  const [topFixed, setTopFixed] = useState(false);
  const [Latest, setLatest] = useState(false);

  const [Blur, setBlur] = useState(false);

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

  const handleBlur = useCallback((e) => {
    const currentTarget = e.currentTarget;

    // Give browser time to focus the next element
    requestAnimationFrame(() => {
      // Check if the new focused element is a child of the original container
      if (!currentTarget.contains(document.activeElement)) {
        setShow("");
      }
    });
  }, []);

  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname, Show);
    if (location.pathname !== Show) {
      console.log("wewe");
      console.log(Show, location.pathname, Latest);
      // if (Show !== "/Blog") {
      //   alert("kjdsk");
      //   setShow(location.pathname);
      // }
    } else {
      setShow(location.pathname);
    }

    // return () => {
    //   second;
    // };
  }, [location, Show, Latest]);

  return (
    <header
      className={`fixed ${
        topFixed
          ? " -top-[60px] left-0 right-0  translate-y-[68px] bg-gray-50 duration-300"
          : "bg-tranparent duration-300"
      }   left-0 right-0  z-50 mx-auto flex h-[108px] w-10/12 items-center  justify-between rounded-3xl  px-6  transition-all`}
    >
      {/* <div
        className={`mx-auto flex h-full  w-full items-center justify-between ${
          topFixed ? "rounded-3xl bg-gray-50 p-6" : ""
        }`}
      > */}
      <h2 className="text-3xl">
        <Link to={"/"}>Wiser University</Link>
      </h2>
      <nav className="hidden  h-full lg:flex lg:items-center lg:gap-8">
        <ul className="flex h-full gap-8">
          {navlinks.map((link, index) => {
            if (link.children) {
              return (
                <button
                  key={index}
                  className="relative flex h-full cursor-pointer items-center  text-lg"
                  onClick={() => {
                    setShow(link.to);
                    setLatest(true);
                  }}
                  onBlur={handleBlur}
                >
                  {link.name}
                  <MdKeyboardArrowDown className="mt-1 text-2xl" />
                  <ul
                    className={`absolute top-full z-10 w-[248px] bg-white p-4 ${
                      Show === link.to ? "flex flex-col gap-4" : "hidden"
                    }`}
                  >
                    {link.children.map((childLink, count) => {
                      return (
                        <li
                          key={count}
                          onClick={(e) => {
                            e.stopPropagation();
                            setShow(childLink.to);

                            setLatest(true);
                          }}
                          className={`text-lg ${
                            location.pathname === link.to
                              ? "text-blue-600"
                              : "text-gray-900"
                          } `}
                        >
                          <Link to={childLink.to}>
                            <div
                              className="text-lg text-blue-600"
                              onClick={(e) => {
                                setShow(childLink.to);
                              }}
                            >
                              {childLink.name}
                            </div>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </button>
              );
            } else {
              return (
                <li
                  key={index}
                  onClick={() => {
                    setShow(link.to);
                  }}
                  className={`flex  items-center text-lg ${
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
      {/* </div> */}
    </header>
  );
};

export default Toolbar;
