function TasksItem(props) {
    console.log(props.task);
    return (
        <div>
            <li>
                {props.task.text} <u>until:</u>  {props.task.dueDate.slice(0, 10)}
            </li>
        </div>
    );
}



export default TasksItem;