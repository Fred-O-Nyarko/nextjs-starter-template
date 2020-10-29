import React from 'react';
import useStyles from './styles';


const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            I am the footer
        </div>
    );
}

export default Footer;
