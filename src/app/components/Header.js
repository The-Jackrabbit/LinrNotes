import React, { Component } from 'react';
import '../styles/AlbumPage.css';
import { Route, BrowserRouter as Router, Match, Miss} from "react-router";
import { nav } from 'react-bootstrap';
import Timer from './timer'
//import request from 'request';
import { connect } from 'react-redux';//dispatch
import { withRouter, Link } from "react-router-dom";
import App from "./App";
import AlbumPage from './AlbumPage';
import store from '../store';
import { Provider }  from 'react-redux';
import { getAlbumLength } from '../actions/methods';
import { createBrowserHistory } from "history";
import SearchItem from "./SearchItem";
const history = createBrowserHistory;

//xs = < 760 s <= 990
import Q from 'q';
import SpotifyWebApi from 'spotify-web-api-js';

var s = new SpotifyWebApi();
s.setPromiseImplementation(Q);

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: []
    }
  }
  updateInfo(data, i) {
   //this.props.setAlbumId(data.albums.items[0].id);
    //this.props.setAlbumName(data.albums.items[0].name);
    console.log(i);
    /*
    s.getAlbum(data.albums.items[0].id).then((data) => {
      this.props.setData(data);
      this.props.setTrackList(data.tracks.items);
      var temp = [];
      for (var i = 0 ; i < data.tracks.items.length; i++) {
          temp.push(
              <li key={i} className="list-group-item">
                  {i + 1}) {data.tracks.items[i].name}
              </li>
          );
      }
      this.props.setTracklistArray(temp);
      this.props.setAlbumName(data.name);
      this.props.setType(data.genres);
      this.props.setAlbumArtURL(data.images[0].url);
      this.props.setActiveSong(data.tracks.items[0].name);
      var albumLen = getAlbumLength(data.tracks.items);
      this.props.setEndTime(albumLen[1]);
    })
    */
  }

  search(event) {
    s.searchAlbums(event.target.value).then((data) => {
       this.setState({
         albums: []
       })
       var temp = [];
       for (var i = 0 ; i < data.albums.items.length; i++) {
            var id = data.albums.items[i].id; 
            temp.push(
                <SearchItem key={i} data={data} i={i} />
            )
            
       }
       this.setState({
          albums: temp
        })
    })
  }


  render() {
    return (
        <div className="headerPadding">
        <nav className="btn-toolbar navbar-fixed-top">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="input-group">
                <p className="input-group-addon" id="basic-addon1">LinrNotes</p>
                <input type="text" className="form-control" placeholder="Search for..." onChange={this.search.bind(this)}/>
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">Go!</button>
                </span>
                  <p className="input-group-addon" type="text" id="basic-addon2">{this.props.albumName}</p>
                  <p className="input-group-addon" type="text" id="basic-addon1">{this.props.currentTime} / {this.props.endTime}</p>
                
              </div>
            </div>
          </div>
        </nav>

        {this.state.albums}

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
    currentTime: state.currentTime,
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));