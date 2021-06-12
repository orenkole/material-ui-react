import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA50";

export default createMuiTheme({
  // values to overwrite in default theme
  palette: {
    common: {
      blue: `${arcBlue}`, // new
      orange: `${arcOrange}`// new
    },
    primary: {
      main: `${arcBlue}` // overwritten
    },
    secondary: {
      main: `${arcOrange}` // overwritten
    }
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
      lineheight: 1.5,
    },
    h2: { 
      fontFamily: "Raleway",
      fontWeight: 700,
      fontsize: "2.5rem",
      color: `${arcBlue}`
    }
  }
});