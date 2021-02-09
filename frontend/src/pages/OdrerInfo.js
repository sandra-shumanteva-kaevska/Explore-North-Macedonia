import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import { baseAPI } from 'config'
import { Error } from 'components/Error'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        color: 'white',
    },
    transparency: {
        backgroundColor: '#000000c7',
        padding: '5px',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        borderRadius: '10px',
        textAlign: 'center'
    },
    mail: {
        color: 'red',
        fontWeight: 'bold'
    },
}));

export const OrderInfo = ({ showLoader }) => {
    const { id } = useParams()
    const [error, setError] = useState('')
    const [orderInfo, setOrderInfo] = useState()
    const classes = useStyles()

    useEffect(() => {
        showLoader(true)
        fetch(`${baseAPI}/orders/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(json => setOrderInfo(json))
            .catch((error) => {
                setError('Order Info was not found')
            })
            .finally(() => showLoader(false))
        // eslint-disable-next-line
    }, [id])

    return orderInfo ?
        <Box className={classes.container}>
            <Box className={classes.transparency}>
                <Typography gutterBottom variant="h5" component="h2">
                    Thank you for your order {orderInfo.firstName} {orderInfo.lastName}
                </Typography>
                <Typography variant="body2" component="p"> You will recive your conformation on your e-mail: <span className={classes.mail} >{orderInfo.email}</span> </Typography>
            </Box>
        </Box> :
        <Error>{error}</Error>
}
