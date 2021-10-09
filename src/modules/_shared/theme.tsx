import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFA023",
      dark: "#ab6100",
    },

    secondary: {
      main: "#fafafa",
    },

    text: {
      primary: "#222",
      secondary: "#A19E9E",
    },

    divider: "#E0E0E0",

    // action:{
    //     active: "",
    //     hover: "",
    //     selected:"",
    //     disabled:"",
    // },

    // divider: "rgba(0,0,0,0.12)"
  },

  typography: {
    fontFamily: ["Open Sans", "Poppins", "Roboto Slab"].join(","),
  },
});

theme = responsiveFontSizes(theme);

export default theme;
