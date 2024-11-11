import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import EmployeeGrid from './components/EmployeeGrid';
import EmployeeTile from './components/EmployeeTile';
import EmployeeModal from './components/EmployeeModal';
import './App.css';

function App() {
  const [employees, setEmployees] = useState([]);
  const [view, setView] = useState('grid');
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  
  // Fetch employee data from Random User API
  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=20')
      .then(response => setEmployees(response.data.results))
      .catch(error => console.error('Error fetching data', error));
  }, []);

  const toggleView = () => setView(view === 'grid' ? 'tile' : 'grid');
  const openEmployeeDetails = (employee) => setSelectedEmployee(employee);
  const closeEmployeeDetails = () => setSelectedEmployee(null);

  return (
    <div className="App">
      <Header toggleView={toggleView} />
      <div className="main-content">
        <Sidebar />
        <div className="content">
          {view === 'grid' ? (
            <EmployeeGrid employees={employees} onTileClick={openEmployeeDetails} />
          ) : (
            <EmployeeTile employees={employees} onTileClick={openEmployeeDetails} />
          )}
        </div>
      </div>
      {selectedEmployee && (
        <EmployeeModal employee={selectedEmployee} onClose={closeEmployeeDetails} />
      )}
    </div>
  );
}

export default App;
