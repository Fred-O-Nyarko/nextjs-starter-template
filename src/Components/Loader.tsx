import { makeStyles } from '@material-ui/core';
import React from "react"

// TODO work on responsiveness of loader

const useStyles = makeStyles(theme => ({
    loader: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        transition: " all ease-in-out .3s"
    },

    ldsHourglass: {
        display: "inline-block",
        position: "relative",
        width: "100%",

        "&::after": {
            content: '" "',
            display: "block",
            borderRadius: "50%",
            width: 0,
            height: 0,
            margin: "8px",
            boxSizing: "border-box",
            border: "32px solid #fdd",
            borderColor: "#fdd transparent #fdd transparent",
            animation: "$ldsHourglass 1.2s infinite",
            transition: " all ease-in-out .3s"
        },
    },

    "@keyframes ldsHourglass": {
        "0%": {
            transform: "rotate(0deg)",
            animationTimingFunction: "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
        },
        "50%": {
            transform: "rotate(900deg)",
            animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)"
        },
        "100%": {
            transform: "rotate(1800deg)",

        }

    }


}))

const Loader = () => {
    const classes = useStyles();

    return (
        <div className={classes.loader}>
            <div className={classes.ldsHourglass}></div>
        </div>
    );
}

export default Loader;
