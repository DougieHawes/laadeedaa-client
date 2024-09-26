// file imports
// images
import Frame1 from "../../media/images/frame1.png";
import Frame2 from "../../media/images/frame2.png";
import Frame3 from "../../media/images/frame3.png";
// styles
import "./style.scss";

// package imports
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Review1 = ({ name, image, product, text, type }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 70 });
    }
  }, [controls, inView]);

  const getFrameType = () => {
    if (type === "square") {
      return Frame1;
    } else if (type === "landscape") {
      return Frame2;
    } else {
      return Frame3;
    }
  };

  return (
    <motion.div
      className="review"
      ref={ref}
      initial={{ opacity: 0, y: 70 }}
      animate={controls}
      transition={{ duration: 0.7 }}
    >
      <div className="review-image-container">
        <img className="review-frame" src={getFrameType()} alt="" />
        <img className="review-image" src={image} alt="" />
      </div>
      <h4 className="review-name">{name}</h4>
      <p className="review-text">{text}</p>
      {product && (
        <Link className="review-link" to={`/products/${product}`}>
          {product}
        </Link>
      )}
    </motion.div>
  );
};
