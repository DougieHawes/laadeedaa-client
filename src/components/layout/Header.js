// file imports
// images
import Email from "../../media/images/social-email.png";
import Etsy from "../../media/images/social-etsy.png";
import Facebook from "../../media/images/social-facebook.png";
import Instagram from "../../media/images/social-instagram.png";
import Phone from "../../media/images/social-phone.png";
import TikTok from "../../media/images/social-tiktok.png";
import Twitter from "../../media/images/social-twitter.png";
import Whatsapp from "../../media/images/social-whatsapp.png";
import YouTube from "../../media/images/social-youtube.png";
// layout
import { Link1, Link2 } from "../utils/links";
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
          <Link1 text="reviews" to="/reviews" />
        </div>
        <div className="header-contact-links">
          <div className="header-contact-links-tab">contact</div>
          <div className="header-contact-links-dropdown">
            <Link2 anchor={false} image={Email} to="/contact" />
            <Link2 blank={false} image={Phone} to="tel:447742148280" />
            <Link2
              blank={false}
              image={Whatsapp}
              to="https://wa.me/447742148280"
            />
            <Link2 image={Etsy} to="https://www.etsy.com/uk/shop/LaaDeeDaaUK" />
            <Link2
              image={Facebook}
              to="https://www.facebook.com/profile.php?id=61558640347006"
            />
            <Link2
              image={Instagram}
              to="https://www.instagram.com/laadeedaauk/"
            />
            <Link2 image={Twitter} to="https://x.com/laadeedaauk" />
            <Link2 image={YouTube} to="https://www.youtube.com/@LaaDeeDaaUK" />
            <Link2 image={TikTok} to="https://www.tiktok.com/@laadeedaauk" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
