import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import home from "./reducers/home";
import homeSaga from "./home";
import axios from "axios";

//watcher saga -> actions -> worker saga
// import loading from "./loading";
import { enableES5 } from "immer";

enableES5();

const rootReducer = combineReducers({
  home,
});

// export default rootReducer;
export default rootReducer;

axios.defaults.baseURL = "https://api.punkapi.com/v2";
axios.defaults.withCredentials = true;

//wathcer saga
export function* rootSaga() {
  yield all([fork(homeSaga)]);
}
