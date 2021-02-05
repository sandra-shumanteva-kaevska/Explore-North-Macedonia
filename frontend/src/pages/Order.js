import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import { Button } from '@material-ui/core'
import SaveAltIcon from '@material-ui/icons/SaveAlt'
import { useParams } from 'react-router-dom'
import Box from '@material-ui/core/Box'

import { OfferInfoCard } from '../components/OfferInfoCard'
import { offersAPI } from '../config'
import { Slider1 } from 'components/Slider'

const useStyles = makeStyles((theme) => ({
    card: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
        flexGrow: 1,
        flexDirection: 'column',
        alignItems: 'center'

    },
    orderContainer: {
        display: 'flex',
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
    },
    submitButton: {
        backgroundColor: '#2ca52c'
    },
    title: {
        color: 'white',
        textShadow: '2px 2px #797575'
    },
    total: {
        color: '#2f0fde',
        fontWeight: 'bold',
        textShadow: '1px 0px',
        fontSize: 'x-large'
    },
    totalBox: {
        backgroundColor: '#a994c7',
        width: '20px',
        height: '20px',
        fontWeight: 'bolder',
        padding: '5px',
    }
}))

export const Order = ({ onFormSubmited }) => {
    const classes = useStyles()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [mail, setMail] = useState('')
    const { id } = useParams()
    const [offer, setOffer] = useState()
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        const oferInfoApi = `${offersAPI}/${id}`
        fetch(oferInfoApi)
            .then(response => response.json())
            .then(json => setOffer(json))
    }, [id])

    const handleSubmit = event => {
        event.preventDefault()
        onFormSubmited({ firstName, lastName, mail })
        setFirstName('')
        setLastName('')
        setMail('')
    }

    return offer ?
        <div className={classes.card}>
            <h3 className={classes.title}>You choose this offer:</h3>
            <OfferInfoCard {...offer} />
            <Paper className={classes.orderContainer} elevation={3}>
                <Slider1 onChange={(x) => { setQuantity(x) }} defaultValue={1} />
                <Box>
                    <p className={classes.total}>Total:</p>
                    <span className={classes.totalBox}>{offer.price * quantity} €</span>
                </Box>
                <form className={classes.form} autoComplete="off" onSubmit={handleSubmit}>
                    <TextField
                        id='firstName'
                        label='First Name'
                        variant='outlined'
                        value={firstName}
                        required
                        inputProps={{
                            minLength: 3,
                            maxLength: 50,
                        }}
                        type='text'
                        onChange={event => setFirstName(event.target.value)}
                    />

                    <TextField
                        id='lastName'
                        label='Last Name'
                        variant='outlined'
                        value={lastName}
                        required
                        inputProps={{
                            minLength: 3,
                            maxLength: 50,
                        }}
                        type='text'
                        onChange={event => setLastName(event.target.value)}
                    />

                    <TextField
                        id='email'
                        label='Email Adress'
                        variant='outlined'
                        value={mail}
                        required
                        type='email'
                        pattern='.+@globex.com'
                        inputProps={{
                            minLength: 8,
                        }}
                        onChange={event => setMail(event.target.value)}
                    />

                    <Button
                        variant='contained'
                        className={classes.submitButton}
                        type='submit'
                        startIcon={<SaveAltIcon />}>
                        Submit
                    </Button>
                </form>
            </Paper>
        </div>
        :
        "Order was not found"
}