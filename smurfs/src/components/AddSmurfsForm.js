import React, {useState} from "react";
import { connect } from "react-redux";
import { addSmurf, postSmurf } from '../Actions/addSmurf';
import { loadSmurfs } from '../Actions/smurfVillage'

const AddSmurfsForm = props => {
    const [smurfName, setSmurfName] = useState();
    const [smurfAge, setSmurfAge] = useState();
    const [smurfHeight, setSmurfHeight] = useState();
    
    const handleSubmit = e => {
        e.preventDefault();
        console.log(smurfName, smurfAge, smurfHeight);
        props.addSmurf(smurfName, smurfAge, smurfHeight);
        console.log('from AddSmurfForm', props.addSmurf);
        props.postSmurf(props.addSmurf);
    }

    return (
    <>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Smurf Name"
                onChange={event => setSmurfName(event.target.value)}
                value={smurfName}
            />
            <input
                type="text"
                placeholder="Smurf Age"
                onChange={event => setSmurfAge(event.target.value)}
                value={smurfAge}
            />
            <input
                type="text"
                placeholder="Smurf Height"
                onChange={event => setSmurfHeight(event.target.value)}
                value={smurfHeight}
            />
            <button type="submit">Add Smurf!</button>
      </form>
    </>
    )
};

function mapStateToProps(state) {
    console.log('state from form', state)
    return {
        newSmurf: state.addSmurf
    };
};

const matchDispatchToProps = {
    addSmurf,
    postSmurf
};

export default connect(
    mapStateToProps,
    matchDispatchToProps
)(AddSmurfsForm);
  