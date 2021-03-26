import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

    root: {
        height: "100vh",
        display: "grid",
        placeItems: "center",
        width: "100%"
    },
    container: {
        zIndex: 100,
    },
    imgContainer: {
        padding: "0.5rem"
    },
    form: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    logo: {
        height: "5rem",
        width: "auto"
    },
    paper: {
        padding: "1.3rem",
        boxShadow: "0px 11px 21px 4px rgba(251, 251, 251, 0.14), 9px 9px 15px -6px rgba(160, 160, 160, 0.21) !important",
        borderRadius: "10px !important",
    },
    textInput: {
        marginBottom: "1rem"
    },
    icon: {
        color: theme.palette.primary.main
    },
    btn: {
        marginTop: "1.2rem !important",
        outline: "none !important",
        boxShadow: "0 0 0 1px transparent inset, 0 0 0 0 rgb(34 36 38 / 15%) inset !important",
        filter: "drop-shadow(-2px 4px 13px rgba(0,0,0,0.25)) !important",
        fontSize: "1rem",

    },
    btnText: {
        fontWeight: 600
    },
    particles: {
        display: "flex",
        height: "100%",
        position: "absolute",
        backgroundColor: "#fafafa",
        width: "100%",
        overflow: " hidden !important",
    },


}));

export default useStyles;
