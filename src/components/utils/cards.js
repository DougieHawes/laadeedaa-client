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

export const Card2 = ({ description, image, stocked, subtitle, title }) => (
  <div className="card2">
    <div className="card2-image-container">
      <img className="card2-image" src={image} alt={`visual for ${title}`} />
      <div className="card2-buttons">
        {stocked === "true" ? (
          <div className="card2-button-container">
            <p className="card2-button-text">in stock</p>
            <a
              className="card2-button card2-button-red"
              href="https://www.etsy.com/uk/shop/LaaDeeDaaUK"
              rel="noreferrer"
              target="_blank"
            >
              buy now
            </a>
          </div>
        ) : (
          <div className="card2-button-container">
            <p className="card2-button-text">interested?</p>
            <Link to="/contact" className="card2-button card2-button-red">
              contact me
            </Link>
          </div>
        )}
        <div className="card2-button-container">
          <p className="card2-button-text">more details</p>
          <Link to={`/${title}`} className="card2-button card2-button-green">
            click here
          </Link>
        </div>
      </div>
    </div>
    <div className="card2-main">
      <p className="card2-main-subtitle">{subtitle}</p>
      <div
        className="card2-text"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </div>
  </div>
);

const setToDate = (d) => {
  let day = d.substring(8, 10);
  let month = d.split("-")[1];
  const year = d.substring(2, 4);

  if (day[1] === "1") {
    day = day + "st";
  } else if (day[1] === "2") {
    day = day + "nd";
  } else if (day[1] === "3") {
    day = day + "rd";
  } else {
    day = day + "th";
  }

  if (day.charAt(0) === "0") {
    day = day.substring(1);
  }

  switch (month) {
    case "01":
      month = "January";
      break;
    case "02":
      month = "Feburary";
      break;
    case "03":
      month = "March";
      break;
    case "04":
      month = "April";
      break;
    case "05":
      month = "May";
      break;
    case "06":
      month = "June";
      break;
    case "07":
      month = "July";
      break;
    case "08":
      month = "August";
      break;
    case "09":
      month = "September";
      break;
    case "10":
      month = "October";
      break;
    case "11":
      month = "November";
      break;
    case "12":
      month = "December";
      break;
    default:
      break;
  }

  return `${day} ${month} '${year}`;
};

export const Card3 = ({ date, id, image, text, title }) => (
  <div className="card3">
    <div className="card3-image-container">
      <img className="card3-image" src={image} alt="" />
    </div>
    <div className="card3-body">
      <div className="card3-body-header">
        <h3 className="card3-title">{title}</h3>
        <p className="card3-date">{setToDate(date)}</p>
      </div>
      <div className="card3-text-body">
        <div
          className="card3-text"
          dangerouslySetInnerHTML={{ __html: text }}
        ></div>
      </div>
    </div>
    <div className="card3-buttons">
      <Link className="card3-button" to={`/blog/${id}`}>
        read more
      </Link>
    </div>
  </div>
);

export const Card4 = ({ date, image, text, title }) => (
  <div className="card4">
    <div className="card4-image-container">
      <img className="card4-image" src={image} alt="" />
    </div>
    <h3 className="card4-title">{title}</h3>
    <p className="card4-date">{setToDate(date)}</p>
    <div
      className="card4-text"
      dangerouslySetInnerHTML={{ __html: text }}
    ></div>
  </div>
);
