import './Identification.css';
import ReportModal from './ReportModal';

function Identification(props) {
    const empIdentification = props.data;
    let bodyH3Tag;
    const empFullName = empIdentification.firstName +" "+empIdentification.lastName;
    const managerName = props.manager.firstName + " " + props.manager.lastName;
    if (managerName === empFullName) {
        bodyH3Tag = <h3> Supreme leader - No manager. </h3>
    }
    else {
        bodyH3Tag = (
            <div className='identification-item'>
                <h3> Manager: {managerName}</h3>
                <ReportModal data={props.manager} />
            </div>
        )
    }

    return (
        <div>
            <h3> picture : 😎 {empIdentification.firstName} {empIdentification.lastName}</h3>
            <h3> position: {empIdentification.position}</h3>
            <hr />
            <div>
                {bodyH3Tag}
            </div>
        </div>
    );
}

export default Identification;