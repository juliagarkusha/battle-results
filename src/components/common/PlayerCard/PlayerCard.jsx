import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./PlayerCard.scss";

const PlayerCard = (props) => {
  const {
    name,
    img,
    children,
    isRenderCardActions = true,
    onReset = () => {},
    className,
  } = props;

  return(
    <Card classes={{ root: `playerCard ${className}` }}>
      <CardMedia
        component="img"
        alt="alt"
        height="200"
        image={img}
        classes={{
          root: 'playerCard-img'
        }}
      />
      <CardContent>
        <Typography variant="h5" component="div" classes={{ root: 'playerCard-name' }}>
          @{name}
        </Typography>
        {children}
      </CardContent>
      {isRenderCardActions && (
        <CardActions>
          <Button
            variant="outlined"
            classes={{ root: 'playerCard-resetBtn'}}
            onClick={onReset}
          >
            Reset
          </Button>
        </CardActions>
      )}
    </Card>
  )
}

export default PlayerCard;
