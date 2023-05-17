import React from "react";
import ProgramCard from "./Card/ProgramCard";
import program1 from "components/resources/images/program1.png";
import program2 from "components/resources/images/program2.png";

import program3 from "components/resources/images/program3.png";

import Button from "components/ui/button/Button";

const PopularPrograms = () => {
  const myBtns = [
    {
      title: "Graduate",
      url: "/",
      className: `rounded border border-blue-500 bg-blue-500 px-6 py-4 text-lg text-white transition hover:bg-blue-600`,
    },
    {
      title: "Post-Graduate",
      url: "/",
      className: `rounded border border-gray-300  px-6 py-4 text-lg text-gray-900 transition hover:bg-gray-100 hover:text-blue-600`,
    },
    {
      title: "Phd Scholarship",
      url: "/",
      className: `rounded border border-gray-300  px-6 py-4 text-lg text-gray-900 transition hover:bg-gray-100 hover:text-blue-600`,
    },
    {
      title: "Training",
      url: "/",
      className: `rounded border border-gray-300  px-6 py-4 text-lg text-gray-900 transition hover:bg-gray-100 hover:text-blue-600`,
    },
  ];

  const myPrograms = [
    {
      title: "Chemical Engineering",
      category: "Agriculture",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
      image: program1,
    },
    {
      title: "Chemical Engineering",
      category: "Agriculture",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
      image: program2,
    },
    {
      title: "Chemical Engineering",
      category: "Agriculture",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
      image: program3,
    },
    {
      title: "Chemical Engineering",
      category: "Agriculture",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
      image: program1,
    },
  ];
  return (
    <section className="">
      <div className="mx-auto w-10/12">
        <h1 className="mb-12 text-center text-3xl font-semibold">
          Popular Programs
        </h1>
        <div className="mb-12 flex justify-center gap-6">
          {myBtns.map((myBtn, index) => (
            <Button
              key={index}
              url={myBtn.url}
              title={myBtn.title}
              className={myBtn.className}
            />
          ))}
        </div>
        <div className="mx-auto mb-16 grid w-full grid-cols-4 gap-14">
          {myPrograms.map((myProgram, index) => (
            <ProgramCard
              key={index}
              title={myProgram.title}
              category={myProgram.category}
              content={myProgram.content}
              image={myProgram.image}
            />
          ))}
        </div>
        <div className="text-center">
          <Button
            url={"/course"}
            title="View All Courses"
            className={`rounded border border-gray-300 px-8 py-6 text-lg text-gray-900 transition hover:bg-gray-100 hover:text-blue-600`}
          />
        </div>
      </div>
    </section>
  );
};

export default PopularPrograms;
