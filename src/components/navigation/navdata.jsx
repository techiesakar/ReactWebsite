const navlinks = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Courses",
    to: "/courses",
  },
  {
    name: "Blog",
    children: [
      {
        name: "Blog",
        to: "/blog",
      },
      {
        name: "Single Blog",
        to: "/blog/single",
      },
    ],
  },
  {
    name: "Page",
    to: "/page",
  },
  {
    name: "Contact",
    to: "/contact",
  },
];

export default navlinks;
