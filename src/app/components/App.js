import React, { Component } from 'react';
import { Link, withRouter} from 'react-router-dom';
import Q from 'q';
import '../styles/App.css';
import SpotifyWebApi from 'spotify-web-api-js';
import { connect,  } from 'react-redux';

var s = new SpotifyWebApi();
s.setPromiseImplementation(Q);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: []
    }
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
          <input type="text"  id="artistSearch" className='searchField'
          onChange={this.search.bind(this)} />
        </div>
        {this.state.albums}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    albumId: state.albumId,
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
    },
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
