import React from "react";
import { makeStyles } from "@material-ui/styles";
import ButtonArrow from "./ui/ButtonArrow";
import { Button, Grid, Typography, useTheme } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    }
  },
  animation: {
    display: "flex",
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    }
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    buttonContainer: {
      marginTop: "1em",
    },
  },
  learnButtonHero: {
    borderColor: theme.palette.common.blue,
    color: theme.palette.common.blue,
    borderWidth: 2,
    textTransform: "none",
    borderRadius: 50,
    fontFamily: "Roboto",
    fontweight: "bold",
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    }
  }
}))

export default function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item>
        <Grid container justify="flex-end" alignItems="center" direction="row">
          <Grid sm item className={classes.heroTextContainer}>
            <Typography variant="h2" align="center" >
              Brining West Coast Technology<br />to Midwest
            </Typography>
            <Grid container justify="center" className={classes.buttonContainer}>
              <Grid item>
                <Button
                  variant="contained"
                  className={classes.estimateButton}
                >Free Estimate</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.learnButtonHero}>
                  <span style={{ marginRight: 10 }}>Learn more</span>
                  <ButtonArrow width={15} height={15} fill={`${theme.palette.common.blue}`} />
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