import React from "react";
// import "../../styles/Header.css";
// import Header from "../Header";

const styles = {
  Header: {
    background: "blue",
    display: "flex",
    flexDirection: "column",
  },

  h1: {
    textAlign: " center",
    color: "black",
    background: "blue",
  },

  div: {
    textAlign: " center",
    color: "black",
  },
};

export default function Home() {
  return (
    <div style={styles.Header}>
      <h1 style={styles.h1}>Home Page</h1>
      <p style={styles.div}>
        Thank you for visiting my react website look around and leave me a
        message.
      </p>
    </div>
  );
}
