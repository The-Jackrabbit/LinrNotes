import React, { Component } from 'react';
import Q from 'q';
import '../styles/AlbumPage.css';
import { Button, Navbar, Glyphicon, ListGroup, ListGroupItem } from 'react-bootstrap';
import SpotifyWebApi from 'spotify-web-api-js';

var s = new SpotifyWebApi();
s.setPromiseImplementation(Q);

class Tracklist extends Component {
  constructor() {
    super();

    this.state = {
        tracks: []
    }
    
  }

  componentWillMount() {
      console.log("track side" + this.props.tracks);
    var temp = [];
    for (var i = 0 ; i < this.props.tracks.length; i++) {
        temp.push(
            <li key={i} className="list-group-item">
                 {i + 1}) {this.props.tracks[i].name}
            </li>
        );
    }
    this.setState({
        trackList: temp
    });
  }

  render() {
    
    return (
        <div className="tracklistCard">
            <div className="panel panel-default">
                <ul className="list-group">

                    {this.state.trackList}

                </ul>
        </div>
      </div>
    );
  }
}

Tracklist.propTypes = {
  tracks: React.PropTypes.array.isRequired
}
export default Tracklist;
