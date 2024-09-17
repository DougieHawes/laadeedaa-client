// file imports
// components
// utils
import Route from "../utils/Route";
// style
import "./style.scss";

const Products = () => {
  const Content = () => <div>products content</div>;

  return <Route content={<Content />} title={"products"} />;
};

export default Products;
