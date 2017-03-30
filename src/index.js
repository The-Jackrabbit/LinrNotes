import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { Match } from "react-router";
import { createBrowserHistory } from "history";
import App from './app/components/App';
import { Provider }  from 'react-redux';
//import AlbumPage from './app/components/AlbumPage';
import Header from "./app/components/Header";

import  store  from "./app/store";

const history = createBrowserHistory;

store.subscribe(() => {
})
//5JppODax1KTo8AB7jhtCzk
ReactDOM.render((
    <Router history={history}>
        <Provider store={store}>
            <Header />
        </Provider>
    </Router>
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