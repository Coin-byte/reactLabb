import { useEffect, useState } from "react";
import Employee from "./Employee";

function EmployeeList() {
  const [employees, setEmployees] = useState([
    {
      name: "Jon Doe",
      email: "JonDoe@apple.com",
      phone: "0700000000",
      skills: "React, Java",
      avatar: "https://i.imgur.com/t9HFQvX.png",
    },
    {
      name: "Dindinna",
      email: "dindinna@apple.com",
      phone: "0700111111",
      skills: "Python, Sql",
      avatar: "https://i.imgur.com/ebHfuth.png",
    },
    {
      name: "Triss",
      email: "test@apple.com",
      phone: "0700222222",
      skills: "C++, sql, Nodejs",
      avatar: "https://i.imgur.com/TUhCrsY.png",
    },
  ]);

  function addHandler() {
    setEmployees((prevState) => {
      return [...prevState,
        {
          name: "Geralt of Rivia",
          email: "Geralt@monsterslayer.com",
          phone: "0700666000",
          skills: "None",
          avatar: "https://i.imgur.com/Q9qFt3m.png",
        },
      ];
    });
  }
  return (
    <>
      <h3>EmployeeList</h3>
      <button onClick={addHandler}>Add Employee</button>
      {employees.map((employee) => (
        <Employee EmployeeData={employee} />
      ))}
    </>
  );
}

export default EmployeeList;
