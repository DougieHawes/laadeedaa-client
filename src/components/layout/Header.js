// file imports
// layout
import { Link1 } from "../utils/links";
// utils
// style
import "./style.scss";

// media imports
import Logo from "../../media/images/logo.png";

// package imports
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <div className="header-logo-container">
          <img className="header-logo" src={Logo} alt="LaaDeeDaa logo" />
          <h1 className="header-title">LAA DEE DAA</h1>
        </div>
      </Link>
      <div className="header-links">
        <div className="header-main-links">
          <Link1 text="products" to="/" />
          <Link1 text="blog" to="/blog" />
          <Link1 text="about" to="/about" />
        </div>
        <div className="header-contact-link">
          <Link1 text="contact" to="/contact" />
        </div>
      </div>
    </header>
  );
};

export default Header;
