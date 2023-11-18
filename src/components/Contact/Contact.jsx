import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import { ToastContainer, toast } from "react-toastify"; // Import toast components

import "react-toastify/dist/ReactToastify.css"; // Import the toast styles

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_52ghe2d2",
        "template_3gq1n42",
        form.current,
        "0JSOoCYlmaWUYuVVO"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.current.reset();
          // Show a success toast
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          // Show an error toast
          toast.error("An error occurred while sending the message.");
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? 'white' : '' }}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user" placeholder="Name" />
          <input type="email" name="user_email" className="user" placeholder="Email" />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          <div
            className="blur c-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </form>
      </div>
      <ToastContainer /> {/* Render the toast container */}
    </div>
  );
};

export default Contact;
