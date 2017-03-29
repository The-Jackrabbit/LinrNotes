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

var s = new SpotifyWebApi();
s.setPromiseImplementation(Q);

class App extends Component {
  constructor() {
    super();

    this.state = {
        t: '3yY2gUcIsjMr8hjo51PoJ8',
        songs: [],
        value: 'Section 8',
        albumTime: "00:00:00",
        albumId: ''
    }
  }
  
clickEvent(value) {
    s.getAlbum(value).then((data) => {
       console.log(data);
    })
    this.setState({
      albumId: value
    });
  }

  sea(event) {
    this.setState({
      value: event.target.value
    });
 
    s.searchAlbums(event.target.value).then((data) => {
       console.log(data)
       var i = data.albums.items.length;
       var temp = [];
       for (i = 0 ; i < data.albums.items.length; i++) {
        this.setState({
          tempValue: data.albums.items[i].id
        })

        var id = data.albums.items[i].id; 
        temp.push(
          
        <Link to={`./albumPage/:id${this.state.albumId}`}> 
           <div key={i} onClick={() => {this.clickEvent(id)}} value={this.state.tempValue}> 
             
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
           </Link>
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
        
        <h1> {this.state.albumTime} </h1>
        <div>
          <input type="text"  id="artistSearch" className='searchField'
          onChange={this.sea.bind(this)} value={this.state.value} />
          <Button className='button'>Hi</Button>
        </div>
        {this.state.songs}
      </div>
    );
  }
}

export default App;
