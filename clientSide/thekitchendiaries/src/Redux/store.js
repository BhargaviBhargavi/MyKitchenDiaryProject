import { createStore, applyMiddleware, combineReducers, compose } from "redux";

import recipeReducer from "./ProductProducer/reducer"

import thunk from "redux-thunk";

const rootReducer = combineReducers({ recipe: recipeReducer });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);