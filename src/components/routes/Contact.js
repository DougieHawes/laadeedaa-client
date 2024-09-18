// file imports
// components
// utils
import { Button1 } from "../utils/buttons";
import { Input1, Input2, Input3 } from "../utils/inputs";
import Route from "../utils/Route";
// style
import "./style.scss";

// package imports
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    title: "",
    message: "",
  });
  const [buttonActive, setButtonActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const { email, title, message } = formData;

  const handleChange = (e) => {
    if (email && title && message) {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && title && message) {
      console.log(formData);
    } else {
      setErrorMessage(true);
    }
  };

  return (
    <Route
      content={
        <form className="contact-form">
          {errorMessage && <div>fill all fields</div>}
          <Input1
            label="email"
            name="email"
            onChange={handleChange}
            type="email"
            value={email}
          />
          <Input1 label="title" onChange={handleChange} value={title} />
          <Input2 label="message" onChange={handleChange} value={message} />
          <Input3 />
          <Button1 active={buttonActive} onClick={handleSubmit} text="send" />
        </form>
      }
      title="contact"
    />
  );
};

export default Contact;
