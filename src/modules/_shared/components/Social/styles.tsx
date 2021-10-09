import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    root:{
        position:"fixed",
        top:"320px",
        right: 0,
        width:"80px",
        backgroundColor: theme.palette.primary.main,
        filter:"drop-shadow(3px 2px 13px rgba(0, 0, 0, 0.25))",
        zIndex: 999
    },
    icon: {
        maxHeight: "40px",
        color: "#FAFAFA"
    },
}))

export default useStyles;