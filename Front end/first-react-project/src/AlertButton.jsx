import React from "react";

const AlertButton = ({ message }) => {
  const handleClick = () => {
    alert(message);
  };

  return <button onClick={handleClick}>Show Alert</button>;
};

export default AlertButton;
