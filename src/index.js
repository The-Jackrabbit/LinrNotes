import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import App from './app/components/App';
import Q from 'q';
import SpotifyWebApi from 'spotify-web-api-js';
import { Provider }  from 'react-redux';
import AlbumPage from './app/components/AlbumPage';
import LyricCard from './app/components/LyricCard';
//13WjgUEEAQp0d9JqojlWp1

//<AlbumPage albumId='13WjgUEEAQp0d9JqojlWp1'/>

import {createStore} from "redux";
import  store  from "./app/store";

store.subscribe(() => {
})

//"https://i.scdn.co/image/dc9bc3b0491e9cd118240529c3822839fdb2e934"
console.log("Index.js");
console.log(store.getState().albumId)
ReactDOM.render((
  <Provider store={store}>
    
    <AlbumPage />
  </Provider>
 ), document.getElementById('root'));
/* <Router>
    <Route exact={true} path="/" component={App}>
      <Route key={0} exact={true} path="albumPage/:id" component={AlbumPage}></Route>
    </Route>
  </Router>*/