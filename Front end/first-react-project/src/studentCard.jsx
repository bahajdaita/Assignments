import React from "react";
import AlertButton from "./AlertButton";

const StudentCard = ({ name, grade }) => {
  const message = `Student: ${name} — Grade: ${grade}`;

  return (
    <div className="card" style={{ marginBottom: "1rem", padding: "1rem", border: "1px solid #ccc" }}>
      <h2>{name}</h2>
      <p>Grade: {grade}</p>
      <p>
        <strong>
          {grade >= 85 ? "Excellent Student" : "Needs Improvement"}
        </strong>
      </p>
      <AlertButton message={message} />
    </div>
  );
};

export default StudentCard;
