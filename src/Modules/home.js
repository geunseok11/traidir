import axios from "axios";
import {
  HOME_REQUEST,
  HOME_SUCCESS,
  HOME_FAILURE,
  LOAD_BEERLIST_REQUEST,
  LOAD_BEERLIST_SUCCESS,
  LOAD_BEERLIST_FAILURE,
} from "./reducers/home";
import { all, fork, call, put, takeLatest, throttle } from "redux-saga/effects";

function homeAPI() {
  console.log("homeAPI");
  return axios.get("/beers");
}

function beerListAPI(data) {
  console.log("In SAGA, beerListAPI, data : ", data);
  return axios.get(`/beers`);
}

function* home() {
  try {
    const result = yield call(homeAPI);
    yield put({
      type: HOME_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: HOME_FAILURE,
      error: err.response.data,
    });
  }
}

// goodsList
function* beerList(action) {
  console.log("In SAGA, beerList, action : ", action);
  try {
    const result = yield call(beerListAPI, action.data); // TODO : max params?
    console.log("In SAGA, beerList, result : ", result);
    yield put({
      type: LOAD_BEERLIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: LOAD_BEERLIST_FAILURE,
      error: err.data,
    });
  }
}

function* watchHome() {
  yield takeLatest(HOME_REQUEST, home);
}

function* watchBeerList() {
  console.log("In SAGA, BeerList, executes ");
  yield takeLatest(LOAD_BEERLIST_REQUEST, beerList);
}

export default function* goodsSaga() {
  console.log("In GOODS of SAGA, goodsSaga");
  yield all([fork(watchHome), fork(watchBeerList)]);
}
