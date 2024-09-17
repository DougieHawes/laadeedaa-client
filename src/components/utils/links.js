// file imports
// style
import "./style.scss";

// package imports
import { Link } from "react-router-dom";

export const Link1 = ({ text, to }) => {
  return (
    <Link
      className={`link link-1 ${text === "contact" && "link-1-contact"}`}
      to={to}
    >
      {text}
    </Link>
  );
};
