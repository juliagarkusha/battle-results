export const SET_SELECTED_LANGUAGE = 'setLanguage';
export const REPOS_SET_LIST = 'setReposList';
export const REPOS_LOADING = 'loading';
export const REPOS_ERROR = 'error';

export const setSelectedLanguage = (payload) => ({
  type: SET_SELECTED_LANGUAGE,
  payload
})

export const setRepos = (payload) => ({
  type: REPOS_SET_LIST,
  payload
})

export const isLoading = (payload) => ({
  type: REPOS_LOADING,
  payload
})

export const isError = (payload) => ({
  type: REPOS_ERROR,
  payload
})
