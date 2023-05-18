import React from "react";
import Hero from "components/page-components/Home/Hero";
import Scholarship from "components/page-components/Home/Scholarship";
import PopularPrograms from "components/page-components/Home/PopularPrograms";
import LatestCourse from "components/page-components/Home/LatestCourse";
import Events from "components/page-components/Home/Events";
import ApplicationForm from "components/page-components/Home/ApplicationForm";
import RecentNews from "components/page-components/Home/RecentNews";

const Home = () => {
  return (
    <div className="flex flex-col gap-24 ">
      <Hero />
      <Scholarship />
      <PopularPrograms />
      <LatestCourse />
      <Events />
      <ApplicationForm />
      <RecentNews />
    </div>
  );
};

export default Home;
