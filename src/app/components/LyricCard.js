import React, { Component } from 'react';
import { Grid, Button, Navbar, Glyphicon, nav, Col, Row, ColProps, RowProps } from 'react-bootstrap';
import { connect, dispatch } from 'react-redux';
import '../styles/LyricCard.css';

class LyricCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed">
          <div className="container-fluid">
            <div className="navbar-header"> 
              <p className='navbar-text'> Now playing... {this.props.songTitle} </p>
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
    lyrics: 'lala',
    songTitle: state.name,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //methods go here
    setName: (name) => {
      dispatch({
        type: "SETNAME",
        payload: name,
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LyricCard);

