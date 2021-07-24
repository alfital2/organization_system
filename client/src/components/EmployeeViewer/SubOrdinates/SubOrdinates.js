import SubItem from './SubItem';

function SubOrdinates(props){
    console.log("in  SubOrdinates "  , props.subs);
    if (props.subs === undefined) return (<div>Loading...</div>);
    return (
        <div>
            <h3>My Subordinates:</h3>
            {props.subs.map((sub) => <SubItem key={sub.id} sub={sub} />)}
        </div>
    );;
}

export default SubOrdinates;