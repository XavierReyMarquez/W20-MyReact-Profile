import React from "react";
// import "../../styles/Header.css";
// import Header from "../Header";

const styles = {
  divStyle: {
    display: "flex",
    flexDirection: "column",
    fontSize: "25px",
  },

  h1Style: {
    textAlign: " center",
    color: "black",
  },

  pStyle: {
    textAlign: " center",
    color: "black",
  },
};

export default function Home() {
  return (
    <div style={styles.divStyle}>
      <h1 style={styles.h1Style}>Home Page</h1>
      <p style={styles.pStyle}>
        Thank you for visiting my react website look around and leave me a
        message.
      </p>
    </div>
  );
}
