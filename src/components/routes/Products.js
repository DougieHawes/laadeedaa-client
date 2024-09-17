// file imports
// components
// utils
import { Card1 } from "../utils/cards";
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

const Products = () => {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const fetchedProducts = await axios.get(
          `https://api.airtable.com/v0/${BASE_ID}/products`,
          {
            headers: {
              Authorization: `Bearer ${AIRTABLE_API_KEY}`,
            },
          }
        );
        setProducts(fetchedProducts.data.records);
        setLoading(false);
      } catch (error) {
        setErrorMessage(error);
      }
    };
    getProducts();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (errorMessage) {
    return <ErrorMessage />;
  }

  const Content = () => (
    <div className="products-grid">
      {products.map((p) => (
        <Card1
          description={p.fields.description}
          image={p.fields.image[0].url}
          key={p.id}
          stocked={p.fields.stocked}
          subtitle={p.fields.subtitle}
          title={p.fields.title}
        />
      ))}
    </div>
  );

  if (products) {
    return <Route content={<Content />} title={"products"} />;
  }
};

export default Products;
