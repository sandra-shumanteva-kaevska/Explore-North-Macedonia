import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import BackspaceTwoToneIcon from '@material-ui/icons/BackspaceTwoTone'
import { useHistory } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        backgroundColor: '#3ad44dd6'
    },
}));

export const ButtonBack = () => {
    const classes = useStyles();
    let history = useHistory()

    return (
        <div>
            <Button
                onClick={() => history.goBack()}
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<BackspaceTwoToneIcon />}
            > Back
        </Button>
        </div>
    )
}