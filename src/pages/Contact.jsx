import InputField from "components/page-components/Contact/InputField";
import PageHeader from "components/page-components/SinglePage/PageHeader";
import bannerImg from "components/resources/images/PageHeaderBg.png";
import { MdDashboard } from "react-icons/md";
import { AiOutlineMessage, AiFillPhone } from "react-icons/ai";

import React from "react";

const Contact = () => {
  const inputField = [
    {
      placeholder: "Enter your name",
      type: "text",
    },
    {
      placeholder: "Email",
      type: "email",
    },
    {
      placeholder: "Enter Subject",
      type: "text",
    },
  ];
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
        <div className="mx-auto w-10/12">
          <h2 className="mb-12 text-4xl">Get in touch</h2>
          <div className=" grid grid-cols-12 gap-8">
            <div className="col-span-8">
              <form action="" className="flex  flex-col gap-12">
                <textarea
                  name=""
                  id=""
                  rows="10"
                  className="w-full resize-none border border-gray-300 outline-none"
                ></textarea>

                <div className="grid grid-cols-2 gap-4 gap-y-8">
                  {inputField.map((field, index) => (
                    <InputField
                      key={index}
                      type={field.type}
                      placeholder={field.placeholder}
                    />
                  ))}
                </div>

                <div>
                  <button className="rounded border border-gray-300 px-8 py-4 text-lg text-gray-900 transition hover:bg-gray-100 hover:text-blue-600">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="col-span-4">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-end gap-4">
                  <div className="text-2xl">
                    <MdDashboard />
                  </div>
                  <div>
                    <div className="text-xl">Buttonwood, California</div>
                    <div className="text-gray-700">Rosemead CA 1793</div>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-4">
                  <div className="text-2xl">
                    <AiOutlineMessage />
                  </div>
                  <div>
                    <div className="text-xl">Buttonwood, California</div>
                    <div className="text-gray-700">Rosemead CA 1793</div>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-4">
                  <div className="text-2xl">
                    <AiFillPhone />
                  </div>
                  <div>
                    <div className="text-xl">Buttonwood, California</div>
                    <div className="text-gray-700">Rosemead CA 1793</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
