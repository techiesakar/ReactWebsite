import React from "react";
import bgImage from "components/resources/images/applicationBG.png";

const ApplicationForm = () => {
  return (
    <section className="relative">
      <div
        className="relative grid grid-cols-12 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="col-span-4 bg-gray-900/80"></div>
        <div className="col-span-8 h-[768px] bg-gradient-to-r from-indigo-500  to-blue-500/80 text-white">
          <div className="flex h-full  items-center ">
            <div className="mx-auto flex w-10/12 ">
              <div className="">
                <h2 className="mb-12  text-4xl font-semibold">
                  Apply For Application
                </h2>
                <form action="">
                  <div className="flex flex-col gap-12">
                    <div className="flex gap-12">
                      <div className="flex flex-col ">
                        <label className="px-2 font-medium">First Name</label>
                        <input
                          type="text"
                          className="w-full border-b-2 border-b-gray-400 bg-transparent p-2 text-lg outline-none transition duration-300 focus:border-b-white"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="px-2 font-medium">Last Name</label>
                        <input
                          type="text"
                          className="w-full border-b-2 border-b-gray-400 bg-transparent p-2 text-lg outline-none transition duration-300 focus:border-b-white"
                        />
                      </div>
                    </div>
                    <div className="flex gap-12">
                      <div className="flex flex-col ">
                        <label className="px-2 font-medium">Phone Number</label>
                        <input
                          type="text"
                          className="w-full border-b-2 border-b-gray-400 bg-transparent p-2 text-lg outline-none transition duration-300 focus:border-b-white"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="px-2 font-medium">Email</label>
                        <input
                          type="text"
                          className="w-full border-b-2 border-b-gray-400 bg-transparent p-2 text-lg outline-none transition duration-300 focus:border-b-white"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="px-2 font-medium">Message</label>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="4"
                        className="w-full border-b-2 border-b-gray-400 bg-transparent p-2 text-lg outline-none transition duration-300 focus:border-b-white"
                      ></textarea>
                    </div>
                    <div>
                      <button className=" flex justify-start rounded-md border border-gray-300 px-4 py-3 text-lg transition duration-300 hover:bg-gray-100 hover:text-blue-600">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
