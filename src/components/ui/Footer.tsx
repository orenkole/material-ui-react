import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

import footerAdornment from "../../assets/Footer Adornment.svg"

const useStyles = makeStyles((theme: any) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    // place footer in from of drawer
    zIndex: 1302,
    position: "relative",
  },
  adornment: {
    // move image to container bottom
    verticalAlign: "bottom",
    width: "25em",
    // make image smaller on smaller screens
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75em",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  }
}))

export default function Footer() {
  const classes = useStyles();

  return <footer className={classes.footer}>
    <Grid
      container
      className={classes.mainContainer}
      justify="center"
    >
      <Grid item className={classes.gridItem}>
        <Grid container direction="column" spacing={2}>
          <Grid item component={Link} to="/" className={classes.link}>
            Home
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.gridItem}>
        <Grid container direction="column" spacing={2}>
          <Grid item component={Link} to="/services" className={classes.link}>
            Services
          </Grid>
          <Grid item component={Link} to="/customsoftware" className={classes.link}>
            Custom Software Development
          </Grid>
          <Grid item component={Link} to="/mobileapps" className={classes.link}>
            Mobile App Development
          </Grid>
          <Grid item component={Link} to="/websites" className={classes.link}>
            Website Development
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.gridItem}>
        <Grid container direction="column" spacing={2}>
          <Grid item component={Link} to="/revolution" className={classes.link}>
            The Revolution
          </Grid>
          <Grid item component={Link} to="/revolution" className={classes.link}>
            Vision
          </Grid>
          <Grid item component={Link} to="/revolution" className={classes.link}>
            Technology
          </Grid>
          <Grid item component={Link} to="/revolution" className={classes.link}>
            Process
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.gridItem}>
        <Grid container direction="column" spacing={2}>
          <Grid item component={Link} to="/about" className={classes.link}>
            About Us
        </Grid>
          <Grid item component={Link} to="/about" className={classes.link}>
            History
        </Grid>
          <Grid item component={Link} to="/about" className={classes.link}>
            Team
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.gridItem}>
        <Grid container direction="column" spacing={2}>
          <Grid item component={Link} to="/contact" className={classes.link}>
            Contact Us
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <img
      src={footerAdornment} alt="black decorative slash"
      className={classes.adornment}
    />
  </footer>
}