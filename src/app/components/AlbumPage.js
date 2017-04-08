import React from 'react';
import Q from 'q';
import '../styles/AlbumPage.css';
import { withRouter} from 'react-router-dom';
import { Grid, Col, Row } from 'react-bootstrap';
import SpotifyWebApi from 'spotify-web-api-js';
//import request from 'request';
import { connect,  } from 'react-redux';//dispatch
import axios from 'axios';
import Tracklist from './Tracklist';
import ArtCard from './ArtCard';
import LyricCard from './LyricCard';
import Track from "./Track";
var s = new SpotifyWebApi();
s.setPromiseImplementation(Q);

const config = {
  headers: {'Access-Control-Allow-Origin':true}
}

class AlbumPage extends React.Component {

  componentWillMount() {
    s.getAlbum(this.props.albumId).then((data) => {
      this.props.setData(data);
      this.props.setTrackList(data.tracks.items);
      var temp = [];
      for (var i = 0 ; i < this.props.tracklist.length; i++) {
          temp.push(
              <li key={i} >
                  <Track i={i} />
              </li>
          );
      }      
      this.props.setTracklistArray(temp);
      this.props.setAlbumName(data.name);
      this.props.setType(data.genres);
      this.props.setAlbumArtURL(data.images[0].url);
      this.props.setActiveSong(data.tracks.items[0].name);
      var albumLen = this.getAlbumLength(this.props.tracklist);
      this.props.setEndTime(albumLen[1]);
    })
  }

  getAlbumLength(tracklist) {
    var hours = 0; var minutes = 0; var seconds = 0;
    var timeString = "";
    var length = 0;
    for(var i = 0; i < tracklist.length; i++) {
      var song = tracklist[i];
      length += song.duration_ms;
    }
    length = Math.floor(length/1000);
    seconds = length%60;
    length = Math.floor(length/60);
    minutes = length%60;
    length = Math.floor(length/60);
    hours = length;

    var time = [hours, minutes, seconds];

    for (var j = 0 ; j < 3 ; j++) {
      if (time[j] < 10) {
        timeString += "0" + time[j];
      }
      else {
        timeString += time[j];
      }
      if (j !== 2) {timeString += ":";}
    }
    return [time, timeString];
  }

  render() {
    return (
      <div>
        <div className="headerPadding">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">          
              <ArtCard />
              <Tracklist />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <LyricCard />
              </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <LyricCard />
             </div>
          </div>
          
        </div>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    artist: state.artist,
    albumName: state.albumName,
    albumId: state.albumId,
    genre: state.genre,
    type: state.type,
    albumArtURL: state.albumArtURL,
    activeSong: state.activeSong,
    endTime: state.endTime,
    tracklist: state.tracklist,
    tracklistArray: state.tracklist,
    data: state.data,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //methods go here
    setArtist: (artist) => {
      dispatch({
        type: 'SETARTIST',
        payload: artist
      })
    },
    setAlbumName: (albumName) => {
      dispatch({
        type: 'SETALBUMNAME',
        payload: albumName
      })
    },
    setAlbumId: (id) => {
      dispatch({
        type: "SETALBUMID",
        payload: id,
      })
    },
    setGenre: (genre) => {
      dispatch({
        type: 'SETGENRE',
        payload: genre
      })
    },
    setType: (type) => {
      dispatch({
        type: 'SETTYPE',
        payload: type
      })
    },
    setAlbumArtURL: (URL) => {
      dispatch({
        type: 'SETALBUMARTURL',
        payload: URL
      })
    },
    setActiveSong: (song) => {
      dispatch({
        type: 'SETACTIVESONG',
        payload: song
      })
    },
    setEndTime: (time) => {
      dispatch({
        type: "SETENDTIME",
        payload: time
      })
    },
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
    setData: (data) => {
      dispatch({
        type: "SETDATA",
        payload: data
      })
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlbumPage));