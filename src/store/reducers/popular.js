import {
  SET_SELECTED_LANGUAGE,
  REPOS_SET_LIST,
  REPOS_LOADING,
  REPOS_ERROR
} from "../actions/popular";

const initialState = {
  selectedLanguage: 'All',
  loading: false,
  repos: [],
  error: null
}

const popular = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_LANGUAGE:
      return {
        ...state,
        selectedLanguage: action.payload
      }
    case REPOS_SET_LIST:
      return {
        ...state,
        loading: false,
        repos: action.payload
      }
    case REPOS_LOADING:
      return {
        ...state,
        loading: true,
        error: null
      }
    case REPOS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default popular;
