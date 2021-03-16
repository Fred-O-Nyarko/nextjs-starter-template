import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#f4f7fc",
        height: "100vh",
        display: "grid",
        placeItems: "center"
    },
    container: {

    },
    imgContainer: {
        marginBottom: "1rem",
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
        padding: "2rem"
    },
    textInput: {
        marginBottom: "1rem"
    },
    btn: {
        marginTop: "1.2rem !important",
        outline: "none !important"
    }

}));

export default useStyles;
