import { Button, FormControlLabel, Grid, IconButton, Link, useMediaQuery, useTheme } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment/InputAdornment';
import TextField from '@material-ui/core/TextField/TextField';
import Typography from '@material-ui/core/Typography/Typography';
import { CheckCircle, Face, MailOutline, MyLocation, PhoneIphone } from '@material-ui/icons';
import Checkbox from '@material-ui/core/Checkbox';
import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import Loader from '../Components/Loader';
import { useStyles } from './Styles'
import '../Components/Modal/Modal.css'
import { useForm } from 'react-hook-form';
// import CustomDialog from '../Components/Dialog/Dialog';
import Modal from '../Components/Modal/Modal';
import { gql, useMutation } from "@apollo/client"
import { v4 as uuidv4 } from 'uuid'

// add loyal customer query
const ADD_LOYAL_CUSTOMER = gql`
mutation addLoyalCustomers($data: AddLoyalCustomerInput!){
  addLoyalCustomer(data: $data){
    id
    fullName
    contact
    location
    email
  }
}
`

const Signup = () => {
    var date = new Date();

    const classes = useStyles();
    const theme = useTheme();
    const { register, setValue, getValues } = useForm()
    const swapFooterPosition = useMediaQuery(theme.breakpoints.between("md", "xl"));
    const [showLoader, setShowLoader] = useState(true);
    const [open, setOpen] = useState(false);
    const showModal = useRef(false)
    const value = useRef('')
    const initialValues = {
        fullName: "eg. Kwame Opoku",
        email: "eg. example@xyz.com",
        contact: "eg. 0244000000",
        location: "eg Teshie, Accra"

    }
    const [addLoyalCustomer, { data }] = useMutation(ADD_LOYAL_CUSTOMER);



    const handleSubmit = (event: any) => {
        event.preventDefault()

        const data = {
            id: uuidv4(),
            fullName: getValues("fullName"),
            contact: getValues("contact"),
            location: getValues("location"),
            email: getValues("email")
        }


        addLoyalCustomer({ variables: { data: data } })

    }


    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 4000)
        return () => {
            clearTimeout(timer)
        };
    }, []);


    // handle register button click
    const handleClick = () => {
        // setOpen(true)
        showModal.current = true
    }


    const handleClickOpen = () => {
        // setOpen(true)
    }

    const handleTap = () => {
        getLocation()
        setValue("location", value.current)
        console.log(getValues("location"));

    }

    const handleModalClose = () => {
        return setOpen(false)
    };

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    // @ts-ignore
    function showPosition(position) {

        let coordinates = `Latitude: ${position.coords.latitude} Longitude: ${position.coords.longitude}`;
        value.current = coordinates
        // console.log(value.current);
        return coordinates;

    }


    const SignUpForm = () => {



        return (
            <React.Fragment>

                <Modal show={showModal.current} handleModalClose={handleModalClose} title={"Awesome!"} message={"Thanks for registering with PigeonBolt App ™"} />

                <Grid container className={classes.root}>
                    <Grid item xs={12} className={classes.gradientBg}>
                        <Grid item xs={12} className={classes.branding}>
                            <img src={"/assets/Img/logo.svg"} alt="logo" className={clsx(classes.logo, 'animate__animated animate__fadeInUp')} />
                            <Typography className={clsx(classes.brandingText, 'animate__animated animate__fadeInLeft')} variant="h1">
                                WELCOME TO PIGEONBOLT APP ™
                            </Typography>
                        </Grid>
                        <Grid item className={classes.svgImage}>
                            <img alt="svg" src={"/assets/Img/illustration.svg"} className={clsx(classes.img, 'animate__animated animate__fadeInLeft animate__delay-1s')} />
                        </Grid>

                        {swapFooterPosition && <Footer />}
                    </Grid>

                    <Grid item xs={12} className={classes.formSection}>
                        <Grid item xs={12} className={classes.formContent}>
                            <Typography className={clsx(classes.mainText, 'animate__animated animate__fadeInRight')} variant="h1" gutterBottom>
                                Our Mission
                            </Typography>

                            <Typography className={clsx(classes.subText, 'animate__animated animate__fadeInLeft animate__delay-1s')} variant="h3">
                                PigeonBolt is a mobile and online product that delivers quality e-commerce essentials from
                                restaurants, groceries, bakeries, marketplace shops, and pet-care services.
                            </Typography>

                            <form className={clsx(classes.form,)} onSubmit={handleSubmit}>
                                <TextField
                                    required
                                    id="standard-required"
                                    label="Full Name"
                                    name="fullName"
                                    autoFocus
                                    inputRef={register({ required: true })}
                                    placeholder={initialValues.fullName}
                                    className={classes.textField}
                                    fullWidth
                                    multiline
                                    margin="normal"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Face className={classes.svgIcon} />
                                            </InputAdornment>
                                        )
                                    }}

                                    classes={{

                                    }}
                                />

                                <TextField
                                    required
                                    id="standard-required"
                                    label="Email"
                                    name="email"
                                    inputRef={register}
                                    placeholder={initialValues.email}
                                    className={classes.textField}
                                    fullWidth
                                    multiline
                                    margin="normal"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <MailOutline className={classes.svgIcon} />
                                            </InputAdornment>
                                        )
                                    }}

                                    classes={{

                                    }}
                                />

                                <TextField
                                    required
                                    id="standard-required"
                                    label="Contact"
                                    name="contact"
                                    inputRef={register}
                                    placeholder={initialValues.contact}
                                    className={classes.textField}
                                    fullWidth
                                    multiline
                                    margin="normal"
                                    InputProps={{

                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PhoneIphone className={classes.svgIcon} />
                                            </InputAdornment>
                                        )
                                    }}

                                    inputProps={{
                                        type: "number",
                                        pattern: '[0-9]*',
                                    }}

                                    classes={{

                                    }}
                                />

                                <TextField
                                    required
                                    id="standard-required"
                                    label="Location"
                                    value={getValues("location")}
                                    inputRef={register}
                                    name="location"
                                    placeholder={initialValues.location}
                                    className={classes.textField}
                                    fullWidth
                                    disabled
                                    helperText="Tap icon to pick location"
                                    multiline
                                    margin="normal"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <IconButton style={{ outline: "none" }} edge="start" onClick={handleTap}>
                                                    <MyLocation className={classes.svgIcon} />
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}

                                    classes={{

                                    }}
                                />

                                <Button
                                    className={classes.registerBtn}
                                    endIcon={<CheckCircle />}
                                    onClick={handleClick}
                                    data-toggle="modal"
                                    data-target="#myModal"
                                    // href="#myModal"
                                    type="submit"
                                    value="submit"
                                >
                                    <Typography className={classes.btnText} variant="h3">
                                        Register
                                    </Typography>

                                </Button>

                                <Grid item xs={12} className={classes.agreement}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                style={{ color: "#F9A826" }}
                                                inputRef={register}
                                                required
                                                name="agree"

                                            />
                                        }
                                        label={
                                            <Typography className={classes.agreementText} variant="h4">
                                                By checking you agree to our
                                            <Link onClick={() => window.location.pathname = "/"} className={classes.link}>
                                                    <em className={classes.important}>Terms and Conditions</em>
                                                </Link>
                                            </Typography>}
                                    />



                                </Grid>
                            </form>

                            {!swapFooterPosition && <Footer />}



                        </Grid>
                    </Grid>



                </Grid>
            </React.Fragment>
        )
    }

    const Footer = () => {
        return (
            <Grid item xs={12} className={classes.footerContainer}>
                <footer className={classes.footer}>
                    <Grid item xs={12} className={classes.socialMedia}>
                        <i className={clsx('bx bxl-facebook-circle', classes.bx, 'animate__animated animate__fadeInLeft animate__delay-2s')}></i>
                        <i className={clsx('bx bxl-instagram-alt', classes.bx, 'animate__animated animate__fadeInLeft animate__delay-1.5s')} ></i>
                        <i className={clsx('bx bxl-twitter', classes.bx, 'animate__animated animate__fadeInLeft animate__delay-1s')}></i>
                    </Grid>

                    <Grid item xs={12} className={classes.copyright}>
                        <Typography className={clsx(classes.footerText, 'animate__animated animate__fadeInUp animate__delay-2s')} variant="h4">
                            © PIGEONBOLTAPP {date.getFullYear()}
                        </Typography>

                    </Grid>
                </footer>
            </Grid>
        )
    }
    return (
        <React.Fragment>
            {showLoader && (
                <Loader />
            )}

            {!showLoader && (
                <SignUpForm />
            )}
        </React.Fragment>
    );
}

export default Signup;
