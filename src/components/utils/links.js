// file imports
// style
import "./style.scss";

// package imports
import { Link } from "react-router-dom";

export const Link1 = ({ text, to }) => (
  <Link className="link link-1" to={to}>
    {text}
  </Link>
);

export const Link2 = ({ anchor = true, blank = true, image, to }) => (
  <div className="link-2">
    {anchor ? (
      <a href={to} target={blank ? "_blank" : ""} rel="noreferrer">
        <img className="link-2-icon" src={image} alt="" />
      </a>
    ) : (
      <Link to={to}>
        <img className="link-2-icon" src={image} alt="" />
      </Link>
    )}
  </div>
);
