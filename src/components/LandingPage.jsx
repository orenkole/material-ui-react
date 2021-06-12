import React from "react";
import { makeStyles } from "@material-ui/styles";
import ButtonArrow from "./ui/ButtonArrow";
import { Button, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  animation: {
    display: "flex",
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
  }
}))

export default function LandingPage() {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid item>
        <Grid container justify="flex-end" alignItems="center" direction="row">
          <Grid sm item>
            <Typography variant="h2" align="center" >
              Brining West Coast Technology<br />to Midwest
            </Typography>
            <Grid container>
              <Grid item>
                <Button variant="contained">Free Estimate</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined">
                  Learn more
                  <ButtonArrow width={15} height={15} fill="red" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <img src='./img_4.png' />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}