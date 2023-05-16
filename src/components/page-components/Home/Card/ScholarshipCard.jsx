import React from "react";
const ScholarshipCard = (props) => {
  return (
    <>
      {/* Card Start */}
      <div
        className={`flex cursor-pointer items-center  gap-6 rounded-xl p-5 transition duration-500 hover:-translate-y-2 ${props.className}`}
      >
        <div className={`text-6xl ${props.color} rounded-full bg-white p-4`}>
          {props.icon}
        </div>
        <div className="text-left font-semibold text-white">
          <h2 className="text-2xl">{props.heading}</h2>
          <p>{props.para}</p>
        </div>
      </div>
      {/* Card Ends */}
    </>
  );
};

export default ScholarshipCard;
