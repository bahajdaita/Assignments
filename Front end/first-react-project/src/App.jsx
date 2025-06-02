import React from "react";
import StudentList from "./StudentList";
import Footer from "./Footer";

const students = [
  { id: 1, name: "Sarah Ali", grade: 95 },
  { id: 2, name: "Omar Tarek", grade: 82 },
  { id: 3, name: "Lina Haddad", grade: 76 }
];

const App = () => {
  return (
    <div className="container">
      <h1>Student Dashboard</h1>
      <StudentList students={students} />
      <Footer total={students.length} />
    </div>
  );
};

export default App;















