import React from "react";
import { AiOutlineUser, AiOutlineMessage } from "react-icons/ai";
const PostCard = ({ title, content, image }) => {
  return (
    <div className="flex flex-col gap-4 shadow ">
      <div className="relative">
        <img src={image} alt={title} className="object-cover" />
        <div className="absolute bottom-0 left-0 flex translate-x-1/2 translate-y-1/2 flex-col items-center justify-between bg-blue-600/60 px-6 py-2 text-sm font-semibold text-white">
          <span>15</span>
          <span>Jan</span>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6 tracking-wide">
        <article className="flex flex-col gap-4 text-gray-900">
          <h1 className="text-xl font-semibold  ">{title}</h1>
          <p className="line-clamp-2">{content}</p>
        </article>
        <div className="flex gap-6 text-sm">
          <div className="flex items-center gap-2">
            <AiOutlineUser /> <span>Travel, Lifespan</span>
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineMessage />
            <span>03 Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
