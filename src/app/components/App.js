import React, { Component } from 'react';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import Q from 'q';
import '../styles/App.css';
import { Button } from 'react-bootstrap';
import SpotifyWebApi from 'spotify-web-api-js';
import Timer from './timer';
import ListItem from './ListItem';
var client_id = '9d2b0b01004541db9ea037efe0ce76d9'; // Your client id
var client_secret = '331cfe3690b64033b376843ce22d6893'; // Your secret
var redirect_uri = 'http://localhost:3000/'; // Your redirect uri
import { connect } from 'react-redux';//dispatch

var s = new SpotifyWebApi();
s.setPromiseImplementation(Q);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
       songs : []
    }
  }

clickEvent(value) {
    s.getAlbum(value).then((data) => {
       this.props.setAlbumId(data.id);
    });
    console.log(this.props.albumId);
  }

  search(event) {
    this.setState({
      value: event.target.value
    });
 
    s.searchAlbums(event.target.value).then((data) => {
       console.log(data)
       var temp = [];
       for (var i = 0 ; i < data.albums.items.length; i++) {
        var id = data.albums.items[i].id; 
        temp.push(
           <div key={i} onClick={() => {this.clickEvent(id)}} value={i}> 
             <hr />
             <div className="searchResult">
              <div className="art">
                <img src={data.albums.items[i].images[0].url} className="albumArt"/>
              </div>
              <div >
                <p className="info"> {data.albums.items[i].name} </p>
              </div>
             </div>
           </div>
        )
       }
       this.setState({
         songs: temp
       });
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <input type="text" id="artistSearch" className='searchField'
          onChange={this.search.bind(this)} />
          <Button className='button'>Search</Button>
        </div>
        <Link to={"/albumpage"}> {this.state.songs} </Link>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
      albumId: state.albumId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //methods go here
    setAlbumId: (id) => {
      dispatch({
        type: "SETALBUMID",
        payload: id,
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
