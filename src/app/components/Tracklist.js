import React, { Component } from 'react';
import '../styles/AlbumPage.css';
//import { Button, Navbar, Glyphicon, ListGroup, ListGroupItem } from 'react-bootstrap';
import { connect } from 'react-redux';//dispatch

class Tracklist extends Component {
  
  render() {
    return (
        <div className="tracklistCard">
            <div className="panel panel-default">
                <ul className="list-group">
                    {this.props.tracklistArray}
                </ul>
            </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    tracklist: state.tracklist,
    tracklistArray: state.tracklistArray,
    activeSong: state.activeSong,
    data: state.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTrackList: (tracklist) => {
      dispatch({
        type: "SETTRACKLIST",
        payload: tracklist
      })
    },
    setTracklistArray: (tracklistArray) => {
        dispatch({
            type: "SETTRACKLISTARRAY",
            payload: tracklistArray
        })
    },
    setActiveSong: (song) => {
      dispatch({
        type: 'SETACTIVESONG',
        payload: song
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Tracklist);
