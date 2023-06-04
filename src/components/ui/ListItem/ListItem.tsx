import React, {ReactNode, FC, ReactElement } from "react";
import { ListItem as MUIListItem } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import "./ListItem.scss";
import Avatar from "@mui/material/Avatar";

interface ListItemProps {
    icon: ReactNode;
    label: string;
    text: string;
}

const ListItem: FC<ListItemProps> = (props): ReactElement => {
    const {
        icon,
        label,
        text
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
    );
}

export default ListItem;
