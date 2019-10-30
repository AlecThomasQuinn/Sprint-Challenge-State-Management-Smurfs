import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadSmurfs } from '../Actions/smurfVillage'

const SmurfVillage = props => {
    useEffect(() => {
        props.loadSmurfs();
      }, []);

    return (
        <div>
        'nothing to see here, move along'
        </div>
    )
};

function mapStateToProps(state) {
    console.log(state)
    return {
        
    };
};
  
const mapDispatchToProps = {
    loadSmurfs
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SmurfVillage);