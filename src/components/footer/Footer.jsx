import React from "react";
import { BsFacebook, BsTwitter, BsYoutube, BsLinkedin } from "react-icons/bs";
import FooterNavComp from "./navigation/FooterNavComp";

const Footer = () => {
  const footerWidget = [
    {
      title: "About us",
    },
    {
      title: "Campus",
    },
    {
      title: "Study",
    },
    {
      title: "Support",
    },
  ];
  return (
    <>
      <footer className="bg-[#0C1243CC]">
        <div className="mx-auto flex w-10/12 flex-col gap-20 py-16 text-white">
          <div className="grid grid-cols-12 ">
            <div className="col-span-9 flex flex-col justify-between gap-12">
              <h4 className="text-2xl font-semibold">Stay Updated</h4>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Email Adderss"
                  className="w-6/12 rounded-l-md border-2  p-3 text-lg text-gray-900 outline-none focus:outline-blue-600"
                />
                <button className="rounded-r-md bg-blue-600 px-8 py-4 transition duration-300 hover:bg-blue-700">
                  Subscibe Now
                </button>
              </div>
            </div>
            <div className="col-span-3 flex flex-col justify-between gap-12">
              <h4 className="text-2xl font-semibold">Stay Updated</h4>
              <div className="flex items-center gap-8 text-4xl">
                <BsFacebook />
                <BsTwitter />
                <BsYoutube />
                <BsLinkedin />
              </div>
            </div>
          </div>
          <div className="grid justify-center gap-12 border-b-2 pb-16 md:grid-cols-12">
            {footerWidget.map((item, index) => (
              <FooterNavComp title={item.title} />
            ))}
          </div>
          <p>Copyright &copy; 2023 All rights reserved || Sakar Aryal </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
