import PageHeader from "components/page-components/SinglePage/PageHeader";
import bannerImg from "components/resources/images/PageHeaderBg.png";

import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="flex flex-col gap-24">
        <PageHeader title={"Contact"} image={bannerImg} />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14137.786623297841!2d83.45368345!3d27.641649399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1684311611631!5m2!1sen!2snp"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="mx-auto grid w-10/12 grid-cols-12">
          <div className="col-span-8">
            <h2 className="mb-12 text-4xl">Get in touch</h2>
            <form action="" className="flex flex-col gap-12">
              <textarea
                name=""
                id=""
                rows="10"
                className="w-full border border-gray-300"
              ></textarea>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 p-3"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border border-gray-300 p-3"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="email"
                    placeholder="Subject"
                    className=" w-full border border-gray-300 p-3"
                  />
                </div>
              </div>

              <div>
                <button className="rounded border border-gray-300 px-8 py-4 text-lg text-gray-900 transition hover:bg-gray-100 hover:text-blue-600">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-span-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
