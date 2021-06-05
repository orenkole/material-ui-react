import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA50";
const blackish = "#000";

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
  }
});