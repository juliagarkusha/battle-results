import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedLanguage } from "../../../store/popular/popular.reducer";
import RepoList from "../../../components/common/RepoList";
import Tabs from "../../../components/ui/Tabs";
import { getPopularRepos } from "../../../store/popular/popular.requests";
import "./Popular.scss";

const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

const Popular = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((state) => state.popular.selectedLanguage);
  const popularRepos = useSelector((state) => state.popular.repos);
  const isLoading = useSelector((state) => state.popular.loading);

  console.log('debug selectedLanguage: ', selectedLanguage);

  useEffect(() => {
    dispatch(getPopularRepos(selectedLanguage));
  }, [selectedLanguage])

  return(
    <div>
      <Tabs
        tabs={languages}
        selectedTab={selectedLanguage}
        setTabHandler={(language) => dispatch(setSelectedLanguage(language))}
        loading={isLoading}
      />
      <RepoList
        selectedLanguage={selectedLanguage}
        loading={isLoading}
        popularRepos={popularRepos}
      />
    </div>
  )
}

export default Popular;
