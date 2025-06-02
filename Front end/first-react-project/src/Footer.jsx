import React from "react";

const Footer = ({ total }) => {
  return (
    <footer style={{ marginTop: "2rem", borderTop: "1px solid #ccc", paddingTop: "1rem" }}>
      <p>Total Students: {total}</p>
    </footer>
  );
};

export default Footer;
