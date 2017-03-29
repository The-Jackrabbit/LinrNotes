import {createStore,  applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import promise from "redux-promise-middleware"
import albumPageReducer from "./reducers/AlbumPageReducer";

const store = createStore(
                albumPageReducer, 
                applyMiddleware(createLogger(), thunk, promise())
                );

export default store;