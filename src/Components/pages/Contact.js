import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

const styles = {
  divStyle: {
    display: "block",
    fontSize: "30px",
    textAlign: "center",
    color: "white",
  },

  formStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "12px 20px",
    margin: "8px 0",
    boxSizing: "border-box",
    resize: "none",
  },

  messageStyle: {
    height: "150px",
    resize: "none",
    alignContent: "flex-start",
    width: "75%",
  },

  boxStyle: {
    height: "50px",
    width: "75%",
  },

  buttonStyle: {
    height: "50px",
    width: "25%",
  },
};

export default function Contact() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setmessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setmessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage("Email or username is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    alert(`Hello ${userName}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName("");
    setmessage("");
    setEmail("");
  };

  return (
    <div style={styles.divStyle}>
      <p>Hello {userName} please leave a message</p>
      <form className="form" style={styles.formStyle}>
        <input
          style={styles.boxStyle}
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <input
          style={styles.boxStyle}
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          style={styles.messageStyle}
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="message"
        />
        <button
          style={styles.buttonStyle}
          type="button"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
