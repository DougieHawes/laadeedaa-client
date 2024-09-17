// file imports
import "./style.scss";

const Route = ({ content, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>{content}</div>
    </div>
  );
};

export default Route;
