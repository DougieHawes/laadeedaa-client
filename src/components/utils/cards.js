// file imports
// style
import "./style.scss";

// package imports
import { Link } from "react-router-dom";

export const Card1 = ({ description, image, stocked, subtitle, title }) => (
  <div className="card card1">
    <div className="card-header card1-header">
      <h3 className="card-title card1-title">{title}</h3>
      <p className="card-subtitle card1-subtitle">{subtitle}</p>
    </div>
    <div className="card-image-container card1-image-container">
      <img
        className="card-image card1-image"
        src={image}
        alt={`visual for ${title}`}
      />
    </div>
    <div className="card-main card1-main">
      <div
        className="card-text card1-text"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
      <div className="card-buttons card1-buttons">
        {stocked === "true" ? (
          <div className="card-button-container card1-button-container">
            <p className="card-button-text card1-button-text">in stock</p>
            <a
              className="card-button card-button-red card1-button"
              href="https://www.etsy.com/uk/shop/LaaDeeDaaUK"
              rel="noreferrer"
              target="_blank"
            >
              buy now
            </a>
          </div>
        ) : (
          <div className="card-button-container card1-button-container">
            <p className="card-button-text card1-button-text">interested?</p>
            <Link
              to="/contact"
              className="card-button card-button-red card1-button"
            >
              contact me
            </Link>
          </div>
        )}
        <div className="card-button-container card1-button-container">
          <p className="card-button-text card1-button-text">more details</p>
          <Link
            to={`/${title}`}
            className="card-button card-button-green card1-button"
          >
            click here
          </Link>
        </div>
      </div>
    </div>
  </div>
);
