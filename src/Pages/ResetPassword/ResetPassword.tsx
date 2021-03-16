/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Button, CircularProgress, Container, Grid, IconButton, Paper, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import useStyles from './styles'
import logo from '../../_shared/assets/img/logos/logo.png'
import classNames from 'classnames'
import { Visibility, VisibilityOff } from '@material-ui/icons'
// import axios from 'axios'
import K from './constants'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { validatePassword } from './utilities'
// import swal from 'sweetalert'

interface State {
    password: string;
    confirmPassword: string;
    showPassword: boolean;
    showConfirmPassword: boolean;
}

export const ResetPassword: React.FC = () => {
    const classes = useStyles()
    const [values, setValues] = useState<State>({
        password: '',
        confirmPassword: '',
        showPassword: false,
        showConfirmPassword: false,
    })
    const [errorType, setErrorType] = useState({
        match: false,
        lenght: false,
    })
    const [error, setError] = useState<boolean>(false)

    const [loading, setLoading] = useState<boolean>(false)

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleChange = (prop: keyof Partial<State>) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setError(false)
        setErrorType({ ...errorType, lenght: false, match: false })
        setValues({ ...values, [prop]: event.target.value });
    };

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const userId = urlParams.get('id')
    const resetToken = urlParams.get('resetToken')


    async function handleSubmit(_e: any) {
        _e.preventDefault()
        let _validatePassword = validatePassword(values.password, values.confirmPassword);
        if (values.password.length < 8) {
            setError(true)
            setErrorType({ ...errorType, lenght: true })
            return;
        }
        else if (!_validatePassword) {
            setError(true)
            setErrorType({ ...errorType, match: true })
            return;
        }

        else {
            setLoading(true)
            const client = new ApolloClient({
                uri: `http${K.SECURED}://${K.BASE_URL}/graphql`,
                cache: new InMemoryCache(),
            });

            const query = gql`
                mutation resetPassword($data: ResetPasswordInput!){
                resetPassword(data: $data)
                }`;

            await client.mutate({
                mutation: query,
                variables: {
                    data: {
                        userId: userId,
                        password: values.password,
                        resetToken: resetToken
                    }

                },
            }).then(res => {
                console.log(res.data);
            }).catch(err => { console.log(err.message) }
            )
        }

        setLoading(false)


    }


    return (<div className={classes.root}>
        <Container maxWidth="sm" className={classes.container}>

            <Paper elevation={3} className={classes.paper}>
                <Grid container alignItems="center" justify="center" className={classes.imgContainer}>
                    <img src={logo} className={classNames(classes.logo, "img-fluid")} alt="logo" />
                </Grid>
                <Grid item xs={12}><Typography align="center" variant="h5" paragraph gutterBottom>Change Password</Typography></Grid>
                <form noValidate autoComplete="off" className={classes.form}>
                    <TextField
                        label="Password"
                        required
                        type={values.showPassword ? 'text' : 'password'}
                        InputProps={{
                            endAdornment: <IconButton

                                onClick={() => setValues({ ...values, showPassword: !values.showPassword })}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>,
                        }}
                        onChange={handleChange('password')}
                        error={error}
                        helperText={error && errorType.match ? "Passwords do not match" : error && errorType.lenght ? "Lenght shouldn't be less than 8 characters" : null}
                        className={classes.textInput}
                    />
                    <TextField
                        label="Confirm Password"
                        required
                        type={values.showConfirmPassword ? 'text' : 'password'}
                        InputProps={{
                            endAdornment: <IconButton

                                onClick={() => setValues({ ...values, showConfirmPassword: !values.showConfirmPassword })}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {values.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>,
                        }}
                        onChange={handleChange('confirmPassword')}
                        error={error}
                        helperText={error && errorType.match ? "Passwords do not match" : error && errorType.lenght ? "Lenght shouldn't be less than 8 characters" : null}
                    />
                    <Button variant="contained" color="primary" className={classes.btn} onClick={handleSubmit}>
                        {loading ? <CircularProgress color="secondary" size={25} /> : <Typography variant="h6" color="secondary">Update Password</Typography>
                        }                    </Button>
                </form>
            </Paper>
        </Container>
    </div>)
}