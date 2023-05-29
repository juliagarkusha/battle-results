import githubApi from "../../api/GithubApi";
import { setRepos, isLoading, isError } from "../actions/popular";

export const getRepos = (setSelectedLanguage) => (dispatch) => {
  try {
    dispatch(isLoading());
    githubApi.getPopularRepos(setSelectedLanguage).then(data => dispatch(setRepos(data.items)));
  } catch (exception) {
    dispatch(isError())
  }
}

