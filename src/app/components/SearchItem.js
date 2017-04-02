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
const history = createBrowserHistory;

//xs = < 760 s <= 990
import Q from 'q';
import SpotifyWebApi from 'spotify-web-api-js';

var s = new SpotifyWebApi();
s.setPromiseImplementation(Q);

export default class SearchItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div key={this.props.i} value={this.props.i} className="row">
            <Link to={`./`} onClick={() => console.log(this.props.i)}>
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
