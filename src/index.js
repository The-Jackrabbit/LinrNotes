import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom"
import {IndexRoute} from 'react-router';
import App from './app/components/App';
import createHistory from 'history';
//import Q from 'q';
//import SpotifyWebApi from 'spotify-web-api-js';
import { Provider }  from 'react-redux';
import AlbumPage from './app/components/AlbumPage';
//import LyricCard from './app/components/LyricCard';
//13WjgUEEAQp0d9JqojlWp1

//<AlbumPage albumId='13WjgUEEAQp0d9JqojlWp1'/>

//import {createStore} from "redux";
import  store  from "./app/store";

const history = createHistory;

store.subscribe(() => {
})

//"https://i.scdn.co/image/dc9bc3b0491e9cd118240529c3822839fdb2e934"
console.log("Index.js");
console.log(store.getState().albumId)
ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
        <Route path={"/"} component={App}/>
        
    </Router>
  </Provider>
 ), document.getElementById('root'));
/* <Router>
    <Route exact={true} path="/" component={App}>
      <Route key={0} exact={true} path="albumPage/:id" component={AlbumPage}></Route>
    </Route>
  </Router>*/