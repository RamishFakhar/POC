import React from 'react';

const EmployeeGrid = ({ employees, onTileClick }) => (
  <div className="employee-grid">
    {employees.map((employee, index) => (
      <div key={index} className="grid-item" onClick={() => onTileClick(employee)}>
        <p>{employee.name.first} {employee.name.last}</p>
        <p>Email: {employee.email}</p>
        <p>Location: {employee.location.city}, {employee.location.country}</p>
        {/* Add more fields as needed */}
      </div>
    ))}
  </div>
);

export default EmployeeGrid;
