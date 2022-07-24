import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

const styles = {
  divStyle: {
    display: "flex",
    flexDirection: "column",
    fontSize: "25px",
    width: "100%",
    textAlign: " center",
    flexWrap: "wrap",
  },

  formStyle: {
    width: "100%",
    padding: "5px",
    margin: "10px",
  },

  messageStyle: {
    width: "100%",
    height: "100px",
    padding: "5px",
    margin: "10px",
  },

  boxStyle: {
    width: "100%",
    height: "25px",
    padding: "5px",
    margin: "10px",
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
      <form className="form">
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
        <button type="button" onClick={handleFormSubmit}>
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
