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
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "Doug",
    email: "dougiehawes@hotmail.com",
    title: "Test",
    message: "test email",
  });
  const [buttonActive, setButtonActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const { name, email, title, message } = formData;

  const serviceId = process.env.REACT_APP_EMAIL_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
  const userId = process.env.REACT_APP_EMAIL_USER_ID;

  const handleChange = (e) => {
    if (name && email && title && message) {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    if (email && title && message) {
      setButtonActive(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && title && message) {
      emailjs
        .send(
          serviceId,
          templateId,
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
          },
          userId
        )
        .then(
          (result) => {
            alert("Email successfully sent!");
          },
          (error) => {
            console.log(error.text);
          }
        );
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
          <Input1 label="name" onChange={handleChange} value={name} />
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
