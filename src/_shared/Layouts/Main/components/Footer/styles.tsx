import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#FFA023",
    marginTop: "10rem",
  },
  row: {
    width: "80% !important",
    margin: "0 auto !important",
    padding: "2rem 0rem",
  },
  content: {
    margin: "auto 0",
    backgroundColor: "#FAFAFA",
    width: "100%",
  },

  hr: {
    width: "80%",
    border: `0.5px solid ${theme.palette.divider} !important`,
  },
  footerMid: {},

  link: {
    cursor: "pointer",
    transition: "all .3s ease-out",
    "&:hover": {
      textDecoration: "none",
      color: `${theme.palette.primary.main} !important`,
    },
  },

  btn: {
    padding: "0.8rem 3rem",
    filter: "drop-shadow(-2px 4px 10px rgba(0, 0, 0, 0.25)) !important",
    width: "35%",
  },

  form: {},

  logo: {
    width: "4.5rem",
    height: "auto",
  },

  icon: {
    maxHeight: "3rem",
    color: theme.palette.primary.main,
  },

  footerEnd: {
    width: "100%",
    backgroundColor: theme.palette.primary.main,
  },

  policies: {
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

export default useStyles;
