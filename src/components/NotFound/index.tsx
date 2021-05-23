import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import  NotFoundSVG from 'assets/icons/not-found.png';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        width: '100%',
        height: '100%'
    },
    text: {
        fontSize: 'x-large'
    },
    button: {
      marginTop: '20px'
    },
    subWrapper: {
        textAlign: 'center'
    }
});

function NotFound() {
    const classes = useStyles();
    const history = useHistory();

    const handleGoHome = () => {
        history.push('/');
    };

    return (
        <div className={classes.wrapper}>
            <div className={classes.subWrapper}>
                <img src={NotFoundSVG} alt="Icon" />
                <div className={classes.text}>Page Not Found</div>
                <Button className={classes.button} variant="contained" color="primary" onClick={handleGoHome}>
                    Go Home
                </Button>
            </div>
        </div>
    );
}

export default NotFound;
