import React from "react";
import List from '@mui/material/List';
import ListItem from "../../../ui/ListItem";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import PeopleIcon from '@mui/icons-material/People';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FolderIcon from '@mui/icons-material/Folder';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import "./PlayerCardInfo.scss";

const PlayerCardInfo = (props) => {
  const {
    location,
    company,
    followers,
    following,
    public_repos,
    blog
  } = props;

  return(
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} className="playerCardInfo">
      <ListItem
        label="Location"
        text={!!location ? location : 'No location info'}
        icon={<LocationOnIcon />}
        classes={{root: "playerCardInfo-item"}}
      />
      <ListItem
        label="Company"
        text={!!company ? company : 'No company info'}
        icon={<HomeWorkIcon />}
        classes={{root: "playerCardInfo-item"}}
      />
      <ListItem
        label="Followers"
        text={!!followers ? followers : 'No followers info'}
        icon={<PeopleIcon />}
        classes={{root: "playerCardInfo-item"}}
      />
      <ListItem
        label="Following"
        text={!!following ? following : 'No following info'}
        icon={<PeopleAltIcon />}
        classes={{root: "playerCardInfo-item"}}
      />
      <ListItem
        label="Public repos"
        text={!!public_repos ? public_repos : 'No public repos info'}
        icon={<FolderIcon />}
        classes={{root: "playerCardInfo-item"}}
      />
      <ListItem
        label="Blog"
        text={!!blog ? blog : 'No blog info'}
        icon={<Diversity3Icon />}
        classes={{root: "playerCardInfo-item"}}
      />
    </List>
  )
}

export default PlayerCardInfo;
