import { combineReducers, createStore } from "redux";

//Actions
export const addSaved = (algo) => {
    return {
        type: "ADD",
        payload: algo
    }
}

export const removeSaved = (algo) => {
    return {
        type: "REMOVE",
        payload: algo
    }
}

export const updateSaved = (storedAlgs) => {
    return {
        type: "UPDATE",
        payload: storedAlgs
    }
}

//Reducer
const initState = [];
const savedReducer = (state = initState, {type, payload}) => {
    switch(type) {
        case "ADD":
            return [...state, payload];
        case "REMOVE":
            return state.filter(star => star !== payload);
        case "UPDATE":
            return payload;
        default:
            return state;
    }
}

//Store
const savedAlgos = combineReducers({savedReducer}); 
export const savedStore = createStore(savedAlgos);