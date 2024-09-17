// file imports
// components
// utils
import Route from "../utils/Route";
// style
import "./style.scss";

const Contact = () => {
  const Content = () => <div>contact content</div>;

  return <Route content={<Content />} title={"contact"} />;
};

export default Contact;
