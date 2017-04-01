import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import {BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom"
import {IndexRoute} from 'react-router';
import App from './app/components/App';
import createHistory from 'history';
//import Q from 'q';
//import SpotifyWebApi from 'spotify-web-api-js';
=======
import { BrowserRouter as Router} from 'react-router-dom';
import { Match } from "react-router";
import { createBrowserHistory } from "history";
import App from './app/components/App';
>>>>>>> origin/master
import { Provider }  from 'react-redux';
//import AlbumPage from './app/components/AlbumPage';
import Header from "./app/components/Header";

import  store  from "./app/store";

<<<<<<< HEAD
const history = createHistory;
=======
const history = createBrowserHistory;
>>>>>>> origin/master

store.subscribe(() => {
})
//5JppODax1KTo8AB7jhtCzk
ReactDOM.render((
<<<<<<< HEAD
  <Provider store={store}>
    <Router history={history}>
        <Route path={"/"} component={App}/>
        
    </Router>
  </Provider>
=======
    <Router history={history}>
        <Provider store={store}>
            <Header />
        </Provider>
    </Router>
>>>>>>> origin/master
 ), document.getElementById('root'));
/* <Router>
    <Route exact={true} path="/" component={App}>
      <Route key={0} exact={true} path="albumPage/:id" component={AlbumPage}></Route>
    </Route>
  </Router>
  <Router history={history}>
        <Match pattern="/" component={Header} />
    </Router>
  */