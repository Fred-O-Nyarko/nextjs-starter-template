import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: any) => ({
    root: {
        padding: "0px  12px",
        margin: "0 auto",
        width: "100%",
        [theme.breakpoints.between("md", "xl")]: {
            height: "100vh",
            flexWrap: "nowrap"
        }
        // height: "100vh"
    },

    gradientBg: {
        width: "100%",
        maxWidth: "100%",
        background: "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898",
        backgroundBlendMode: "multiply,multiply",
        // backgroundImage: 'url("/assets/Img/bg-gradient.png")',
        backgroundSize: "cover",
        height: "12rem",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
        justifyContent: "center",
        [theme.breakpoints.between("md", "xl")]: {
            height: "100%",
            display: "block"
        }
    },

    img: {
        width: "100%",
        maxWidth: "100%",
        height: "23rem"
    },


    branding: {
        position: "absolute",
        top: "40%",
        transform: "translateY(-50%)",
        textAlign: 'center',
        transition: "all .3s ease-in-out",
        [theme.breakpoints.up("md")]: {
            transform: "unset",
            top: 0,
            position: "relative"
        }
    },

    logo: {
        width: "auto",
        height: "6.5rem",
        verticalAlign: "middle",
        padding: "0.5rem",
        transition: "all .3s ease-in-out",
    },

    brandingText: {
        color: "#FAFAFA",
        // fontSize: "1.2rem",
        padding: "0.5rem",
        transition: "all .3s ease-in-out",
        fontFamily: "Poppins",
        fontWeight: 600
    },
    svgImage: {
        transition: "all .3s ease-in-out",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        width: "100%",
        padding: "2rem",
        [theme.breakpoints.down("sm")]: {
            display: "none"
        }
    },

    formSection: {
        backgroundColor: "#fff",
        [theme.breakpoints.between("md", "xl")]: {
            position: "relative"
        }
    },

    formContent: {
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        [theme.breakpoints.between("md", "xl")]: {
            position: "absolute",
            top: "47%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            padding: "4rem",
        }
    },

    mainText: {
        fontWeight: 600,
        transition: "all .3s ease-in-out",

    },

    subText: {
        color: "#767676",
        transition: "all .3s ease-in-out",
    },

    form: {
        width: "100%",
        padding: "1.5rem 0rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "",
        transition: "all .3s ease-in-out",

        '& .MuiTextField-root': {
            paddingBottom: "1rem"
        },

        '& .MuiInput-underline:after': {
            borderBottom: "2px solid  #3f3d56"
        },
        '& .MuiFormLabel-root.Mui-focused': {
            color: "#3f3d56"
        }
    },

    textField: {
        // padding: "1rem 0rem"
    },

    svgIcon: {
        color: "#6c7293"
    },

    registerBtn: {
        width: "100%",
        backgroundColor: "#F9A826",
        color: "#fff",
        transition: "all .3s ease-in-out",
        padding: "10px 15px",
        "&:hover": {
            backgroundColor: "#ce8b1f",
            textDecoration: "none !important",
            color: "fff !important"
        },
        [theme.breakpoints.between("md", "xl")]: {
            width: "50%",
            padding: "18px"
        }

    },

    btnText: {

    },

    agreement: {
        display: "flex",
        flexWrap: "nowrap",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "1.8rem",
        width: "100%"
    },

    agreementText: {

        paddingLeft: "0.5rem"
    },

    link: {
        cursor: "pointer"
    },

    important: {
        textDecoration: 'underline',
        color: "#F40000",
        fontWeight: 600
    },

    footerContainer: {
        width: "100%",
        [theme.breakpoints.between("md", "xl")]: {
            position: "absolute",
            bottom: "5%",
            color: "#fafafa "
        }
    },

    footer: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "0.8rem",
        width: "100%",
    },

    socialMedia: {
        width: "100%",
        textAlign: "center",
        marginBottom: "1rem"
    },

    bx: {
        padding: "0.5rem 1rem !important",
        fontSize: "1.8rem !important",
        "&:hover": {
            transition: "0.5s ease-in-out",
            transform: 'rotate(360deg)'

        }
    },

    copyright: {

    },

    footerText: {
        textAlign: "center",
        fontWeight: 600
    }
}))