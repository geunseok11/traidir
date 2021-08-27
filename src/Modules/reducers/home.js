export const initialState = {
  home: [],
  homeLoading: false,
  homeQnADone: false,
  homeQnAError: null,

  goodsInfo: [],
  goodsList: [],
  searchList: [],
  bucket: [],

  loadGoodsListLoading: false, // goods list
  loadGoodsListDone: false,
  loadGoodsListError: null,
};

export const HOME_REQUEST = "HOME_REQUEST"; // home
export const HOME_SUCCESS = "HOME_SUCCESS";
export const HOME_FAILURE = "HOME_FAILURE";

export const LOAD_BUCKET_REQUEST = "LOAD_BUCKET_REQUEST"; //  bucket
export const ADD_BUCKET_REQUEST = "ADD_BUCKET_REQUEST";
export const DELETE_BUCKET_REQUEST = "DELETE_BUCKET_REQUEST";

export const LOAD_GOODSLIST_REQUEST = "LOAD_GOODSLIST_REQUEST"; // goods list
export const LOAD_GOODSLIST_SUCCESS = "LOAD_GOODSLIST_SUCCESS";
export const LOAD_GOODSLIST_FAILURE = "LOAD_GOODSLIST_REQUEST";

export const homeToLoad = () => {
  return {
    type: HOME_REQUEST,
  };
};

export const loadGoodsList = (data) => {
  return {
    type: LOAD_GOODSLIST_REQUEST,
    data,
  };
};

export const loadToBucket = () => {
  return {
    type: LOAD_BUCKET_REQUEST,
  };
};
export const addToBucket = (data) => {
  return {
    type: ADD_BUCKET_REQUEST,
    data,
  };
};
export const deleteToBucket = () => {
  return {
    type: DELETE_BUCKET_REQUEST,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BUCKET_REQUEST:
      return {
        ...state,
      };
    case ADD_BUCKET_REQUEST:
      return {
        ...state,
        bucket: [action.data, ...state.bucket],
      };
    case DELETE_BUCKET_REQUEST:
      return {
        ...state,
        // count: state.count - 1,
      };

    case HOME_REQUEST:
      return {
        ...state,
        homeLoading: true,
        homeQnADone: false,
        homeQnAError: null,
      };
    case HOME_SUCCESS:
      return {
        ...state,
        homeLoading: false,
        homeQnADone: true,
        home: action.data,
      };
    case HOME_FAILURE:
      return {
        ...state,
        homeLoading: false,
        homeQnAError: action.error,
      };

    case LOAD_GOODSLIST_REQUEST:
      return {
        ...state,
        loadGoodsListLoading: true,
        loadGoodsListDone: false,
        loadGoodsListError: null,
      };
    case LOAD_GOODSLIST_SUCCESS:
      return {
        ...state,
        loadGoodsListLoading: false,
        loadGoodsListDone: true,
        goodsList: [action.data, ...state.goodsList],
      };
    case LOAD_GOODSLIST_FAILURE:
      return {
        ...state,
        loadGoodsListLoading: false,
        loadGoodsListError: action.error,
      };

    default:
      return state;
  }
};
//
export default reducer;
