import { useEffect, useState } from 'react';
import Employee from './components/Employee';

function App() {

  const [employees, setEmployees] = useState([]);
  const [currentEmployee, setCurrentEmployee] = useState(null);
  // const [viewModal,setViewModal] = useState(false);


  async function fetchEmployeesList() {
    fetch('http://localhost:8080/getEmployees').then((response) => {
      return response.json();
    })
      .then((data) => {
        const transformedEmployees = data.map((employeeData) => {
          return {
            ...employeeData
          };
        });
        setEmployees(transformedEmployees);

        // set the current employee to be the first in the list
        setCurrentEmployee(transformedEmployees[0]);
      });
  }

  // load only when the component is ready
  useEffect(() => {
    (
      async () => fetchEmployeesList()
    )()
  }, [])


    return (
      <div style={{ display: 'flex' }}>
        <Employee empData={currentEmployee} emps={employees} setCurrentEmployee={setCurrentEmployee} />
      </div>
    );
  
}

export default App;