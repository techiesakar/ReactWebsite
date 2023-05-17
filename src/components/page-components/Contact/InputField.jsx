import React from "react";

const InputField = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className=" w-full border border-gray-300 p-3 outline-none"
    />
  );
};

export default InputField;
