// file imports
// components
// utils
import Route from "../utils/Route";
// style
import "./style.scss";

const Blog = () => {
  const Content = () => <div>blog content</div>;

  return <Route content={<Content />} title={"blog"} />;
};

export default Blog;
