import './EmployeeItem.css';
import EmployeeModal from './EmployeeModal';


function EmployeeItem(props) {

    const handleViewEmployee = (employeeData) => {
        return () => {
            props.setCurrentEmployee(employeeData);
        }
    }

    return (
        <div className="expense-item">
            <div className="expense-item__description">
                <h2>{props.emp.firstName} {props.emp.lastName},{props.emp.position}</h2>
                <EmployeeModal func={handleViewEmployee(props.emp)} currEmpData={props.currentEmployee} allEmps={props.employees} />
            </div>
        </div>
    );
}



export default EmployeeItem;