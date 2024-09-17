// file imports
// components
// utils
import Route from "../utils/Route";
// style
import "./style.scss";

// package imports
import { useParams } from "react-router-dom";

const Product = () => {
  const { productid } = useParams();

  const Content = () => <div>product content</div>;

  return <Route content={<Content />} title={productid} />;
};

export default Product;
