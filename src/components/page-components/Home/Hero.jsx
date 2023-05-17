import React from "react";
import bannerImg from "../../resources/images/banner.jpg";
import Button from "components/ui/button/Button";
const Hero = () => {
  return (
    <section
      className="relative flex h-screen min-h-[420px] w-full items-center justify-start lg:bg-cover lg:bg-no-repeat"
      style={{ backgroundImage: `url(${bannerImg}) ` }}
    >
      <div className="mx-auto flex h-full w-full items-center justify-center bg-gray-200 lg:w-10/12 lg:justify-start lg:bg-transparent">
        <div className="flex w-10/12 flex-col gap-8 lg:w-2/6 ">
          <h2 className="text-left text-4xl lg:text-3xl">
            Boost up your skills with a new way of learning
          </h2>
          <div className="flex gap-4">
            <Button
              title="Get Start"
              url="/about"
              className={`rounded bg-blue-600 px-5 py-3 uppercase text-white transition hover:bg-blue-700`}
            />

            <Button
              title="Get Start"
              className={`rounded border border-gray-300 bg-white px-5 py-3 uppercase text-gray-900 transition hover:bg-gray-100`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
