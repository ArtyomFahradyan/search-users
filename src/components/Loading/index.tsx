import React from 'react';
import { CircularProgress, makeStyles, Backdrop } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff'
    },
}));

function Loading() {
    const classes = useStyles();

    return (
        <div>
            <Backdrop className={classes.backdrop} open>
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}

export default Loading;