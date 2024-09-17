// file imports
// components
// utils
import Route from "../utils/Route";
// style
import "./style.scss";

// package imports
import { useParams } from "react-router-dom";

const Blog = () => {
  const { blogid } = useParams();

  const Content = () => <div>blog content</div>;

  return <Route content={<Content />} title={blogid} />;
};

export default Blog;
