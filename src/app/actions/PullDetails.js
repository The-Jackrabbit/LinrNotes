import Q from 'q';
import SpotifyWebApi from 'spotify-web-api-js';
import { connect,  } from 'react-redux';//dispatch
import { withRouter} from 'react-router-dom';
import React, { Component } from 'react';
var s = new SpotifyWebApi();
s.setPromiseImplementation(Q);

function pullDetails(albumId) {
    console.log('hi');
    /*
    s.getAlbum(albumId).then((data) => {
        console.log('hi again');
        console.log(data);
      this.props.setData(data);
      console.log('byte');
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
      var albumLen = getAlbumLength(this.props.tracklist);
      this.props.setEndTime(albumLen[1]);
     
    })
    */
}

function getAlbumLength(tracklist) {
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(pullDetails));