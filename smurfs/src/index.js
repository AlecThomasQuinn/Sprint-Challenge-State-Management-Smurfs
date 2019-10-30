import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux"; 
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "./index.css";
import App from "./Components/App";
import { reducer as smurfVillageReducer } from './Reducers/smurfVillage'

const rootReducer = combineReducers({
    smurfVillage: smurfVillageReducer,
  });

  const store = createStore(rootReducer, applyMiddleware(thunk));

const rootElement = document.getElementById("root")
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
 );
