import EmployeeItem from './EmployeeItem';
import './Employee.css';

function Employee(props) {

    return (
        <div className='employees-container'>
            <h2><center>Employee list</center></h2>
            {
                props.emps.map((Employee) => <EmployeeItem key={Employee.id}
                    emp={Employee}
                    setCurrentEmployee={props.setCurrentEmployee} 
                    currentEmployee={props.empData}
                    employees={props.emps}
                    />)
            }
        </div>
    )
}

export default Employee;