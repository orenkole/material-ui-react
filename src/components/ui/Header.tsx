import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useScrollTrigger } from '@material-ui/core';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

function ElevationScroll(props: any) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme: any) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar
  }
}))

function Header() {

  const classes = useStyles();

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h3" color="secondary">
              Arc Development
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  )
}

export default Header;
