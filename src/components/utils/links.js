// file imports
// style
import "./style.scss";

// package imports
import { Link } from "react-router-dom";

export const Link1 = ({ text, to }) => {
  return <Link to={to}>{text}</Link>;
};
