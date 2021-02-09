import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import { Button, Typography } from '@material-ui/core'
import SaveAltIcon from '@material-ui/icons/SaveAlt'
import { useParams, useHistory } from 'react-router-dom'
import Box from '@material-ui/core/Box'

import { OfferInfoCard } from '../components/OfferInfoCard'
import { baseAPI } from '../config'
import { PrettoSlider } from 'components/Slider'
import { Error } from '../components/Error'

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
        backgroundColor: '#ffffffd9',
        borderRadius: '25px',
        maxWidth: '900px'
    },
    form: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        textAlign: 'center'
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
        textShadow: '2px 2px #797575',
        textAlign: 'center'
    },
    total: {
        color: '#2f0fde',
        fontWeight: 'bold',
        textShadow: '1px 0px',
        fontSize: 'x-large'
    },
    totalBox: {
        backgroundColor: '#a994c7',
        fontWeight: 'bolder',
        padding: '5px',
        borderRadius: '5px'
    },
    sliderTitle: {
        color: '#2f0fde',
        fontWeight: 'bold',
        textShadow: '1px 0px',
        fontSize: 'x-large'
    }
}))

export const Order = ({ showLoader }) => {
    const classes = useStyles()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [mail, setMail] = useState('')
    const { id } = useParams()
    const [offer, setOffer] = useState()
    const [quantity, setQuantity] = useState(1)
    const [error, setError] = useState('')
    const [buttonDisable, setButtonDisable] = useState(false)

    let history = useHistory()

    useEffect(() => {
        showLoader(true)
        fetch(`${baseAPI}/offers/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(json => setOffer(json))
            .catch((error) => {
                setError('Offer was not found')
            })
            .finally(() => showLoader(false))
        // eslint-disable-next-line
    }, [id])

    const postOrder = (data) => {
        fetch(`${baseAPI}/orders`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then((json) => history.push(`/order/${json._id}`))
            .catch((error) => {
                setError('Order was not found')
            })
    }

    const handleSubmit = event => {
        event.preventDefault()
        setButtonDisable(true)
        postOrder({ firstName, lastName, email: mail, offer: id, quantity })
        setFirstName('')
        setLastName('')
        setMail('')
    }

    return offer ?
        <div className={classes.card}>
            <Typography variant="h3" className={classes.title}>You choose this offer:</Typography>
            <OfferInfoCard {...offer} />
            <Paper className={classes.orderContainer} elevation={3}>

                <Box>
                    <Typography gutterBottom className={classes.sliderTitle}>Numer of persons:</Typography>
                    <PrettoSlider min={1} max={10} valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={1} onChange={(event, newValue) => setQuantity(newValue)} />
                </Box>

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
                        disabled={buttonDisable}
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
        <Error>{error}</Error>

}