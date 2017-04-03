import React from 'react';
import '../styles/AlbumPage.css';
import { nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom';
import SearchItem from "./SearchItem";
import AlbumPage from "./AlbumPage";
import Q from 'q';
import SpotifyWebApi from 'spotify-web-api-js';
import AlbumList from "./AlbumList";

var s = new SpotifyWebApi();
s.setPromiseImplementation(Q);

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: []
    }
  }

  search(event) {
    s.searchAlbums(event.target.value).then((data) => {
       var temp = [];
       for (var i = 0 ; i < data.albums.items.length; i++) {
            var id = data.albums.items[i].id; 
            temp.push(
              <SearchItem key={i} data={data} i={i} />
            )
            
       }
       this.props.setAlbumList(temp);
    })
  }


  render() {
    return (
      <Router>
        <div className="headerPadding">
        <nav className="btn-toolbar navbar-fixed-top">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="input-group">
                <h1 className="input-group-addon" id="basic-addon1"><Link to="/">LinrNotes</Link></h1>
                <input type="text" className="form-control" placeholder="Search for..." onChange={this.search.bind(this)}/>
                <span className="input-group-btn">
                  <Link to="/"><button className="btn btn-default" type="button" onClick={console.log('hello earthlings')}>Go!</button></Link>
                </span>
                  <p className="input-group-addon" type="text" id="basic-addon2"><Link to="/album/">{this.props.albumName}</Link></p>
                  <p className="input-group-addon" type="text" id="basic-addon1">{this.props.currentTime} / {this.props.endTime}</p>
                
              </div>
            </div>
          </div>
        </nav>


        <Route exact path="/" component={AlbumList} />
        <Route path="/album/" component={AlbumPage} />
        
        
        </div>
        </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    artist: state.artist,
    albumName: state.albumName,
    albumIndex: state.albumIndex,
    albumList: state.albumList,
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
    setAlbumList: (list) => {
      dispatch({
        type: 'SETALBUMLIST',
        payload: list
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);