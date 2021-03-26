/* eslint-disable @typescript-eslint/no-unused-expressions */
import {
    Button,
    CircularProgress,
    Container,
    Grid,
    IconButton,
    Paper,
    TextField,
    Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import logo from "../_shared/assets/img/logos/logo.png";
import classNames from "classnames";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import K from "./constants";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { validatePassword } from "./utilities";
import Particles from "react-particles-js";
import swal from 'sweetalert'
import { useHistory } from "react-router";

interface State {
    password: string;
    confirmPassword: string;
    showPassword: boolean;
    showConfirmPassword: boolean;
    outline1: boolean;
    outline2: boolean;
}

const ResetPassword = () => {
    const classes = useStyles();
    const history = useHistory()
    const [values, setValues] = useState<State>({
        password: "",
        confirmPassword: "",
        showPassword: false,
        showConfirmPassword: false,
        outline1: false,
        outline2: false
    });
    const [errorType, setErrorType] = useState({
        match: false,
        lenght: false,
    });
    const [error, setError] = useState<boolean>(false);

    const [loading, setLoading] = useState<boolean>(false);

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
    };

    const handleChange = (prop: keyof Partial<State>) => (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setError(false);
        setErrorType({ ...errorType, lenght: false, match: false });
        setValues({ ...values, [prop]: event.target.value });
    };

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const userId = urlParams.get("id");
    const resetToken = urlParams.get("resetToken");

    useEffect(() => {
        if (!resetToken && !userId) {
            history.push("*")
        }
    })

    async function handleSubmit(_e: any) {
        _e.preventDefault();
        let _validatePassword = validatePassword(
            values.password,
            values.confirmPassword
        );
        if (values.password.length < 8) {
            setError(true);
            setErrorType({ ...errorType, lenght: true });
            return;
        } else if (!_validatePassword) {
            setError(true);
            setErrorType({ ...errorType, match: true });
            return;
        } else {
            setLoading(true);
            const client = new ApolloClient({
                uri: `http${K.SECURED}://${K.URLS.BASE_URL}/graphql`,
                cache: new InMemoryCache(),
            });

            const query = gql`
        mutation resetPassword($data: ResetPasswordInput!) {
          resetPassword(data: $data)
        }
      `;

            await client
                .mutate({
                    mutation: query,
                    variables: {
                        data: {
                            userId: userId,
                            password: values.password,
                            resetToken: resetToken,
                        },
                    },
                })
                .then((res) => {
                    swal("Update successful", "You can now sign in with your new password", "success")
                })
                .catch((err) => {
                    swal("Error", `${err.message}`, "error")

                });
        }

        setLoading(false);
    }

    return (
        <React.Fragment>
            <Particles params={K.PARTICLES} className={classes.particles} />
            <div className={classes.root}>
                <Container maxWidth="sm" className={classes.container}>
                    <Paper className={classes.paper}>
                        <Grid
                            container
                            alignItems="center"
                            justify="center"
                            className={classes.imgContainer}
                        >
                            <img
                                src={logo}
                                className={classNames(classes.logo, "img-fluid")}
                                alt="logo"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography align="center" variant="h6" paragraph gutterBottom>
                                Change Password
              </Typography>
                        </Grid>
                        <form noValidate autoComplete="off" className={classes.form} onSubmit={(e) => e.preventDefault()}>
                            <TextField
                                label="Password"
                                required
                                type={values.showPassword ? "text" : "password"}
                                variant="outlined"
                                size="small"
                                InputProps={{
                                    endAdornment: (
                                        <IconButton
                                            onClick={() =>
                                                setValues({
                                                    ...values,
                                                    showPassword: !values.showPassword,
                                                })
                                            }
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {values.showPassword ? <Visibility className={values.outline1 ? classes.icon : ""} /> : <VisibilityOff className={values.outline1 ? classes.icon : ""} />}
                                        </IconButton>
                                    ),
                                }}
                                onChange={handleChange("password")}
                                onBlur={() => setValues({ ...values, outline1: false })}
                                onClick={() =>
                                    setValues({ ...values, outline1: !values.outline1 })
                                }
                                error={error}
                                helperText={
                                    error && errorType.match
                                        ? "Passwords do not match"
                                        : error && errorType.lenght
                                            ? "Lenght shouldn't be less than 8 characters"
                                            : null
                                }
                                className={classes.textInput}
                            />
                            <TextField
                                label="Confirm Password"
                                required
                                type={values.showConfirmPassword ? "text" : "password"}
                                variant="outlined"
                                size="small"
                                InputProps={{
                                    endAdornment: (
                                        <IconButton
                                            onClick={() =>
                                                setValues({
                                                    ...values,
                                                    showConfirmPassword: !values.showConfirmPassword,
                                                })
                                            }
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {values.showConfirmPassword ? (
                                                <Visibility className={values.outline2 ? classes.icon : ""} />
                                            ) : (
                                                <VisibilityOff className={values.outline2 ? classes.icon : ""} />
                                            )}
                                        </IconButton>
                                    ),
                                }}
                                onChange={handleChange("confirmPassword")}
                                onBlur={() => setValues({ ...values, outline2: false })}
                                onClick={() =>
                                    setValues({ ...values, outline2: !values.outline2 })
                                }
                                error={error}
                                helperText={
                                    error && errorType.match
                                        ? "Passwords do not match"
                                        : error && errorType.lenght
                                            ? "Lenght shouldn't be less than 8 characters"
                                            : null
                                }
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.btn}
                                onClick={handleSubmit}
                            >
                                {loading ? (
                                    <CircularProgress color="secondary" size={25} />
                                ) : (
                                    <Typography className={classes.btnText} color="secondary">
                                        Update Password
                                    </Typography>
                                )}
                            </Button>
                        </form>
                    </Paper>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default ResetPassword