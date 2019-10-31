import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadSmurfs } from '../Actions/smurfVillage'

const SmurfVillage = props => {
    useEffect(() => {
        props.loadSmurfs();
      }, []);

    return (
    
        <div>
        {props.isLoading ? (
        <div>Nothing to see here, move along</div>
      ) : (
        // console.log('from props:', props.smurfs)
        props.smurfs.map(smurf => 
            <p>There is a smurf named {smurf.name} who is {smurf.age} years old and is {smurf.height} centimeters tall.</p>
        )   
      )}

        {props.error && (
            <p>Error: {props.error}</p>
          )}
        </div>
    )
};

function mapStateToProps(state) {
    console.log('current state:', state)
    return {
        smurfs: state.smurfVillage.smurfs,
        isLoading: state.smurfVillage.isLoading,
        error: state.smurfVillage.error,
    };
};
  
const mapDispatchToProps = {
    loadSmurfs
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SmurfVillage);