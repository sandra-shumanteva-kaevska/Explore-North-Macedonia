import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function IconLabelButtons() {
    const classes = useStyles();

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<ShoppingCartTwoToneIcon />}
            >
                Buy
      </Button>
        </div>
    );
}