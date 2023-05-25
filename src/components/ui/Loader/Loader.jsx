//External deps
import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from "@mui/material";

//Local deps
import "./Loader.scss";

const Loader = (props) => {
  const {
    text,
    size = 20,
    className,
  } = props

  return (
    <div className={className ? `Loader ${className}` : 'Loader'}>
      <CircularProgress color="inherit" size={size} />
      <Typography variant="h4" sx={{ pt: 3 }}>{text}</Typography>
    </div>
  )
}

export default Loader;
