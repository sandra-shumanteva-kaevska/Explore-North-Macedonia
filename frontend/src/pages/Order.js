import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'


import Container from '../components/Container'
import ButtonBack from 'components/ButtonBack'
import ButtonBuy from 'components/ButtonBuy'
import ButtonDelete from 'components/ButtonDelete'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        }
    }
}))

export const Order = () => {
    const classes = useStyles()

    return (
        <Container>

            <form className={classes.root} noValidate autoComplete="off">
                <TextField id='firstName' label="First Name" variant="outlined" />
            </form>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id='lastName' label="Last Name" variant="outlined" />
            </form>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id='email' label="Email Adress" variant="outlined" />
            </form>

            <ButtonBuy />
            <ButtonDelete />
            <ButtonBack />
        </Container>
    )
}