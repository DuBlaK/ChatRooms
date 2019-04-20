import React from "react";
import ReactDom from "react-dom";
import Main from "./main";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./rootreducer";
import reduxPromise from "redux-promise";
import thunk from "redux-thunk";

let myStore = createStore(rootReducer, applyMiddleware(reduxPromise, thunk));
console.log(myStore.getState());

ReactDom.render(<Provider store={myStore}><Main /></Provider>, document.querySelector("#root"));