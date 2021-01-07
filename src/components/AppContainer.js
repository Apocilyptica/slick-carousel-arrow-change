import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SlickCarouselArrowChange from "./concepts/SlickCarouselArrowChange";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function AppContainer(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h1>Example of How to Change the Arrows on a Slick-Carousel</h1>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h1>Unsplash Search Value: {props.searchValue}</h1>
            <SlickCarouselArrowChange searchResults={props.searchResults} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
