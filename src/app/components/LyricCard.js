import React from 'react';
import { nav } from 'react-bootstrap';
import { connect } from 'react-redux';//dispatch
import '../styles/LyricCard.css';
import Request from "superagent";
import axios from "axios";

const base = 'http://api.musixmatch.com/ws/1.1/'
const apikey = 'a029307bd598a1be4c8e5e2157b1fd5c'

class LyricCard extends React.Component {
  constructor() {
    super();

    this.state = {
      song: "across the universe the beatles",
      results: 1,
    }
  }
  componentWillMount() {
    console.log("cwm");
    var query = this.props.activeSong + " " + this.props.artist;
    console.log(query);
    var url =  `${base}track.search?apikey=${apikey}&q=${query}&f_has_lyrics=1`;
    axios(url).then((res) => {
      console.log("also here2!");
      console.log(res);
      console.log(res.data.message.body.track_list[0].track.track_id);
      var id = res.data.message.body.track_list[0].track.track_id;
      var lyricUrl = `${base}track.lyrics.get?apikey=${apikey}&track_id=${id}`
      axios(lyricUrl).then((res) => {
        console.log("lyrics get ya lyrics!");
        console.log(res);
        console.log(res.data.message.body.lyrics);
        this.props.setActiveLyrics(res.data.message.body.lyrics.lyrics_body);
      })
    })
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed">
          <div className="container-fluid">
            <div className="navbar-header"> 
              <p className='navbar-text'> Now playing... {this.props.activeSong} </p>
            </div>
            </div>
        </nav>
        <div className="lyrics">
            <h2>{this.props.lyrics}</h2>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lyrics: state.activeLyrics,
    ids: state.tracklistIds,
    activeSong: state.activeSong,
    artist: state.artist,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //methods go here
    setActiveSong: (song) => {
      dispatch({
        type: "SETACTIVESONG",
        payload: song,
      })
    },
    setActiveLyrics: (lyrics) => {
      dispatch({
        type: "SETACTIVELYRICS",
        payload: lyrics,
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LyricCard);

