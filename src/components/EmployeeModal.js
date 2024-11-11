import React from 'react';

const EmployeeModal = ({ employee, onClose }) => (
  <div className="modal-overlay">
    <div className="modal-content">
      <button onClick={onClose}>Close</button>
      <h2>{employee.name.first} {employee.name.last}</h2>
      <p>Email: {employee.email}</p>
      <p>Phone: {employee.phone}</p>
      <p>Location: {employee.location.city}, {employee.location.country}</p>
      {/* Add more details as needed */}
    </div>
  </div>
);

export default EmployeeModal;
