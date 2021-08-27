import axios from "axios";
import {
  HOME_REQUEST,
  HOME_SUCCESS,
  HOME_FAILURE,
  LOAD_GOODSLIST_REQUEST,
  LOAD_GOODSLIST_SUCCESS,
  LOAD_GOODSLIST_FAILURE,
} from "./reducers/home";
import { all, fork, call, put, takeLatest, throttle } from "redux-saga/effects";

function homeAPI() {
  console.log("homeAPI");
  return axios.get("/products/all/1?order=date-desc");
}

function goodsListAPI(data) {
  console.log("In SAGA, goodsListAPI, data : ", data);
  return axios
    .get(`/products/${data.category.id}/${iterator}?order=price-asc`)
    .then((res) => {
      iterator++;
    });
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
function* goodsList(action) {
  console.log("In SAGA, goodsList, action : ", action);
  try {
    const result = yield call(goodsListAPI, action.data); // TODO : max params?
    console.log("In SAGA, goodsList, result : ", result);
    yield put({
      type: LOAD_GOODSLIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: LOAD_GOODSLIST_FAILURE,
      error: err.data,
    });
  }
}

function* watchHome() {
  yield takeLatest(HOME_REQUEST, home);
}

function* watchGoodsList() {
  console.log("In SAGA, goodsList, executes ");
  yield takeLatest(LOAD_GOODSLIST_REQUEST, goodsList);
}

export default function* goodsSaga() {
  console.log("In GOODS of SAGA, goodsSaga");
  yield all([fork(watchHome), fork(watchGoodsList)]);
}
