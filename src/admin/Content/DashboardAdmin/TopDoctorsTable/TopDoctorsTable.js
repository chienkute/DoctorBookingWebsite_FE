import React from "react";
import "./TopDoctorsTable.scss";

const TopDoctorsTable = ({ topDoctor }) => {
  return (
    <table className="table_top">
      <thead>
        <tr>
          <th>Doctor Name</th>
          <th>Doctor Address</th>
          <th>Appointment Count</th>
        </tr>
      </thead>
      <tbody>
        {topDoctor.map((item, index) => (
          <tr key={index}>
            <td>{item.doctor.name}</td>
            <td>{item.doctor.address}</td>
            <td>{item.count}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TopDoctorsTable;
