import React from "react";

const PageHeader = ({ image, title }) => {
  return (
    <div className="bg-contain" style={{ backgroundImage: `url(${image})` }}>
      <div className="mx-auto flex h-96 w-10/12 items-center">
        <h1 className="text-6xl font-semibold text-white">{title}</h1>
      </div>
    </div>
  );
};

export default PageHeader;
