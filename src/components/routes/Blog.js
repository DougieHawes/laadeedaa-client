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
        console.log(error);
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

  return (
    <Route
      content={
        <div className="blog-grid">
          {blogItems &&
            blogItems.map((b) => (
              <Card3
                key={b.id}
                date={b.createdTime}
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
