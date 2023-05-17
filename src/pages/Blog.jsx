import React from "react";
import bannerImg from "components/resources/images/PageHeaderBg.png";
import PageHeader from "components/page-components/SinglePage/PageHeader";
import postImage from "components/resources/images/blogFeaturedImage.png";
import PostCard from "components/page-components/Blog/PostCard";
import { BsSearch } from "react-icons/bs";
import Button from "components/ui/button/Button";

const Blog = () => {
  const posts = [
    {
      title: "Google inks pact for new 35 storey office",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      image: postImage,
    },
    {
      title: "Google inks pact for new 35 storey office",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      image: postImage,
    },
    {
      title: "Google inks pact for new 35 storey office",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      image: postImage,
    },
    {
      title: "Google inks pact for new 35 storey office",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      image: postImage,
    },
  ];
  return (
    <div>
      <div className="flex flex-col gap-12">
        <PageHeader title={"Blog"} image={bannerImg} />
        <div className="mx-auto grid w-10/12 grid-cols-12 gap-9">
          <div className="col-span-9 grid grid-cols-2 gap-6">
            {posts.map((post, index) => (
              <PostCard
                key={index}
                image={post.image}
                content={post.content}
                title={post.title}
              />
            ))}
          </div>
          <div className="col-span-3 flex flex-col gap-6">
            <div className="flex flex-col gap-6 rounded-md bg-gray-100 p-4">
              <div className="relative rounded border-2 border-gray-300">
                <input
                  type="text"
                  placeholder="Search Keywords"
                  className="w-full border-0 px-4 py-6 outline-none"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl">
                  <BsSearch />
                </span>
              </div>
              <div>
                <Button
                  title="Search"
                  className="w-full rounded border border-gray-300 px-8 py-6 text-lg text-gray-900 transition hover:bg-gray-100 hover:text-blue-600"
                />
              </div>
            </div>
            <div className="flex flex-col gap-6 rounded-md bg-gray-100 p-8">
              <div className="relative">
                <h4 className="mb-4 text-xl font-semibold">Category</h4>
                <ul className="flex flex-col gap-6 text-gray-900">
                  <li>Restaurant</li>
                  <li>Food</li>
                  <li>Technology</li>
                  <li>Items</li>
                  <li>Clothing</li>
                  <li>Bars</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
