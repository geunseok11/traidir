export const initialState = {
  home: [],
  homeLoading: false,
  homeQnADone: false,
  homeQnAError: null,

  beerInfo: [],
  beerList: [],
  searchList: [],
  bucket: [],

  loadBeerListLoading: false, // goods list
  loadBeerListDone: false,
  loadBeerListError: null,
};

export const HOME_REQUEST = "HOME_REQUEST"; // home
export const HOME_SUCCESS = "HOME_SUCCESS";
export const HOME_FAILURE = "HOME_FAILURE";

export const LOAD_BUCKET_REQUEST = "LOAD_BUCKET_REQUEST"; //  bucket
export const ADD_BUCKET_REQUEST = "ADD_BUCKET_REQUEST";
export const DELETE_BUCKET_REQUEST = "DELETE_BUCKET_REQUEST";

export const LOAD_BEERSLIST_REQUEST = "LOAD_BEERLIST_REQUEST"; // goods list
export const LOAD_BEERLIST_SUCCESS = "LOAD_BEERLIST_SUCCESS";
export const LOAD_BEERLIST_FAILURE = "LOAD_BEERLIST_REQUEST";

export const homeToLoad = () => {
  return {
    type: HOME_REQUEST,
  };
};

export const loadBeerList = (data) => {
  return {
    type: LOAD_BEERLIST_REQUEST,
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

    case LOAD_BEERLIST_REQUEST:
      return {
        ...state,
        loadBeerListLoading: true,
        loadBeerListDone: false,
        loadBeerListError: null,
      };
    case LOAD_BEERLIST_SUCCESS:
      return {
        ...state,
        loadBeerListLoading: false,
        loadBeerListDone: true,
        beerList: [action.data, ...state.beerList],
      };
    case LOAD_GOODSLIST_FAILURE:
      return {
        ...state,
        loadBeerListLoading: false,
        loadBeerListError: action.error,
      };

    default:
      return state;
  }
};
//
export default reducer;
