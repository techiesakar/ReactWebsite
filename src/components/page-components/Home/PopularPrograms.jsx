import React from "react";
import ProgramCard from "./Card/ProgramCard";
import program1 from "../../resources/images/program1.png";
import program2 from "../../resources/images/program2.png";
import program3 from "../../resources/images/program3.png";

const PopularPrograms = () => {
  return (
    <section className="">
      <div className="mx-auto w-10/12">
        <h1 className="mb-12 text-center text-3xl font-semibold">
          Popular Programs
        </h1>
        <div className="mb-12 flex justify-center gap-6">
          <button className="rounded border border-blue-500 bg-blue-500 px-6 py-4 text-lg text-white transition hover:bg-blue-600">
            Graduate
          </button>
          <button className="rounded border border-gray-300  px-6 py-4 text-lg text-gray-900 transition hover:bg-gray-100 hover:text-blue-600">
            Post-Graduate
          </button>
          <button className="rounded border border-gray-300 px-6 py-4 text-lg text-gray-900 transition hover:bg-gray-100 hover:text-blue-600">
            Phd Scholarship
          </button>
          <button className="rounded border border-gray-300 px-6 py-4 text-lg text-gray-900 transition hover:bg-gray-100 hover:text-blue-600">
            Training
          </button>
        </div>
        <div className="mx-auto mb-16 grid w-full grid-cols-4 gap-14">
          <ProgramCard
            category="Agriculture"
            title="Chemical Engineering"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut "
            image={program1}
          />
          <ProgramCard
            category="Agriculture"
            title="Chemical Engineering"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
            image={program2}
          />
          <ProgramCard
            category="Agriculture"
            title="Chemical Engineering"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
            image={program3}
          />
          <ProgramCard
            category="Agriculture"
            title="Chemical Engineering"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
            image={program2}
          />
        </div>
        <div className="text-center">
          <button className="rounded border border-gray-300 px-8 py-6 text-lg text-gray-900 transition hover:bg-gray-100 hover:text-blue-600">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularPrograms;
