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
}

const mapStateToProps = (state) => {
  return {
    albumList: state.albumList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlbumList));