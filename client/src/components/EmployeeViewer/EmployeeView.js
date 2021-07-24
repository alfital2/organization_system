import './EmployeeView.css';
import Identification from './Identification/Identification';
import TasksViewer from './Tasks/TasksViewer';
import SubOrdinates from './SubOrdinates/SubOrdinates';

function EmployeeView(props){
     const data = {...props.empData };
     const manager = props.allEmps.find(element => element['id'] === data.manager)
    return (
    <div className='viewer-item'>
        <Identification data={data} manager={manager}/>
        <hr />
        <TasksViewer tasks={data.tasks}/>
        <hr />
        <SubOrdinates subs={data.subordinates}/>

    </div>

)
}

export default EmployeeView; 