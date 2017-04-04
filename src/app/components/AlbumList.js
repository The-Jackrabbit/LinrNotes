<<<<<<< HEAD
import React, { Component } from 'react';
import '../styles/AlbumPage.css';
import { connect } from 'react-redux';//dispatch
import { withRouter } from "react-router-dom";

class AlbumList extends Component {
  render() {
    return (
        <div className="headerPadding">
            {this.props.albumList}
        </div>
    );
  }
=======
import React from 'react';
import '../styles/AlbumPage.css';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom';

class AlbumList extends React.Component {             
    render() {
        return (
            <div>
                {this.props.albumList}    
            </div> 
        );
    }
>>>>>>> origin/master
}

const mapStateToProps = (state) => {
  return {
<<<<<<< HEAD
    albumList: state.albumList,
=======
    albumList: state.albumList
>>>>>>> origin/master
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlbumList));