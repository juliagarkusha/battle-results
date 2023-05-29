import React, {FC, ReactElement } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from "@mui/material";

interface LoaderProps {
    text: string;
    size?: number;
    className?: string;
}

const Loader: FC<LoaderProps> = (props): ReactElement => {
    const {
        text,
        size = 20,
        className
    } = props;

    return (
        <div className={className ? `Loader ${className}` : 'Loader'}>
            <CircularProgress color="inherit" size={size} />
            <Typography variant="h4" sx={{ pt: 3 }}>{text}</Typography>
        </div>
    );
}

export default Loader;
