import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store";
// import {createStore} from "redux";
import { Provider } from "react-redux";

store.subscribe(() => {
  console.log(store.getState().favoriteUnFavorite);
  const st = JSON.parse(window.localStorage.getItem("store")) || [];
  st.push(store.getState().favoriteUnFavorite);
  // console.log(st)
  try{
   window.localStorage.setItem("store", JSON.stringify(st))
  }catch(e){
    console.log(e);
  }
});

ReactDOM.render(
  <>
    <Provider store = {store}>
      <App />
    </Provider>
  </>,
  document.getElementById("root")
);
