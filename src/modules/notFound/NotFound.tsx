import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import classNames from 'classnames'
import React from 'react'
import img from '../_shared/assets/img/404.svg'
const NotFound = () => {
    const useStyles = makeStyles((theme) => ({
        container: {
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",

        },
        content: {
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            padding: "4rem",
            [theme.breakpoints.down("sm")]: {
                flexDirection: "column-reverse !important",
                textAlign: "center !important",
                padding: "1rem"
            },

        },
        headerText: {
            fontWeight: 700,
            color: "#484848 !important"
        },
        subText: {
            fontSize: "1.8rem !important",
            marginTop: "2rem !important",
            marginBottom: "2rem !important",
            color: "#585858 !important",
            [theme.breakpoints.down("sm")]: {
                marginTop: "1rem !important",
                marginBottom: "1rem !important",
                padding: 0
            },
        },

        caption: {
            fontSize: "1.2rem !important",
            marginTop: "2rem !important",
            marginBottom: "2rem !important",
            [theme.breakpoints.down("sm")]: {
                marginTop: "1rem !important",
                marginBottom: "1rem !important",
                // fontSize: "1rem !important",
                padding: 0
            },
        },
        btn: {
            outline: "none !important",
            boxShadow: "0 0 0 1px transparent inset, 0 0 0 0 rgb(34 36 38 / 15%) inset !important",
            filter: "drop-shadow(-2px 4px 13px rgba(0,0,0,0.25)) !important",
        },
        description: {
            [theme.breakpoints.down("sm")]: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "0rem"
            }
        },
        imgContainer: {
            [theme.breakpoints.down('sm')]: {
                marginBottom: '2rem !important',
                width: "calc(100% - 5rem)"
            }
        }
    }))

    const classes = useStyles()

    return (
        <Grid container className={classes.container}>
            <Grid item xs={12} className={classes.content}>
                <Grid item xs={12} md={5} className={classes.description}>
                    <Typography variant="h2" gutterBottom paragraph className={classes.headerText}>Uh ohhh ! 🤭</Typography>
                    <Typography variant="h4" color="textSecondary" gutterBottom paragraph className={classes.subText}>We can't find the page you're looking for.</Typography>
                    <Typography variant="caption" color="textSecondary" gutterBottom paragraph className={classes.caption}>
                        It seems you are lost in a perpertual black hole.
                        Let us help guide you out and get you back home.
                    </Typography>

                    <Button variant="contained" color="primary" size="large" className={classes.btn} onClick={() => window.location.pathname = '/'}>
                        <Typography color="secondary" variant="h6">Take Me Back Home</Typography>
                    </Button>
                </Grid>
                <Grid item xs={12} md={7} className={classNames(classes.imgContainer, "img-fluid")}>
                    <img src={img} alt="404" />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default NotFound
