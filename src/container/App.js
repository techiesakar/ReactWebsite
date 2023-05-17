import Home from "pages/Home";
import Layout from "../hoc/layout/Layout";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Courses from "pages/Courses";
import Blog from "pages/Blog";
import Contact from "pages/Contact";

function App() {
  return (
    <div className="App flex flex-col gap-24">
      <Layout>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/course"} element={<Courses />} />
          <Route path={"/blog"} element={<Blog />} />
          <Route path={"/contact"} element={<Contact />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
