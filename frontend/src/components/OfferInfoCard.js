import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

import ButtonBuy from 'components/ButtonBuy'

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
        width: '753px',
        color: 'white',
    },
    transparency: {
        backgroundColor: '#00000075',
        padding: '5px',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        margin: '20px',
    },
    price: {
        color: 'red',
        fontWeight: 'bold',
        textShadow: '1px 0px'
    },
    date: {
        fontWeight: 'bold'
    },
}));

export const OfferInfoCard = ({ showDetails, ...offer }) => {
    const classes = useStyles()
    return (
        <Box className={classes.container}>
            <Box className={classes.content}>
                <Box className={classes.transparency}>
                    <Typography gutterBottom variant="h5" component="h2">{offer.title}
                    </Typography>
                    <Typography variant="body2" component="p"> {offer.description}
                    </Typography>
                    <Box className={classes.price}>Price: {offer.price} €</Box>
                    <Box className={classes.date}>Start date: {new Date(offer.startDate).toLocaleDateString()}</Box>
                    <Box className={classes.date}>End date: {new Date(offer.endDate).toLocaleDateString()}</Box>
                    {showDetails && (<Link to={`/offers/${offer._id}/order`}><ButtonBuy /></Link>)}
                </Box>
            </Box>
            {showDetails && (<Box className={classes.root}>
                <GridList cellHeight={160} cols={3}>
                    {offer.images.map((image) => (
                        <GridListTile key={image.url} cols={1}>
                            <img src={image.url} alt={image.alt} />
                        </GridListTile>
                    ))}
                </GridList>
            </Box>)}
        </Box>
    );
}
