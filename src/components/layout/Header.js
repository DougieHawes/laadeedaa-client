// file imports
// layout
import { Link1 } from "../utils/links";
// utils
// style
import "./style.scss";

// package imports
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="">
        <h1>LAA DEE DAA</h1>
      </Link>
      <Link1 text="products" to="/" />
      <Link1 text="blog" to="/blog" />
      <Link1 text="about" to="/about" />
      <Link1 text="contact" to="/contact" />
    </div>
  );
};

export default Header;
