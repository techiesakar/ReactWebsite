import React from "react";
import { SlCalender } from "react-icons/sl";
import { BiComment } from "react-icons/bi";
const RecentNewsCard = ({ image, tag, title, btnBg }) => {
  return (
    <div>
      <div className="relative">
        <img src={image} alt="" />
        <button
          className={`${btnBg}  absolute bottom-0 left-0 z-10 w-48 px-4 py-3 font-semibold text-white`}
        >
          {tag}
        </button>
        <div className="absolute inset-0 h-full w-full cursor-pointer transition duration-300 hover:bg-blue-900/60"></div>
      </div>
      <div className="p-4 text-gray-900">
        <div className="mb-4 text-lg font-medium tracking-wider ">{title}</div>
        <div className="flex items-center gap-4">
          <SlCalender />
          <span>21 Nov 2019</span>
          <BiComment />| <span>10 Comments</span>
        </div>
      </div>
    </div>
  );
};

export default RecentNewsCard;
