import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useScrollTrigger } from '@material-ui/core';

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

function Header() {
  return (  
    <ElevationScroll>
      <AppBar position="fixed">
        <Toolbar>Arc Development</Toolbar>
      </AppBar>
    </ElevationScroll>
  )
}

export default Header;
