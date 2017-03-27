import {createStore, combineReducers} from "redux";

import AlbumPageReducer from "./reducers/AlbumPageReducer";

export default createStore(AlbumPageReducer, {});