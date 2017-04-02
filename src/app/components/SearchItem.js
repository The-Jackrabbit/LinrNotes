import React, { Component } from 'react';
import '../styles/AlbumPage.css';
import { connect } from 'react-redux';
import { withRouter, Link } from "react-router-dom";
import { getAlbumLength } from '../actions/methods';
import Q from 'q';
import SpotifyWebApi from 'spotify-web-api-js';

var s = new SpotifyWebApi();
s.setPromiseImplementation(Q);

class SearchItem extends Component {
    updateInfo() {
        this.props.setAlbumIndex(this.props.i);
        this.props.setAlbumId(this.props.data.albums.items[this.props.i].id);
        this.props.setAlbumName(this.props.data.albums.items[this.props.i].name);

        s.getAlbum(this.props.data.albums.items[this.props.i].id).then((data) => {
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
    }


    render() {
        return (
            <div key={this.props.i} value={this.props.i} className="row">
                <Link to={`/${'album/' + this.props.data.albums.items[this.props.i].id}`} onClick={() => this.updateInfo()}>
                    <hr />
                    <img alt="" src={this.props.data.albums.items[this.props.i].images[0].url}
                        className="albumArt col-xs-1 col-sm-6 col-md-6 col-lg-6"/>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <p className="info">{this.props.data.albums.items[this.props.i].name}</p>
                        <p className="info">{this.props.data.albums.items[this.props.i].external_urls.spotify}</p>
                        <p className="info">{this.props.data.albums.items[this.props.i].artists[0].name}</p>
                    </div>
                </Link>
            </div>     
        );
    }
}

SearchItem.propTypes = {
    data: React.PropTypes.object.isRequired,
    i: React.PropTypes.number.isRequired
}

const mapStateToProps = (state) => {
  return {
    albumIndex: state.albumIndex,
    albumId: state.albumId

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //methods go here
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
    setAlbumIndex: (index) => {
      dispatch({
        type: 'SETALBUMINDEX',
        payload: index
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchItem));