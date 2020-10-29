import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    appBar: {
        transition: "all .3s ease-in-out",
        [theme.breakpoints.up("md")]: {
            backgroundColor: "transparent",
            boxShadow: "none",

        }
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
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    hamburger: {
        // transition: "all .3s ease-in-out",
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    },
    topBanner: {
        borderBottom: "1px solid #E0E0E0",
        padding: "1rem 0rem"
    },

    headerLinksContainer: {
        padding: "0.5rem 0rem"
    },
    logo: {
        width: "3.5rem",
        height: "auto"
    },

    btn: {
        backgroundColor: "#FFA023",
        borderRadius: "40px",
        padding: "5px 25px",
        boxShadow: "3px 2px 7px -3px rgba(0, 0, 0, 0.25)",
        maxHeight: "30px",
        textTransform: "none"
    },

    icon: {
        maxHeight: "30px",
        color: "#FFA023"
    },
    link: {
        cursor: "pointer",
        transition: "all .3s ease-in",
        "&:hover": {
            color: "#FFA023"
        }
    }
}))

export default useStyles