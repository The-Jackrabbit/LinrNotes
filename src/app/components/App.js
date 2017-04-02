import React, { Component } from 'react';
import { Link, withRouter} from 'react-router-dom';
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
    s.searchAlbums(event.target.value).then((data) => {
       this.setState({
         albums: []
       })
       var temp = [];
       for (var i = 0 ; i < data.albums.items.length; i++) {
            var id = data.albums.items[i].id; 
            temp.push(
                  <div key={id} value={this.state.tempValue}> 
                    <Link to={`./:id${id}`} onClick={() => this.props.setAlbumId(id)}>
                    <hr />
                    <div className="searchResult">
                      <div className="art">
                        <img alt="" src={data.albums.items[i].images[0].url} className="albumArt"/>
                      </div>
                      <div >
                        <p className="info"> {data.albums.items[i].name} </p>
                      </div>
                    </div>
                    </Link>
                  </div>
            )
       }
       this.setState({
          albums: temp
        })
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
          <input type="text"  id="artistSearch" className='searchField'
          onChange={this.search.bind(this)} />
        
        {this.state.albums}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
