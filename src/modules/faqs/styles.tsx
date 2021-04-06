import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({

    root: {
        // height: "100vh",
        // display: "grid",
        // placeItems: "center",
        // width: "100%"
    },

    hero: {
        background: 'linear-gradient(135deg, #ffb347 0%, #ffcc33 100%)',
        zIndex: 4,
        paddingBottom: 0,
        display: "flex",
        position: "relative",
        padding: "86px 0 176px",
        textAlign: "center",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        color: "#ffffff",
        backgroundPosition: "center",
        backgroundSize: "cover",
        // backgroundPosition: 'center center',
        // backgroundSize: 'cover',
        width: "100%",
        // '&:before': {
        //     backgroundImage: `url{${img}}`,
        //     transform: "rotate(-5deg) translateX(5%)",
        //     opacity: 0.2,
        //     boxShadow: "0 10px 0 0 #ffffff",
        //     display: "block",
        //     height: "10rem",
        //     backgroundRepeat: "no-repeat",
        //     backgroundPosition: "bottom left",
        //     backgroundSize: "100% auto",
        //     content: "''",
        //     position: "absolute",
        //     right: "-1px",
        //     bottom: "-1px",
        //     left: "-1px",

        // },
        // '&:after': {
        //     boxShadow: "0 10px 0 0 #ffffff",
        //     display: "block",
        //     height: "10rem",
        //     backgroundRepeat: "no-repeat",
        //     backgroundPosition: "bottom left",
        //     backgroundSize: "100% auto",
        //     content: "''",
        //     position: "absolute",
        //     right: "-1px",
        //     bottom: "-1px",
        //     left: "-1px",
        // }
    },
    wrap: {
        display: "flex",
        position: "relative",
        zIndex: 1,
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        marginRight: "0",
        marginLeft: "0",
        width: "90%",
        maxWidth: "1152px",

    },

    subtitle: {

        width: "640px",
        maxWidth: "100%",
        marginTop: "16px",
        color: "rgba(255,255,255,.82)"

    },

    root1: {
        width: '100%',
        margin: '32px 0 -208px!important;',
        boxShadow: "0 0 0 1px transparent inset, 0 0 0 0 rgb(34 36 38 / 15%) inset !important",
        filter: "drop-shadow(-2px 4px 13px rgba(0,0,0,0.25)) !important", color: ' #404e6b',
        background: '#fff !important',
        [theme.breakpoints.up('sm')]: {
            maxWidth: '768px'
        }
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    others: {
        marginTop: '240px',
        // width: 'calc(100% - (30rem + 48px))',
        marginRight: ' auto',
        marginLeft: 'auto',
        maxWidth: '640px !important',
    }

}));

export default useStyles;
