import React from "react";
import { Link } from "react-router-dom";

const Button = ({ title, onClick, className, url }) => {
  return (
    <button className={className} onClick={onClick}>
      {url ? <Link to={url}>{title}</Link> : title}
    </button>
  );
};

export default Button;
