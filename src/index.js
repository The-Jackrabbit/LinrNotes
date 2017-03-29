import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { createBrowserHistory } from "history";
import App from './app/components/App';
import { Provider }  from 'react-redux';
//import AlbumPage from './app/components/AlbumPage';
//import Header from "./app/components/Header";

import  store  from "./app/store";

const history = createBrowserHistory;

store.subscribe(() => {
})

//"https://i.scdn.co/image/dc9bc3b0491e9cd118240529c3822839fdb2e934"
console.log("Index.js");
console.log(store.getState().albumId)
ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
        <Route path="/" component={App} />
    </Router>
  </Provider>
 ), document.getElementById('root'));
/* <Router>
    <Route exact={true} path="/" component={App}>
      <Route key={0} exact={true} path="albumPage/:id" component={AlbumPage}></Route>
    </Route>
  </Router>*/