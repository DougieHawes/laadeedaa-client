// file imports
// style
import "./style.scss";

export const Input1 = ({ label, onChange, type = "text", value }) => (
  <div className="input input1">
    <label className="input-label">{label}</label>
    <input
      className="input-box"
      name={label}
      onChange={onChange}
      placeholder={`enter ${label}`}
      type={type}
      value={value}
    />
  </div>
);

export const Input2 = ({ label, onChange, value }) => (
  <div className="input">
    <label className="input-label">{label}</label>
    <textarea
      className="input-box input2-box"
      name={label}
      placeholder={`enter ${label}`}
      value={value}
      onChange={onChange}
    />
  </div>
);

export const Input3 = ({ label, placeholder }) => (
  <div className="input input1">
    <label>{label}</label>
    <input type="file" />
  </div>
);
