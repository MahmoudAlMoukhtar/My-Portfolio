import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import projectsReducer from "../reducers/projectsReducer";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      projects: projectsReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
