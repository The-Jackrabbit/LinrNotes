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
}

const mapStateToProps = (state) => {
  return {
    albumList: state.albumList,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlbumList));