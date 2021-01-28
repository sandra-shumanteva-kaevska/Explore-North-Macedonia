import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

import ButtonBack from 'components/ButtonBack'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        margin: '30px',
        border: '2px solid blueviolet',
        borderRadius: '40px',
        padding: '25px',
        backgroundColor: '#a4aae473',
        width: '753px',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        margin: '20px',
    },
    content: {
        width: '753px'
    },
    price: {
        color: 'red',
        fontWeight: 'bold'
    },
    date: {
        fontWeight: 'bold'
    },
}));

export const OfferInfoCard = (offer) => {
    const classes = useStyles()

    return (
        <Box className={classes.container}>
            <Box className={classes.content}>
                <Typography gutterBottom variant="h5" component="h2">{offer.title}
                </Typography>
                <Typography variant="body2" component="p"> {offer.description}
                </Typography>
                <Box className={classes.price}>Price: {offer.price} €</Box>
                <Box className={classes.date}>Start date: {new Date(offer.startDate).toLocaleDateString()}</Box>
                <Box className={classes.date}>End date: {new Date(offer.endDate).toLocaleDateString()}</Box>
                <Link to="/"><ButtonBack /></Link>
            </Box>
            <Box className={classes.root}>
                <GridList cellHeight={160} cols={3}>
                    {offer.images.map((image) => (
                        <GridListTile key={image.url} cols={1}>
                            <img src={image.url} alt={image.alt} />
                        </GridListTile>
                    ))}
                </GridList>
            </Box>

        </Box>
    );
}
