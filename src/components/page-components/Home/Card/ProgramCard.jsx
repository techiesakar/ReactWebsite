import React from "react";

const ProgramCard = ({ image, category, title, content }) => {
  return (
    <div className="cursor-pointer overflow-hidden rounded-lg border border-gray-200 shadow-sm transition duration-500 hover:-translate-y-4 hover:bg-gray-50">
      <div>
        <img className="w-full bg-gray-900 object-cover" src={image} alt="" />
      </div>
      <div className="border-gray-300 p-8 text-left  text-gray-900">
        <span className="mb-3 inline-block tracking-wider hover:text-blue-600 ">
          {category}
        </span>
        <h2 className="mb-3 text-2xl font-semibold tracking-wider transition duration-500 hover:text-blue-600">
          {title}
        </h2>
        <p className="mb-3 line-clamp-3 text-sm tracking-wider text-gray-600 transition duration-500">
          {content}
        </p>
        <div>
          <button className=" flex justify-start rounded-md border border-gray-300 px-4 py-3 text-lg transition duration-300 hover:bg-gray-100 hover:text-blue-600">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
