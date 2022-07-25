import React from "react";
import "../../styles/Header.css";
// import Header from "../Header";

const styles = {
  divStyle: {
    display: "flex",
    flexDirection: "column",
    fontSize: "25px",
    background: "",
    color: "white",
  },

  h1Style: {
    textAlign: " center",
  },

  pStyle: {
    textAlign: " center",
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
