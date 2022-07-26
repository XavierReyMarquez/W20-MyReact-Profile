import React from "react";

const styles = {
  divStyle: {
    display: "flex",
    flexDirection: "column",
    fontSize: "25px",
    textAlign: " center",
    color: "white",
  },
};

export default function About() {
  return (
    <div style={styles.divStyle}>
      <h1>About Page</h1>
      <p>
        My Name is Xavier Marquez I was Born in Lakin, Kansas, but was raised in
        Seattle, Washington. MY hobbies include Cheerleading, Gymnastics, Weight
        Lifting, Cars, and Computers as well as anthing tech related. im
        currenty learn to become a full stack developer and i enjoy working with
        Javascript and React.
      </p>
    </div>
  );
}
