// file imports
// images
import Avatar from "../../media/images/avatar.jpg";
import Frame from "../../media/images/frame1.png";
import Image1 from "../../media/images/image1.jpg";
import Email from "../../media/images/social-email.png";
import Etsy from "../../media/images/social-etsy.png";
import Linktree from "../../media/images/social-links.png";
import Phone from "../../media/images/social-phone.png";
import Whatsapp from "../../media/images/social-whatsapp.png";
// style
import "./style.scss";

// package imports
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const About1 = ({ title, text }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="about-section about-section1"
      ref={ref}
      initial={{ opacity: 0, x: 70 }}
      animate={controls}
      transition={{ duration: 0.7 }}
    >
      <h3 className="about-section-title">{title}</h3>
      <p className="about-section-text">{text}</p>
    </motion.div>
  );
};

export const About2 = ({ title, text }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="about-section about-section2"
      ref={ref}
      initial={{ opacity: 0, x: -70 }}
      animate={controls}
      transition={{ duration: 0.7 }}
    >
      <h3 className="about-section-title">{title}</h3>
      <p className="about-section-text">{text}</p>
    </motion.div>
  );
};

export const About3 = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="about-image-container"
      ref={ref}
      initial={{ opacity: 0, y: 70 }}
      animate={controls}
      transition={{ duration: 0.7 }}
    >
      <img className="about-frame" src={Frame} alt="" />
      <img className="about-image" src={Image1} alt="" />
    </motion.div>
  );
};

export const About4 = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="about-section about-section4"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.7 }}
    >
      <div className="about-section4-left">
        <img className="about-avatar" src={Avatar} alt="Dougie Hawes" />
      </div>
      <div className="about-section4-right">
        <h3 className="about-section-title">Meet the Founder</h3>
        <p className="about-section-text">
          Meet Dougie Hawes, the founder and creative force behind our company.
          Growing up in London, Dougie developed a deep passion for art, drawing
          inspiration from icons like Lichtenstein and Hundertwasser. When he's
          not creating, Dougie works in care, bringing his compassionate nature
          into everything he does. His vision blends bold design with heartfelt
          purpose, shaping every piece we create.
        </p>
      </div>
    </motion.div>
  );
};

export const About5 = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="about-section about-section5"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.7 }}
    >
      <h3 className="about-section-title">
        Want to Collaborate or Purchase Our Art?
      </h3>
      <p className="about-section-text">
        Interested in collaborating or purchasing one of our unique pieces? We’d
        love to hear from you! Whether you have a custom idea or want to explore
        our current collection, we’re always excited to connect with fellow art
        lovers. Reach out to us for more information, and let’s create something
        truly special together.
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
            target="_blank"
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
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="about-contact-icon"
              src={Whatsapp}
              alt="about contact icon"
            />
          </a>
        </div>
        <div className="about-contact-grid-item">
          <p className="about-contact-text">Linktree</p>
          <a
            className="about-contact-link"
            href="linktr.ee/laadeedaaUK"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="about-contact-icon"
              src={Linktree}
              alt="about contact icon"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
