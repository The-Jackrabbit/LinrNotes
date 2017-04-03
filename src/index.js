import React from 'react';
import ReactDOM from 'react-dom';
//import Q from 'q';
//import SpotifyWebApi from 'spotify-web-api-js';
import App from './app/components/App';
import { Provider }  from 'react-redux';
import AlbumPage from './app/components/AlbumPage';
import Header from "./app/components/Header";

import  store  from "./app/store";
ReactDOM.render((
    <Provider store={store}>
        <Header />
    </Provider>
), document.getElementById('root'));
