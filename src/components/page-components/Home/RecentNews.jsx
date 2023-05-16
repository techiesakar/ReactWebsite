import React from "react";
import RecentNewsCard from "./Card/RecentNewsCard";
import newsImage from "components/resources/images/RecentNewsCard.png";

const RecentNews = () => {
  console.log(newsImage);
  const news = [
    {
      title: "Those Other College Expenses You Aren't Thinking About",
      btnBg: "bg-yellow-500",
      image: newsImage,
      tag: "Group Study",
    },
    {
      title: "Those Other College Expenses You Aren't Thinking About",
      btnBg: "bg-cyan-500",
      image: newsImage,
      tag: "Hell Life",
    },
    {
      title: "Those Other College Expenses You Aren't Thinking About",
      btnBg: "bg-purple-500",
      image: newsImage,
      tag: "Hell Life",
    },
  ];
  return (
    <section>
      <div className="mx-auto w-10/12">
        <h1 className="mb-8 text-center text-4xl font-semibold">Recent News</h1>
        <div className="mx-auto">
          <p className="mb-8 text-center tracking-wide text-gray-900">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
            minus ipsa tenetur, eveniet aspernatur doloremque.
          </p>

          <div className="grid grid-cols-3 gap-16">
            {news.map((item, index) => (
              <RecentNewsCard
                key={index}
                title={item.title}
                tag={item.tag}
                image={item.image}
                btnBg={item.btnBg}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentNews;
