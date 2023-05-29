import React, {FC, ReactElement } from "react";
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import "./RepoCard.scss"

interface RepoCardProps {
  index: number;
  ownerAvatar: string;
  ownerLogin: string;
  repoName: string;
  repoUrl: string;
  stargazersCount: number;
}

const RepoCard: FC<RepoCardProps> = (props): ReactElement => {
  const {
    index,
    ownerAvatar,
    ownerLogin,
    repoName,
    repoUrl,
    stargazersCount
  } = props;

  return (
      <Grid item xs={6} md={4} lg={3} >
        <article className="repoCard">
          <Typography gutterBottom variant="subtitle1" color="text.secondary">#{index + 1}</Typography>
          <Avatar
              src={ownerAvatar}
              alt={ownerLogin}
              sx={{ width: 100, height: 100 }}
          />
          <Link
              href={repoUrl}
              target="_blank"
              underline="none"
              color="#0E78F8"
              fontWeight="bold"
          >
            {repoName}
          </Link>
          <Typography variant="h5" component="div">@{ownerLogin}</Typography>
          <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{ mb: 2}}
          >
            {stargazersCount} stars
          </Typography>
        </article>
      </Grid>
  );
}

export default RepoCard;
