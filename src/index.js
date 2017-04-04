import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { BrowserRouter as Router} from 'react-router-dom';
import { createBrowserHistory } from "history";
import { Provider }  from 'react-redux';
=======
//import Q from 'q';
//import SpotifyWebApi from 'spotify-web-api-js';
import App from './app/components/App';
import { Provider }  from 'react-redux';
import AlbumPage from './app/components/AlbumPage';
>>>>>>> origin/master
import Header from "./app/components/Header";
import  store  from "./app/store";
<<<<<<< HEAD

const history = createBrowserHistory;

=======
>>>>>>> origin/master
ReactDOM.render((
    <Provider store={store}>
        <Header />
    </Provider>
), document.getElementById('root'));
