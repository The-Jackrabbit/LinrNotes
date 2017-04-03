import React, { Component } from 'react';
import '../styles/AlbumPage.css';
import { nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import SearchItem from "./SearchItem";
import AlbumList from './AlbumList';
import Q from 'q';
import SpotifyWebApi from 'spotify-web-api-js';
var s = new SpotifyWebApi();
s.setPromiseImplementation(Q);

class Header extends Component {

  search(event) {
    s.searchAlbums(event.target.value).then((data) => {
       var temp = [];
       for (var i = 0 ; i < data.albums.items.length; i++) {
            temp.push(
                <SearchItem key={i} data={data} i={i} />
            )  
       }
       this.props.setAlbumList(temp);
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

        <AlbumList />

        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    albumName: state.albumName,
    currentTime: state.currentTime,
    endTime: state.endTime,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAlbumList: (list) => {
      dispatch({
        type: 'SETALBUMLIST',
        payload: list
      })
    },
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));