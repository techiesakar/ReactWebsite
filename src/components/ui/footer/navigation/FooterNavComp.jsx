import React from "react";

const FooterNavComp = ({ title }) => {
  return (
    <div className="flex flex-col gap-6 md:col-span-3">
      <h4 className="text-2xl font-semibold">{title}</h4>
      <ul className="flex flex-col gap-2">
        <li>Online Earning</li>
        <li>About us</li>
        <li>Careers</li>
        <li>Press Center</li>
        <li>Become an Instructor</li>
      </ul>
    </div>
  );
};

export default FooterNavComp;
