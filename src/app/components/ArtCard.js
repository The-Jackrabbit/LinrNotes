import React, { Component } from 'react';
import { connect, dispatch } from 'react-redux';
import '../styles/ArtCard.css';

class ArtCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="artCard">
        <img src={this.props.albumArtURL} className="albumArt"/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    albumArtURL: state.albumArtURL
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //methods go here
    setName: (url) => {
      dispatch({
        type: "SETALBUMARTURL",
        payload: url,
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtCard);
