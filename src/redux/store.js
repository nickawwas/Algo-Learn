import { combineReducers, createStore } from "redux";

import { stars } from "./reducers";

//Create Store from Combined Reducers
const savedAlgos = combineReducers({ stars });

export const savedStore = createStore(savedAlgos);