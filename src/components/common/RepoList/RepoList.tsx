import React, { FC, ReactElement } from "react";
import Loader from "../../../components/ui/Loader";
import Grid from "@mui/material/Grid";
import RepoCard from "../RepoCard";
import "./RepoList.scss";

interface Repo {
  id: number;
  owner?: {
    avatar_url: string;
    login: string;
  };
  name?: string;
  html_url?: string;
  stargazers_count?: number;
}

interface RepoListProps {
  selectedLanguage: string;
  loading: boolean;
  popularRepos: Repo[];
}

const RepoList: FC<RepoListProps> = (props): ReactElement => {
  const {
    selectedLanguage,
    loading,
    popularRepos
  } = props;

  if (loading) {
    return (
        <Loader
            size={50}
            text={`Loading ${selectedLanguage} repos`}
            className="RepoList-loader"
        />
    );
  }

  return (
      <Grid
          className="RepoList"
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          maxWidth="lg"
      >
        {popularRepos.map((repo, index) => (
            <RepoCard
                key={repo.id}
                index={repo.id}
                ownerAvatar={repo.owner?.avatar_url}
                ownerLogin={repo.owner?.login}
                repoName={repo?.name}
                repoUrl={repo?.html_url}
                stargazersCount={repo?.stargazers_count}
            />
        ))}
      </Grid>
  );
}

export default RepoList;
