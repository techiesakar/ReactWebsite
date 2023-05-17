import React from "react";
import bannerImg from "components/resources/images/PageHeaderBg.png";
import PageHeader from "components/page-components/SinglePage/PageHeader";
import PopularPrograms from "components/page-components/Home/PopularPrograms";

const Courses = () => {
  return (
    <div>
      <div className="flex flex-col gap-24">
        <PageHeader title={"Our Courses"} image={bannerImg} />
        <PopularPrograms />
      </div>
    </div>
  );
};

export default Courses;
