import React from "react";
import { useNavigate } from "react-router-dom";
import "./EmployeesProductivity.css";

const EmployeesProductivity = () => {
  const navigate = useNavigate();

  const datas = [
    { image: "/employee pic.svg", name: "John", email: "john@gmail.com", time: "6hr 54m", efficiency: "8hr", percent: 80 },
    { image: "/employee pic.svg", name: "John", email: "john@gmail.com", time: "6hr 54m", efficiency: "8hr", percent: 65 },
    { image: "/employee pic.svg", name: "John", email: "john@gmail.com", time: "6hr 54m", efficiency: "8hr", percent: 75 },
    // …repeat as you like
  ];

  const handleRowClick = () => {
    navigate("/employeeproductivity");
  };

  return (
    <>
      <div className="table-container">
        <table className="employees-table">
          <thead>
            <tr className="productivity-table-heading">
              <th className="employees-th">User</th>
              <th className="employees-th">Email</th>
              <th className="employees-th">Today</th>
              <th className="employees-th">Efficiency</th>
            </tr>
          </thead>

          <tbody>
            {datas.map((emplydata, index) => (
              <tr
                className="employee-name-datas"
                key={index}
                onClick={handleRowClick}
              >
                <td className="profile-td">
                  <img src={emplydata.image} alt={emplydata.name} />
                  <span className="img-span">{emplydata.name}</span>
                </td>

                <td>{emplydata.email}</td>
                <td>{emplydata.time}</td>

                {/* Efficiency cell with violet bar + 8hr text */}
                <td>
                  <div className="efficiency-cell">
                    <div className="efficiency-bar-track">
                      <div
                        className="efficiency-bar-fill"
                        style={{ width: `${emplydata.percent}%` }}
                      />
                    </div>
                    <span className="efficiency-text">{emplydata.efficiency}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EmployeesProductivity;
