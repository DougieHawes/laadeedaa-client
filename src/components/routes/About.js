// file imports
// components
// utils
import Route from "../utils/Route";
// style
import "./style.scss";

const About = () => {
  const Content = () => <div>about content</div>;

  return <Route content={<Content />} title={"about"} />;
};

export default About;
