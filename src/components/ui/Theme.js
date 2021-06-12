import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA50";
const arcGrey = "#868686";

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
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: arcBlue
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: `${arcBlue}`,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: `${arcGrey}`,
    },
    learnButton: {
      borderColor: arcBlue,
      color: arcBlue,
      borderWidth: 2,
      textTransform: "none",
      borderRadius: 50,
      fontFamily: "Roboto",
      fontweight: "bold",
    }
  }
});