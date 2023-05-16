import React from "react";
import { BsStopwatch } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { GoLocation } from "react-icons/go";

const EventCard = ({ day, month, year, title, bgColor }) => {
  return (
    <div className="grid grid-cols-12 rounded-md border border-gray-300 duration-500 hover:translate-x-4">
      <div
        className={`col-span-3 ${bgColor} flex flex-col items-center justify-center rounded-md font-bold  text-white transition `}
      >
        <span className=" text-xl font-bold">{day}</span>
        <span className="text-lg">{month}</span>
      </div>
      <div className="col-span-9 px-6 py-12">
        <h2 className="mb-2 text-left text-lg font-semibold text-gray-900">
          {title}
        </h2>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <BsStopwatch />
            <span>10:30</span>
          </div>
          <div className="flex items-center gap-2">
            <SlCalender />
            {day}-{month}-{year}
          </div>
          <div className="flex items-center gap-2">
            <GoLocation />
            <div>Butwal</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
