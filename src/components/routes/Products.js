// file imports
// components
// utils
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

  useEffect(() => {
    if (products) {
      console.log(products);
    }
  });

  if (loading) {
    return <Loading />;
  }

  if (errorMessage) {
    return <ErrorMessage />;
  }

  const Content = () => (
    <div>
      {products.map((p) => (
        <div key={p.id}>
          <img
            src={p.fields.image[0].url}
            alt={`visual for ${p.fields.title}`}
          />
          <h3>{p.fields.title}</h3>
          <p>{p.fields.subtitle}</p>
          <div dangerouslySetInnerHTML={{ __html: p.fields.description }}></div>
        </div>
      ))}
    </div>
  );

  if (products) {
    return <Route content={<Content />} title={"products"} />;
  }
};

export default Products;
