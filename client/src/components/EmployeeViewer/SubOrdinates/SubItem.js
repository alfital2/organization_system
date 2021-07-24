import AssignTaskModal from './AssignTaskModal';
function  SubItem(props){
    console.log(props.sub);
    const sub = props.sub ;
    return (
        <div>
            {sub.firstName} {sub.lastName}, {sub.position} <AssignTaskModal emp={sub}/>
        </div>
    );
}



export default SubItem;