import TaskItem from "./TaskItem";

function TasksViewer(props) {
    if (props.tasks === undefined) return (<div>Loading...</div>);
    return (
        <div>
            <h3>Tasks:</h3>
            {props.tasks.map((task) => <TaskItem key={task.text} task={task} />)}
        </div>
    );
}


export default TasksViewer;