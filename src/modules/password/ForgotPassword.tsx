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
import React, { useState } from "react";
import Particles from "react-particles-js";
import useStyles from "./styles";
import K from "./constants";
import classNames from "classnames";
import logo from "../_shared/assets/img/logos/logo.png";
import { MailOutline } from "@material-ui/icons";
import { validateEmail } from "./utilities";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import swal from 'sweetalert'
interface State {
    email: string;
    outline: boolean;
    error: boolean;
    loading: boolean;
}

const ForgotPassword = () => {
    const classes = useStyles();
    const [values, setValues] = useState<State>({
        email: "",
        outline: false,
        error: false,
        loading: false,
    });

    const handleMouseDownEmail = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleChange = (prop: keyof Partial<State>) => (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setValues({ ...values, error: false })
        setValues({ ...values, [prop]: event.target.value });
    };

    async function handleSubmit(_e: any) {
        _e.preventDefault();
        let _validateEmail = validateEmail(values.email);
        if (!_validateEmail) {
            setValues({ ...values, error: true });
            return;
        } else {
            setValues({ ...values, loading: true });
            const client = new ApolloClient({
                uri: `http${K.SECURED}://${K.URLS.BASE_URL}/graphql`,
                cache: new InMemoryCache(),
            });

            const query = gql`
        mutation requestResetPassword($data: RequestResetPasswordInput!) {
          requestResetPassword(data: $data)
        }
      `;

            await client
                .mutate({
                    mutation: query,
                    variables: {
                        data: {
                            email: values.email,
                            clientUrl: K.URLS.RESET_PASSWORD_URL,
                        },
                    },
                })
                .then((res) => {
                    swal("Request sent successfully", "Check your mail for reset link", "success")
                })
                .catch((err) => {
                    swal("Error", `${err.message}`, "error")

                });
        }

        setValues({ ...values, loading: false });
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
                                Reset Password
              </Typography>
                        </Grid>
                        <form noValidate autoComplete="off" className={classes.form} onSubmit={(e) => e.preventDefault()}>
                            <TextField
                                label="Email"
                                required
                                variant="outlined"
                                placeholder="Enter email"
                                size="small"
                                InputProps={{
                                    endAdornment: (
                                        <IconButton onMouseDown={handleMouseDownEmail}>
                                            <MailOutline
                                                className={values.outline ? classes.icon : ""}
                                            />
                                        </IconButton>
                                    ),
                                }}
                                onChange={handleChange("email")}
                                onBlur={() => setValues({ ...values, outline: false })}
                                onClick={() =>
                                    setValues({ ...values, outline: !values.outline })
                                }
                                error={values.error}
                                helperText={values.error && "Enter a valid email"}
                                className={classes.textInput}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.btn}
                                onClick={handleSubmit}
                            >
                                {values.loading ? (
                                    <CircularProgress color="secondary" size={25} />
                                ) : (
                                    <Typography className={classes.btnText} color="secondary">
                                        Reset Password
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

export default ForgotPassword