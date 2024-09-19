// file imports
// images
import Avatar from "../../media/images/avatar.jpg";
import Image1 from "../../media/images/image1.jpg";
import Email from "../../media/images/social-email.png";
import Etsy from "../../media/images/social-etsy.png";
import Phone from "../../media/images/social-phone.png";
import Whatsapp from "../../media/images/social-whatsapp.png";
// components
// utils
import Route from "../utils/Route";
// style
import "./style.scss";

// package imports
import { Link } from "react-router-dom";

const About = () => {
  const Content = () => (
    <div className="about-container">
      <div className="about-section about-section1">
        <h3 className="about-section-title">Our Story</h3>
        <p className="about-section-text">
          Our story began a year ago in the heart of Huntingdon, Cambridgeshire.
          With a passion for creativity and craftsmanship, we set out to bring
          unique, handcrafted products to life. Since then, we've grown into a
          dedicated team, driven by a love for art and design, committed to
          offering quality and originality in everything we create.
        </p>
      </div>
      <div className="about-image-container">
        <img className="about-image" src={Image1} alt="" />
      </div>
      <div className="about-section about-section2">
        <h3 className="about-section-title">What We Believe In</h3>
        <p className="about-section-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          dignissim, lacus non auctor placerat, justo quam aliquet eros, ac
          tristique arcu lacus sit amet nunc. Sed tempus vehicula ex at sodales.
          Vivamus porta nisl non lorem rutrum laoreet. Integer malesuada
          venenatis ligula, a lacinia est volutpat ut.
        </p>
      </div>
      <div className="about-section about-section1">
        <h3 className="about-section-title">Our Mission</h3>
        <p className="about-section-text">
          At the core of our company is a belief in the power of creativity,
          quality, and sustainability. We strive to create products that not
          only inspire but also stand the test of time. Supporting local
          artisans and using ethically sourced materials, we believe in making a
          positive impact on both our community and the environment.
        </p>
      </div>
      <div className="about-section about-section3">
        <div className="about-section3-left">
          <img className="about-avatar" src={Avatar} alt="Dougie Hawes" />
        </div>
        <div className="about-section3-right">
          <h3 className="about-section-title">Meet the Founder</h3>
          <p className="about-section-text">
            Meet Dougie Hawes, the founder and creative force behind our
            company. Growing up in London, Dougie developed a deep passion for
            art, drawing inspiration from icons like Lichtenstein and
            Hundertwasser. When he's not creating, Dougie works in care,
            bringing his compassionate nature into everything he does. His
            vision blends bold design with heartfelt purpose, shaping every
            piece we create.
          </p>
        </div>
      </div>
      <div className="about-section about-section4">
        <h3 className="about-section-title">
          Want to Collaborate or Purchase Our Art?
        </h3>
        <p className="about-section-text">
          Interested in collaborating or purchasing one of our unique pieces?
          We’d love to hear from you! Whether you have a custom idea or want to
          explore our current collection, we’re always excited to connect with
          fellow art lovers. Reach out to us for more information, and let’s
          create something truly special together.
        </p>
        <div className="about-contact-grid">
          <div className="about-contact-grid-item">
            <p className="about-contact-text">Etsy</p>
            <a
              className="about-contact-link"
              href="https://www.etsy.com/uk/shop/LaaDeeDaaUK"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="about-contact-icon"
                src={Etsy}
                alt="about contact icon"
              />
            </a>
          </div>
          <div className="about-contact-grid-item">
            <p className="about-contact-text">email</p>
            <Link className="about-contact-link" to="/contact">
              <img
                className="about-contact-icon"
                src={Email}
                alt="about contact icon"
              />
            </Link>
          </div>
          <div className="about-contact-grid-item">
            <p className="about-contact-text">phone</p>
            <a
              className="about-contact-link"
              href="tel:+447742148280"
              rel="noreferrer"
            >
              <img
                className="about-contact-icon"
                src={Phone}
                alt="about contact icon"
              />
            </a>
          </div>
          <div className="about-contact-grid-item">
            <p className="about-contact-text">Whatsapp</p>
            <a
              className="about-contact-link"
              href="https://wa.me/447742148280"
              rel="noreferrer"
            >
              <img
                className="about-contact-icon"
                src={Whatsapp}
                alt="about contact icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return <Route content={<Content />} title={"about"} />;
};

export default About;
