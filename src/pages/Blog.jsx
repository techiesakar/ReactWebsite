import { React, useState } from "react";
import bannerImg from "components/resources/images/PageHeaderBg.png";
import PageHeader from "components/page-components/SinglePage/PageHeader";
import postImage from "components/resources/images/blogFeaturedImage.png";
import PostCard from "components/page-components/Blog/PostCard";
import { BsSearch } from "react-icons/bs";
import Button from "components/ui/button/Button";
import Pagination from "components/ui/pagination/Pagination";

const Blog = () => {
  const [startPagination, setStartPagination] = useState(0);
  const [endPagination, setEndPagination] = useState(3);

  // 0 1*3
  // 3 2*3
  // 6 3*3
  // 9 4*3

  const pagination = (a) => {
    alert(a);
    let newStarting = (a - 1) * 3;
    setStartPagination(newStarting);
    setEndPagination(a * 3);
  };

  const posts = [
    {
      title: "Google inks pact for new 35 storey office 1",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      image: postImage,
    },
    {
      title: "Google inks pact for new 35 storey office 1",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      image: postImage,
    },
    {
      title: "Google inks pact for new 35 storey office 1",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      image: postImage,
    },
    {
      title: "Google inks pact for new 35 storey office 2",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      image: postImage,
    },
    {
      title: "Google inks pact for new 35 storey office 2",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      image: postImage,
    },
    {
      title: "Google inks pact for new 35 storey office 2",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      image: postImage,
    },
    {
      title: "Google inks pact for new 35 storey office 3",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      image: postImage,
    },
    {
      title: "Google inks pact for new 35 storey office 3",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      image: postImage,
    },
    {
      title: "Google inks pact for new 35 storey office 3",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      image: postImage,
    },
  ];
  const categories = [
    {
      name: "Restaurant",
    },
    {
      name: "Food",
    },
    {
      name: "Technology",
    },
    {
      name: "Items",
    },
    {
      name: "Clothing",
    },
    {
      name: "Bars",
    },
  ];
  return (
    <div>
      <div className="flex flex-col gap-12">
        <PageHeader title={"Blog"} image={bannerImg} />
        <div className="mx-auto grid w-10/12 grid-cols-12 gap-9">
          <div className="col-span-9 grid grid-cols-1 gap-24">
            {posts.slice(startPagination, endPagination).map((post, index) => {
              // if (index >= startPagination && index < endPagination) {
              return (
                <PostCard
                  key={index}
                  image={post.image}
                  content={post.content}
                  title={post.title}
                />
              );
            })}
            <div>
              <Pagination page={pagination} pages={posts.length / 3} />
            </div>
          </div>
          <div className="col-span-3 flex flex-col gap-6">
            <div className="flex flex-col gap-6 rounded-md bg-gray-100 p-4">
              <div className="relative rounded border-2 border-gray-300">
                <input
                  type="text"
                  placeholder="Search Keywords"
                  className="w-full border-0 px-3 py-4 outline-none"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl">
                  <BsSearch />
                </span>
              </div>
              <div>
                <Button
                  title="Search"
                  className="w-full rounded border border-gray-300 px-6 py-4 text-lg text-gray-900 transition hover:bg-gray-100 hover:text-blue-600"
                />
              </div>
            </div>
            <div className="flex flex-col gap-6 rounded-md bg-gray-100 p-8">
              <div className="relative">
                <h4 className="mb-4 text-xl font-semibold">Category</h4>
                <ul className="flex flex-col gap-6 text-gray-900">
                  {categories.map((val, i) => (
                    <li>{val.name}</li>
                  ))}
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
