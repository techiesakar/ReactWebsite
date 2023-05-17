import React from "react";
import bannerImg from "components/resources/images/PageHeaderBg.png";
import ApplicationForm from "components/page-components/Home/ApplicationForm";
import PageHeader from "components/page-components/SinglePage/PageHeader";

const ApplyPage = () => {
  return (
    <div>
      <div className="flex flex-col gap-12">
        <PageHeader title={"Apply Now"} image={bannerImg} />
        <ApplicationForm />
      </div>
    </div>
  );
};

export default ApplyPage;
