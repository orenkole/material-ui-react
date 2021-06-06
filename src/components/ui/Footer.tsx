import React from "react";
import { makeStyles } from "@material-ui/core/styles";

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
  }
}))

export default function Footer() {
  const classes = useStyles();

  return <footer className={classes.footer}>
    <img
      src={footerAdornment} alt="balck decorative slash"
      className={classes.adornment}
    />
  </footer>
}