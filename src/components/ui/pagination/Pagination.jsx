import React from "react";

const Pagination = ({ page, pages }) => {
  const buttons = () => {
    console.log(pages);
    let array = [];
    for (let i = 0; i < pages; i++) {
      array.push(i);
    }
    return array.map((val, i) => {
      return (
        <button
          key={i}
          onClick={() => page(i + 1)}
          className="border border-gray-200 p-4"
        >
          {i + 1}
        </button>
      ); 
    });
  };
  return <div className="flex gap-6">{buttons()}</div>;
};

export default Pagination;
