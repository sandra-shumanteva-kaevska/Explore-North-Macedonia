import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import BackspaceTwoToneIcon from '@material-ui/icons/BackspaceTwoTone';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        backgroundColor: '#585961'
    },
}));

export default function IconLabelButtons() {
    const classes = useStyles();

    return (
        <div>
            <Button
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<BackspaceTwoToneIcon />}
            > Back
            </Button>
        </div>
    )
}