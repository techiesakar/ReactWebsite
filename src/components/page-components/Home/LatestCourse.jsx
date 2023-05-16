import React from "react";
import LatestBg from "components/resources/images/LatestCourseBg.png";
import { MdHourglassTop } from "react-icons/md";

const LatestCourse = () => {
  return (
    <section>
      <div
        className="bg-cover w-full relative  bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${LatestBg})` }}
      >
        <div className="flex items-center bg-gradient-to-r from-indigo-500  to-blue-500/80 w-7/12 min-h-[768px]">
          <div className=" text-white text-left py-32 absolute w-screen">
            <div className="w-10/12 mx-auto">
              <div>
                <h1 className="text-6xl mb-12  font-semibold">
                  Latest Courses
                </h1>
                <p className="text-lg mb-12 w-110">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptate esse nobis accusamus enim quisquam adipisci,
                  delectus doloremque. Temporibus, cumque suscipit.
                </p>
                <div className="flex gap-14">
                  <div className="text-left flex flex-col gap-6">
                    <MdHourglassTop className="text-5xl" />
                    <h2 className="text-xl font-semibold">
                      Bachelor of Graphics Design
                    </h2>
                    <button className=" px-4 border border-gray-300 hover:text-blue-600 transition duration-300 rounded-md text-lg py-3 hover:bg-gray-100 flex justify-start">
                      Apply Now
                    </button>
                  </div>
                  <div className="text-left flex flex-col gap-6">
                    <MdHourglassTop className="text-5xl" />
                    <h2 className="text-xl font-semibold">
                      Bachelor of Graphics Design
                    </h2>
                    <button className=" px-4 border border-gray-300 hover:text-blue-600 transition duration-300 rounded-md text-lg py-3 hover:bg-gray-100 flex justify-start">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestCourse;
