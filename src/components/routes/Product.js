import { Card2 } from "../utils/cards";
import Route from "../utils/Route";
import { AIRTABLE_API_KEY, BASE_ID } from "../../airtable/config";
import "./style.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const [focusedProduct, setFocusedProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const { title } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.airtable.com/v0/${BASE_ID}/products`,
          {
            headers: {
              Authorization: `Bearer ${AIRTABLE_API_KEY}`,
            },
            params: {
              filterByFormula: `title="${title}"`,
            },
          }
        );
        const fetchedProduct = await response.data.records[0]?.fields;
        if (fetchedProduct) {
          setFocusedProduct(fetchedProduct);
        } else {
          setErrorMessage("Product not found");
        }
        setLoading(false);
      } catch (error) {
        setErrorMessage("An error occurred while fetching the product");
        setLoading(false);
      }
    };
    getProduct();
  }, [title]);

  const { description, image, stocked, subtitle } = focusedProduct;

  const Content = () => (
    <Card2
      description={description}
      image={image[0].url}
      stocked={stocked}
      subtitle={subtitle}
    />
  );

  if (loading) {
    return <div>Loading...</div>;
  }
  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  return <Route content={<Content />} stocked={stocked} title={title} />;
};

export default Product;
