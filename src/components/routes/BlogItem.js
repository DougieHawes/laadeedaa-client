// file imports
// components
// utils
import { Card4 } from "../utils/cards";
import ErrorMessage from "../utils/ErrorMessage";
import Loading from "../utils/Loading";
import Route from "../utils/Route";
// config
import { AIRTABLE_API_KEY, BASE_ID } from "../../airtable/config";
// style
import "./style.scss";

// package imports
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Blog = () => {
  const [blogItem, setBlogItem] = useState();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const { blogid } = useParams();

  useEffect(() => {
    const getBlogItem = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.airtable.com/v0/${BASE_ID}/blog`,
          {
            headers: {
              Authorization: `Bearer ${AIRTABLE_API_KEY}`,
            },
          }
        );
        const records = await response.data.records;
        const fetchedItem = records.find((r) => r.id === blogid);
        setBlogItem(fetchedItem);
        setLoading(false);
      } catch (error) {
        setErrorMessage(error);
        setLoading(false);
      }
    };

    getBlogItem();
  }, [blogid]);

  if (loading) {
    return <Loading />;
  }

  if (errorMessage) {
    return <ErrorMessage />;
  }

  return (
    <Route
      content={
        blogItem && (
          <Card4
            date={blogItem.createdTime}
            image={blogItem.fields.image[0].url}
            text={blogItem.fields.text}
            title={blogItem.fields.title}
          />
        )
      }
    />
  );
};

export default Blog;
