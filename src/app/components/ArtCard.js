import React from 'react';
import { connect } from 'react-redux';//dispatch
import '../styles/ArtCard.css';

class ArtCard extends React.Component {
  
  render() {
    return (
        <div className="artCard">
        <img src={this.props.albumArtURL} alt="" className="albumArt"/>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
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
