// file imports
// components
// utils
import Route from "../utils/Route";
// style
import "./style.scss";

// package imports
import { useParams } from "react-router-dom";

const Blog = () => {
  const blogId = useParams("id");

  const Content = () => <div>blog content</div>;

  return <Route content={<Content />} title={blogId} />;
};

export default Blog;
