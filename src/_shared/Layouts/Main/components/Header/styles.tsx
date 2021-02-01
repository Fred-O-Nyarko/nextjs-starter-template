import { fade, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: "all .3s ease-in-out",
    [theme.breakpoints.up("md")]: {
      backgroundColor: "transparent",
      boxShadow: "none",
    },
  },

  nav: {
    transition: "all .3s ease-in-out",
  },

  toolBar: {
    transition: "all .3s ease-in-out",
    [theme.breakpoints.up("md")]: {
      width: "100%",
      margin: "0 auto",
      padding: "0rem !important",
    },
    justifyContent: "flex-end",
  },
  drawerHeader: {
    transition: "all .3s ease-in-out",
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  hamburger: {
    // transition: "all .3s ease-in-out",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  topBanner: {
    borderBottom: "1px solid #E0E0E0 ",
    padding: "0.5rem 0rem",
  },

  headerLinksContainer: {
    padding: "0.5rem 0rem",
  },
  logo: {
    width: "3.5rem",
    height: "auto",
  },

  btn: {
    backgroundColor: "#FFA023",
    borderRadius: "40px",
    padding: "5px 25px",
    boxShadow: "3px 2px 7px -3px rgba(0, 0, 0, 0.25)",
    // maxHeight: "30px",
    textTransform: "none",
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },

  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxHeight: "30px",
    color: "#FFA023",
  },

  icon: {
    maxHeight: "30px",
    color: "#FFA023",
    cursor: "pointer",
  },
  link: {
    cursor: "pointer",
    transition: "all .3s ease-in",
    "&:hover": {
      color: "#FFA023",
    },
  },

  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "0ch",
      "&:focus": {
        width: "4ch",
      },
    },
  },

  remove: {
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "0ch",
      "&:focus": {
        width: "0ch",
      },
    },
  },
}));

export default useStyles;
