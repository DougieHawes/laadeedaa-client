// file imports
// style
import "./style.scss";

const Route = ({ content, title }) => {
  return (
    <div className="route">
      <h2 className="route-title">{title}</h2>
      <div className="route-content">{content}</div>
    </div>
  );
};

export default Route;
