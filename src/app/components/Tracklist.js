import React, { Component } from 'react';
import '../styles/AlbumPage.css';
import { Button, Navbar, Glyphicon, ListGroup, ListGroupItem } from 'react-bootstrap';
import { connect, dispatch } from 'react-redux';

class Tracklist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array : ''
    }
  }

  componentDidMount() {
    console.log("TL componentdidmount");
    var temp = [];
        for (var i = 0 ; i < this.props.tracklist.length; i++) {
            temp.push(
                <li key={i} className="list-group-item">
                    {i + 1}) {this.props.tracklist[i].name}
                </li>
            );
        }
        this.props.setTracklistArray(temp);
        this.setState({
          array: temp
        })
  }

    clickEvent() {
        
        console.log(this.props.tracklistArray[0]);
    }

  render() {
    console.log("TL render");
    return (
        <div className="tracklistCard">
            <button className="btn btn-default" onClick={this.clickEvent.bind(this)} />
      
            <div className="panel panel-default">
                <ul className="list-group">

                    {this.state.array}

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
