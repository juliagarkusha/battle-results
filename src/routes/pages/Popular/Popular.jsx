import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import RepoList from "../../../components/common/RepoList";
import Tabs from "../../../components/ui/Tabs";
import usePopularRepos from "../../../hooks/usePopularRepos";
import "./Popular.scss";

const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

const Popular = () => {
  const [ search, setSearch ] = useSearchParams();
  const defaultSelectedLanguage = !!search.get('language') ? search.get('language') : 'All';

  const [ selectedLanguage, setSelectedLanguage ] = useState(defaultSelectedLanguage);
  const { loading, popularRepos } = usePopularRepos(selectedLanguage);

  useEffect(() => {
    search.set('language', selectedLanguage);
    setSearch(search);
  }, [selectedLanguage])

  return(
    <div>
      <Tabs
        tabs={languages}
        selectedTab={selectedLanguage}
        setTabHandler={(language) => setSelectedLanguage(language)}
        loading={loading}
      />
      <RepoList
        selectedLanguage={selectedLanguage}
        loading={loading}
        popularRepos={popularRepos}
      />
    </div>
  )
}

export default Popular;
