import React from 'react';
import { nav } from 'react-bootstrap';
import { connect } from 'react-redux';//dispatch
import '../styles/LyricCard.css';
import Request from "superagent";
import axios from "axios";

class LyricCard extends React.Component {
  
  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed">
          <div className="container-fluid">
            <div className="navbar-header"> 
              <p className='navbar-text'> Now playing... {this.props.activeSong} </p>
            </div>
            </div>
        </nav>
        <div className="lyrics">
            <h2>{this.props.lyrics}</h2>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lyrics: state.activeLyrics,
    ids: state.tracklistIds,
    activeSong: state.activeSong,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //methods go here
    setActiveSong: (song) => {
      dispatch({
        type: "SETACTIVESONG",
        payload: song,
      })
    },
    setActiveLyrics: (lyrics) => {
      dispatch({
        type: "SETACTIVELYRICS",
        payload: lyrics,
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LyricCard);

