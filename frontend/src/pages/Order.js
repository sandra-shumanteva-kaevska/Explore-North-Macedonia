import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'

import { ButtonBack } from 'components/ButtonBack'
import ButtonBuy from 'components/ButtonBuy'
import ButtonDelete from 'components/ButtonDelete'

const useStyles = makeStyles((theme) => ({
    card: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
        flexGrow: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    orderContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: '1',
        flexDirection: 'column',
        width: '850px',
        backgroundColor: '#ffffffd9'
    },
    form: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    button: {
        display: 'flex',
        flexDirection: 'row'
    }
}))

export const Order = () => {
    const classes = useStyles()

    return (
        <div className={classes.card}>
            <Paper className={classes.orderContainer} elevation={3}>
                <form className={classes.form} noValidate autoComplete="off">
                    <TextField id='firstName' label="First Name" variant="outlined" />
                    <TextField id='lastName' label="Last Name" variant="outlined" />
                    <TextField id='email' label="Email Adress" variant="outlined" />
                </form>
                <Box className={classes.button}>
                    <ButtonBuy />
                    <ButtonDelete />
                </Box>
            </Paper>
        </div>
    )
}