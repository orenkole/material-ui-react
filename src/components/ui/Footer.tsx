import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

import footerAdornment from "../../assets/Footer Adornment.svg"
import Hidden from "@material-ui/core/Hidden";

import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

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
  },
  icon: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      height: "2.5em",
      width: "2.5em",
    }
  },
  socialContainer: {
    position: "absolute",
    bottom: "2em",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em",
    },
    justifyContent: "flex-end",
  }
}))

interface HeaderProps {
  value: number; setValue: Function; selectedIndex: number; setSelectedIndex: Function;
}

export default function Footer(props: HeaderProps) {
  const { value, setValue, selectedIndex, setSelectedIndex } = props;
  const classes = useStyles();

  return <footer className={classes.footer}>
    <Hidden mdDown>
      <Grid
        container
        className={classes.mainContainer}
        justify="center"
      >
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} to="/" className={classes.link}
              onClick={() => setValue(0)}
            >
              Home
          </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} to="/services" className={classes.link}
              onClick={() => { setValue(1); setSelectedIndex(0) }}
            >
              Services
          </Grid>
            <Grid item component={Link} to="/customsoftware" className={classes.link}
              onClick={() => { setValue(1); setSelectedIndex(1) }}
            >
              Custom Software Development
          </Grid>
            <Grid item component={Link} to="/mobileapps" className={classes.link}
              onClick={() => { setValue(1); setSelectedIndex(2) }}
            >
              Mobile App Development
          </Grid>
            <Grid item component={Link} to="/websites" className={classes.link}
              onClick={() => { setValue(1); setSelectedIndex(3) }}
            >
              Website Development
          </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} to="/revolution" className={classes.link}
              onClick={() => setValue(2)}
            >
              The Revolution
          </Grid>
            <Grid item component={Link} to="/revolution" className={classes.link}
              onClick={() => setValue(2)}
            >
              Vision
          </Grid>
            <Grid item component={Link} to="/revolution" className={classes.link}
              onClick={() => setValue(2)}
            >
              Technology
          </Grid>
            <Grid item component={Link} to="/revolution" className={classes.link}
              onClick={() => setValue(2)}
            >
              Process
          </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} to="/about" className={classes.link}
              onClick={() => setValue(3)}
            >
              About Us
        </Grid>
            <Grid item component={Link} to="/about" className={classes.link}
              onClick={() => setValue(3)}
            >
              History
        </Grid>
            <Grid item component={Link} to="/about" className={classes.link}
              onClick={() => setValue(3)}
            >
              Team
          </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} to="/contact" className={classes.link}
              onClick={() => setValue(4)}
            >
              Contact Us
          </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Hidden>
    <img
      src={footerAdornment} alt="black decorative slash"
      className={classes.adornment}
    />
    <Grid container spacing={2} className={classes.socialContainer}>
      <Grid item component={"a"} href="http://facebook.com" rel="noopener noreferrer" target="_blank">
        <img alt="facebook logo" src={facebook} className={classes.icon} />
      </Grid>
      <Grid item component={"a"} href="http://ftwitter.com" rel="noopener noreferrer" target="_blank">
        <img alt="twitter logo" src={twitter} className={classes.icon} />
      </Grid>
      <Grid item component={"a"} href="http://finstagram.com" rel="noopener noreferrer" target="_blank">
        <img alt="instagram logo" src={instagram} className={classes.icon} />
      </Grid>
    </Grid>
  </footer>
}