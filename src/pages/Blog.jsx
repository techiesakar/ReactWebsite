import React from "react";
import bannerImg from "components/resources/images/PageHeaderBg.png";
import PageHeader from "components/page-components/SinglePage/PageHeader";

const Blog = () => {
  return (
    <div>
      <div className="flex flex-col gap-24">
        <PageHeader title={"Blog"} image={bannerImg} />
      </div>
    </div>
  );
};

export default Blog;
