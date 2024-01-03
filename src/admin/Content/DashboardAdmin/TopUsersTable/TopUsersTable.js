// TopUsersTable.jsx

import React from "react";
import "./TopUsersTable.scss";

const TopUsersTable = ({ topUsers }) => {
  return (
    <table className="table_dashboard">
      <thead>
        <tr>
          <th>User Name</th>
          <th>User Address</th>
          <th>Appointment Count</th>
        </tr>
      </thead>
      <tbody>
        {topUsers.map((item, index) => (
          <tr key={index}>
            <td>{item.user.name}</td>
            <td>{item.user.address}</td>
            <td>{item.count}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TopUsersTable;
