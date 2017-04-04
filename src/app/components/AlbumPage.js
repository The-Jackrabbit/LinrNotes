import React from 'react';
import Q from 'q';
import '../styles/AlbumPage.css';
import { withRouter} from 'react-router-dom';
import { Grid, Col, Row } from 'react-bootstrap';
import SpotifyWebApi from 'spotify-web-api-js';
//import request from 'request';
import { connect,  } from 'react-redux';//dispatch

import Tracklist from './Tracklist';
import ArtCard from './ArtCard';
import LyricCard from './LyricCard';
/*
var client_id = '9d2b0b01004541db9ea037efe0ce76d9'; // Your client id
var client_secret = '331cfe3690b64033b376843ce22d6893'; // Your secret
var redirect_uri = 'http://localhost:3000/'; // Your redirect uri



var base_url= "http://api.genius.com";
var search_url= base_url + "/search";
var song_title= "Billabong Valley";
var gdata = {
   'q' : song_title 
  };
var gclinet_id='oyKIbNoXmQDYl-CQO_zDA1c5jO0s1xEnI_y-cOrEUjFCm5PEpJ1bEd7JX6onhegc';
var gclient_secret='Y8Wxh8YWP3PeJLis9YWsQzch--0cg5NkSSkuf1rHv9JvQxzqRPMcIGEYZksxgscXn-qktaJXqopy8OJ1CQFwIg';
var gclient_access_token= 'Qh26ose9NiyhZjo92Rx2QUi5h7TtUyIVilGPDs9Ant0rT79kKyS2ZM4xjM0s6v23';

var headers = {'Authorization': gclient_secret};
var url = 'https://api.genius.com/oauth/authorize?';
var response = request.url({
  url,
  data : {
    client_id: gclinet_id,

  }

});

console.log(response.json());
*/

var s = new SpotifyWebApi();
s.setPromiseImplementation(Q);

class AlbumPage extends React.Component {

  componentWillMount() {
    s.getAlbum(this.props.albumId).then((data) => {
      this.props.setData(data);
      this.props.setTrackList(data.tracks.items);
      var temp = [];
      for (var i = 0 ; i < this.props.tracklist.length; i++) {
          temp.push(
              <li key={i} className="list-group-item">
                  {i + 1}) {this.props.tracklist[i].name}
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
            <div className="col-xs-3 col-sm-3 col-md-4 col-lg-4">          
              <ArtCard />
              <Tracklist />
            </div>
            <div className="col-xs-3 col-sm-3 col-md-4 col-lg-4">
              <LyricCard />
              </div>
            <div className="col-xs-3 col-sm-3 col-md-4 col-lg-4">
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