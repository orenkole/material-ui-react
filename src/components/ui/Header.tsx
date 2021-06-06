import React, { useEffect, useMemo, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { IconButton, useMediaQuery, useScrollTrigger } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

// import logo from "../../assets/logo.svg";

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
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.5em",
    }
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    }
  },
  tabContainer: {
    marginLeft: "auto"
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    }
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1
    }
  },
  drawerContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    }
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7,
  },
  drawerItemSelected: {
    opacity: 1,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  }
}))

function Header() {

  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e: any, newValue: any) => {
    setValue(newValue);

  }

  // tell menu where to render and openMenu the menu
  const handleClick = (e: any) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  }

  const handleMenuItemClick = (e: any, i: number) => {
    setAnchorEl(null); // close menu
    setOpenMenu(false); // close menu
    setSelectedIndex(i); // select menu item
  }

  // close menu
  const handleClose = (e: any) => {
    setAnchorEl(null);
    setOpenMenu(false);
  }

  const menuOptions = [
    { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
    { name: "Custom Software", link: "/customsoftware", activeIndex: 1, selectedIndex: 1 },
    { name: "Mobile App Development", link: "/mobileapps", activeIndex: 1, selectedIndex: 2 },
    { name: "Website Development", link: "/websites", activeIndex: 1, selectedIndex: 3 },
  ];

  const routes = [
    { name: "Home", link: "/", activeIndex: 0, selectedIndex: 0 },
    { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
    { name: "Revolution", link: "/revolution", activeIndex: 2, selectedIndex: 0 },
    { name: "About Us", link: "/about", activeIndex: 3, selectedIndex: 0 },
    { name: "Contact Us", link: "/contact", activeIndex: 4, selectedIndex: 0 },
  ];

  useEffect(() => {
    [...menuOptions, ...routes].forEach(route => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    })
  }, [value, menuOptions, routes, selectedIndex])

  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        <Tab
          className={classes.tab}
          component={Link}
          to="/"
          label="Home"
        />
        <Tab
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup={anchorEl ? "true" : undefined}
          className={classes.tab}
          component={Link}
          onMouseOver={(event: any) => handleClick(event)}
          to="/services"
          label="Services"
        />
        <Tab
          className={classes.tab}
          component={Link}
          to="/revolution"
          label="The Revolution"
        />
        <Tab
          className={classes.tab}
          component={Link}
          to="/about"
          label="About Us"
        />
        <Tab
          className={classes.tab}
          component={Link} to="/contact"
          label="Contact Us"
        />
      </Tabs>
      <Button variant="contained" color="secondary" className={classes.button}>
        Free estimate
            </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        classes={{ paper: classes.menu }}
        elevation={0}
      >
        {
          menuOptions.map((option: any, i: number) => {
            return (
              <MenuItem
                key={option}
                onClick={(event: any) => {
                  handleMenuItemClick(event, i);
                  setValue(1);
                  handleClose(event);
                }}
                // menu item selecte and tab selected also
                selected={i === selectedIndex && value === 1}
                component={Link}
                to={option.link}
                classes={{ root: classes.menuItem }}
              >
                {option.name}
              </MenuItem>
            )
          })
        }
      </Menu>
    </React.Fragment>
  )

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => { setOpenDrawer(false) }}
        onOpen={() => { setOpenDrawer(true) }}
        classes={{ paper: classes.drawer }}
      >
        <List
          disablePadding
        >
          <ListItem
            divider
            button
            component={Link}
            to="/"
            onClick={() => {
              setOpenDrawer(false);
              setValue(0);
            }}
            selected={value === 0}
          >
            <ListItemText
              disableTypography
              className={value === 0
                ? `${classes.drawerItem} ${classes.drawerItemSelected}`
                : classes.drawerItem
              }
            >Home</ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            component={Link}
            to="/services"
            onClick={() => {
              setOpenDrawer(false);
              setValue(1);
            }}
            selected={value === 1}
          >
            <ListItemText
              disableTypography
              className={value === 1
                ? `${classes.drawerItem} ${classes.drawerItemSelected}`
                : classes.drawerItem
              }
            >Services</ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            component={Link}
            to="/revolution"
            onClick={() => {
              setOpenDrawer(false);
              setValue(2);
            }}
            selected={value === 2}
          >
            <ListItemText
              disableTypography
              className={value === 2
                ? `${classes.drawerItem} ${classes.drawerItemSelected}`
                : classes.drawerItem
              }
            >Revolution</ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            component={Link}
            to="/about"
            onClick={() => {
              setOpenDrawer(false);
              setValue(3);
            }}
            selected={value === 3}
          >
            <ListItemText
              disableTypography
              className={value === 3
                ? `${classes.drawerItem} ${classes.drawerItemSelected}`
                : classes.drawerItem
              }
            >About Us</ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            component={Link}
            to="/contact"
            onClick={() => {
              setOpenDrawer(false);
              setValue(4);
            }}
            selected={value === 4}
          >
            <ListItemText
              disableTypography
              className={value === 4
                ? `${classes.drawerItem} ${classes.drawerItemSelected}`
                : classes.drawerItem
              }
            >Contact Us</ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            component={Link}
            to="/estimate"
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            selected={value === 5}
            className={classes.drawerItemEstimate}
          >
            <ListItemText
              disableTypography
              className={classes.drawerItem}
            >Estimate</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
        className={classes.drawerContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  )

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <Button
              component={Link} to="/"
              className={classes.logoContainer}
              onClick={() => { setValue(0) }}
              disableRipple
            >
              <svg className={classes.logo} id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 139" > <style>{`.st0{fill:none}.st1{fill:#fff}.st2{font-family:Raleway; font-weight:300}.st6{fill:none;stroke:#000;stroke-width:3;stroke-miterlimit:10}`}</style> <path d="M448.07-1l-9.62 17.24-8.36 14.96L369.93 139H-1V-1z" /> <path className="st0" d="M-1 139h479.92v.01H-1z" /> <text transform="translate(261.994 65.233)" className="st1 st2" fontSize="57" > Arc </text> <text transform="translate(17.692 112.015)" className="st1 st2" fontSize="54" > Development </text> <path className="st0" d="M382.44 116.43l47.65-85.23 8.36-14.96M369.83 139l-.01.01L362 153" /> <path d="M438.76 15.76l-56.42 100.91c-12.52-10.83-20.45-26.82-20.45-44.67 0-32.58 26.42-59 59-59 6.23 0 12.24.97 17.87 2.76z" fill="#0b72b9" /> <path d="M479.89 72c0 32.58-26.42 59-59 59-14.73 0-28.21-5.4-38.55-14.33l56.42-100.91c23.85 7.57 41.13 29.89 41.13 56.24z" /> <g id="Group_186" transform="translate(30.153 11.413)"> <g id="Group_185"> <g id="Words"> <path id="Path_59" className="st1" d="M405.05 14.4l-.09 80.38-7.67-.01.06-52.25-29.4 52.21-7.94-.01 45.04-80.32z" /> </g> </g> </g> <path className="st0" d="M457-17l-8.93 16-9.62 17.24-8.36 14.96L369.93 139l-.01.01L361 155" /> </svg>
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  )
}

export default Header;
