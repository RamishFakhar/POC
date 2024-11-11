import React from 'react';
import { FaEllipsisV } from 'react-icons/fa';

const EmployeeTile = ({ employees, onTileClick }) => (
  <div className="employee-tile">
    {employees.map((employee, index) => (
      <div key={index} className="tile-item" onClick={() => onTileClick(employee)}>
        <img src={employee.picture.thumbnail} alt={employee.name.first} />
        <div>
          <h3>{employee.name.first} {employee.name.last}</h3>
          <p>{employee.location.city}, {employee.location.country}</p>
        </div>
        <FaEllipsisV className="options-icon" />
      </div>
    ))}
  </div>
);

export default EmployeeTile;
