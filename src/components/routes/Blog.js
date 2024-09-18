// file imports
// components
// utils
import { Card3 } from "../utils/cards";
import ErrorMessage from "../utils/ErrorMessage";
import Loading from "../utils/Loading";
import Route from "../utils/Route";
// config
import { AIRTABLE_API_KEY, BASE_ID } from "../../airtable/config";
// style
import "./style.scss";

// package imports
import axios from "axios";
import { useEffect, useState } from "react";

const Blog = () => {
  const [blogItems, setBlogItems] = useState();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const getBlogItems = async () => {
      try {
        setLoading(true);
        const fetchedBlog = await axios.get(
          `https://api.airtable.com/v0/${BASE_ID}/blog`,
          {
            headers: {
              Authorization: `Bearer ${AIRTABLE_API_KEY}`,
            },
          }
        );
        setBlogItems(fetchedBlog.data.records);
        setLoading(false);
      } catch (error) {
        setErrorMessage(error);
      }
    };

    getBlogItems();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (errorMessage) {
    return <ErrorMessage message={errorMessage} />;
  }

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

  return (
    <Route
      content={
        <div className="blog-grid">
          {blogItems &&
            blogItems.map((b) => (
              <Card3
                key={b.id}
                date={setToDate(b.createdTime)}
                image={b.fields.image[0].url}
                id={b.id}
                text={b.fields.text}
                title={b.fields.title}
              />
            ))}
        </div>
      }
      title={"blog"}
    />
  );
};

export default Blog;
