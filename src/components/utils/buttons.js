// file imports
// style
import "./style.scss";

export const Button1 = ({ active, onClick, text }) => (
  <div className={`button ${active && "button-active"}`} onClick={onClick}>
    {text}
  </div>
);
