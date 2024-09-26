// file imports
// components
// utils
import ErrorMessage from "../utils/ErrorMessage";
import Loading from "../utils/Loading";
import { Review1 } from "../utils/reviews";
import Route from "../utils/Route";
// config
import { AIRTABLE_API_KEY, BASE_ID } from "../../airtable/config";
// style
import "./style.scss";

// package imports
import axios from "axios";
import { useState, useEffect } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      setLoading(true);
      try {
        const fetchedReviews = await axios.get(
          `https://api.airtable.com/v0/${BASE_ID}/reviews`,
          {
            headers: {
              Authorization: `Bearer ${AIRTABLE_API_KEY}`,
            },
          }
        );

        function shuffleArray(array) {
          let newArray = array.slice();
          for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
          }

          return newArray;
        }

        const shuffledReviews = shuffleArray(fetchedReviews.data.records);
        setReviews(shuffledReviews);
        setLoading(false);
      } catch (error) {
        setErrorMessage(error);
      }
    };
    getReviews();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (errorMessage) {
    return <ErrorMessage />;
  }

  const Content = () => (
    <div className="reviews-container">
      {reviews.map((r) => (
        <Review1
          key={r.id}
          image={r.fields.image[0].url}
          name={r.fields.reviewername}
          product={r.fields.product}
          type={r.fields.frametype}
        />
      ))}
    </div>
  );

  return <Route content={<Content />} title={"reviews"} />;
};

export default Reviews;
