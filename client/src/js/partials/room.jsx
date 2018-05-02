import React, { Component } from 'react';
import {connect} from "react-redux"; //read
import {bindActionCreators} from "redux"; //write

import event from "../actions/selectRoom"

class room extends Component {
    getState(check) {
        let toReturn;
        if(check === true) {
            toReturn = (<h6 className="card-subtitle mb-2 text-success">Available</h6>);
        } else if(check === false) {
            toReturn = (<h6 className="card-subtitle mb-2 text-muted">In use</h6>);
        }
        return toReturn;
    }
    render() {
        let room = this.props.room.room;
        let state = (
        <div className="card text-center" onClick={ () => this.props.roomSelect(this.props.room)}>
            <div className="card-body">
                <h5 className="card-title">{room.name}</h5>
                <p className="location">{room.location}</p> 

                {this.getState(this.props.room.available)}
            </div>
        </div>);
        return(state);
    }
}

function read(db) {
    return{};
  }
  
  function write(dispatch) {
    return bindActionCreators({
      roomSelect: event
    }, dispatch);
  }
  
  export default connect(read, write)(room);
  