import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { createBrowserHistory } from "history";
import { Provider }  from 'react-redux';
import Header from "./app/components/Header";
import  store  from "./app/store";

const history = createBrowserHistory;

ReactDOM.render((
    <Router history={history}>
        <Provider store={store}>
            <Header />
        </Provider>
    </Router>
), document.getElementById('root'));