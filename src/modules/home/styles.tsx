import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  iconContainer: {
    background: "#FFFFFF",
    boxShadow:
      " 0px 11px 21px 4px rgba(251, 251, 251, 0.14), 9px 9px 15px -6px rgba(160, 160, 160, 0.21)",
    filter: "blur(0.2px)",
    borderRadius: "10px",
    padding: "1rem",
  },

  keyPoint: {
    marginBottom: "1rem",
  },
  keypointText: {
    marginLeft: "1rem !important",
  },

  buttonContainer: {
    margin: "1rem 0rem",
  },

  btn: {
    padding: "0.8rem 3rem",
    filter: "drop-shadow(-2px 4px 13px rgba(0, 0, 0, 0.25))",
    outline: "none !important",
    // width:"35%",
    // borderRadius:"5rem"
  },
}));

export default useStyles;
