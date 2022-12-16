import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import "./index.css";
import "animate.css";
import configureStore from "./redux/store/configuerStore";
import {startSetProjectsAction} from "./redux/actions/projectsActions";
import {Provider} from "react-redux";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import database, {firebase} from "./firebase/firebase";
import {login, logout} from "./redux/actions/auth";
import "./firebase/firebase";
const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <div className="absolute inset-0 mx-[50%] flex items-center justify-cneter">
      <ClimbingBoxLoader />
    </div>
  </React.Fragment>
);
/* store.dispatch(startSetProjectsAction()).then(() => {
  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
  console.log(store.getState());
}); */

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    root.render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
    hasRendered = true;
  }
};

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log("log in");
    console.log(user.uid);
    console.log(user.displayName);
    console.log(user.photoURL);

    //console.log(user.updatePassword);
    store.dispatch(login(user.uid, user.displayName, user.photoURL));
    store
      .dispatch(startSetProjectsAction())
      .then(() => {
        renderApp();
      })
      .catch(() => {
        console.log("errorrrrrrrrrr");
        root.render(
          <h1 className="text-5xl font-bold text-center">
            open VPN then try again
          </h1>
        );
      });
  } else {
    console.log("log out");
    store.dispatch(logout());
    store
      .dispatch(startSetProjectsAction())
      .then(() => {
        renderApp();
      })
      .catch(() => {
        console.log("errorrrrrrrrrr");
        root.render(
          <h1 className="text-5xl font-bold text-center">
            open VPN then try again
          </h1>
        );
      });
  }
});
