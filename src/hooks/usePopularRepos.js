import { useEffect, useState } from "react";
import githubApi from "../api/GithubApi";

const usePopularRepos = (language = '') => {
  const [ loading, setLoading ] = useState(false);
  const [ popularRepos, setPopularRepos ] = useState([]);

  useEffect(() => {
    try {
      setLoading(true);
      githubApi.getPopularRepos(language).then(data => {
        setPopularRepos(data.items);
        setLoading(false);
      })
    } catch (exception) {
      setLoading(false);
      console.log('debug exception: ', exception);
    }
  }, [language])

  return {
    loading,
    popularRepos,
  }
}

export default usePopularRepos;
