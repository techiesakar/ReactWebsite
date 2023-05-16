import React from "react";
import { FaUniversity } from "react-icons/fa";
import { TbSchool } from "react-icons/tb";
import { SiGooglescholar } from "react-icons/si";

import ScholarshipCard from "./Card/ScholarshipCard";

const Scholarship = () => {
  const data = [
    {
      heading: "Scholarship",
      icon: <FaUniversity />,
      bgColor: "bg-blue-500",
      color: "text-blue-500",
    },

    {
      heading: "Scholarship",
      icon: <TbSchool />,
      bgColor: "bg-orange-500",
      color: "text-orange-500",
    },

    {
      heading: "Scholarship",
      icon: <TbSchool />,
      bgColor: "bg-cyan-500",
      color: "text-cyan-500",
    },
    {
      heading: "Scholarship",
      icon: <SiGooglescholar />,
      bgColor: "bg-purple-500",
      color: "text-purple-500",
    },
  ];
  return (
    <section className="">
      <div className="mx-auto grid w-10/12 grid-cols-4 gap-12">
        {data.map((value, index) => (
          <ScholarshipCard
            key={index}
            para="Available"
            heading={value.heading}
            className={`${value.bgColor}`}
            icon={value.icon}
            color={value.color}
          />
        ))}
      </div>
    </section>
  );
};

export default Scholarship;
