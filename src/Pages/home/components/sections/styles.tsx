import { makeStyles } from "@material-ui/core";
import backgroundImg from "../../../../_shared/assets/img/bg.png";
import cake from "../../../../_shared/assets/img/cake.jpg";

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
    marginTop: "1rem",
    display: "flex",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },

  btn: {
    padding: "0.8rem 3rem",
    filter: "drop-shadow(-2px 4px 13px rgba(0, 0, 0, 0.25)) !important",
    width: "auto",
  },
  outlinedBtn: {
    border: "2px solid #fff",
    "&:hover": {
      backgroundColor: "#FFA023",
    },
  },

  bgImage: {
    backgroundImage: `url(${backgroundImg})`,
    width: "100% !important",
    left: 0,
    height: "29rem",
    backgroundSize: "cover",
  },

  sectionContainer: {
    position: "relative",
  },

  imgContainer: {
    position: "absolute",
    top: "-20rem",
    left: "5rem",
  },

  imageAbsolute: {
    position: "absolute",
    top: "-7.5rem",
  },

  textWhite: {
    color: "#fafafa",
  },

  cardItem: {
    boxShadow:
      "0px 11px 21px 4px rgba(251, 251, 251, 0.14), 9px 9px 15px -6px rgba(160, 160, 160, 0.21)",
    borderRadius: "5px 15px 80px 80px",
    padding: "1rem 3.5rem",
    maxWidth: "20rem !important",

    "&:hover": {
      boxShadow:
        "0px 0px 21px 4px rgba(223, 223, 223, 0.5), 0px 9px 15px rgba(160, 160, 160, 0.5)",
      transition: "all .3s ease-out",
    },
  },

  banner: {
    backgroundColor: theme.palette.primary.main,
  },

  imageContainer: {
    backgroundImage: `url("${cake}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: " center center",
    height: "auto",
    boxShadow:
      "0px 0px 21px 4px rgba(223, 223, 223, 0.5), 0px 9px 15px rgba(160, 160, 160, 0.5)",
    transition: "all .3s ease-out",
    [theme.breakpoints.down("sm")]: {
      height: "18rem",
      marginTop: "3rem",
    },
  },
}));

export default useStyles;
