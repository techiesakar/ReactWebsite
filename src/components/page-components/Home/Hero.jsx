import React from "react";
import bannerImg from "../../resources/images/banner.jpg";
const Hero = () => {
  return (
    <section
      className="h-screen min-h-[420px] w-full lg:bg-no-repeat lg:bg-cover flex items-center justify-start relative"
      style={{ backgroundImage: `url(${bannerImg}) ` }}
    >
      <div className="lg:w-10/12 mx-auto h-full flex w-full lg:bg-transparent bg-gray-200 items-center justify-center lg:justify-start">
        <div className="lg:w-2/6 w-10/12 flex flex-col gap-8 ">
          <h2 className="lg:text-3xl text-4xl text-left">
            Boost up your skills with a new way of learning
          </h2>
          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 transition text-white uppercase px-5 py-3 rounded">
              Get Start
            </button>
            <button className="border bg-white hover:bg-gray-100 transition border-gray-300 text-gray-900 uppercase px-5 py-3 rounded">
              Take a Tour
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
