// file imports
// style
import "./style.scss";

const Route = ({ content, title }) => {
  return (
    <div className="route">
      <div className="route-padding"></div>
      <div className="route-container">
        <h2 className="route-title">{title}</h2>
        <div className="route-content">{content}</div>
      </div>
    </div>
  );
};

export default Route;
