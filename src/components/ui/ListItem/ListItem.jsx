import React from "react";
import { ListItem as MUIListItem } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import "./ListItem.scss";
import Avatar from "@mui/material/Avatar";

const ListItem = (props) => {
  const {
    icon,
    label,
    text,
  } = props;

  return(
    <MUIListItem>
      <ListItemAvatar>
        <Avatar>
          {icon}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={label}
        secondary={text}
      />
    </MUIListItem>
  )
}

export default ListItem;
