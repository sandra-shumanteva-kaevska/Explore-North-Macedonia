import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import { Box, Button } from '@material-ui/core'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        border: '2px solid blueviolet',
        borderRadius: '40px',
        padding: '5px 0px',
        '@media (min-width: 768px)': {
            padding: '25px'
        },
        backgroundColor: '#a4aae473',
        maxWidth: '900px',
        overflow: 'hidden'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    content: {
        color: 'white',
        maxWidth: '900px'
    },
    transparency: {
        backgroundColor: '#00000091',
        padding: '5px',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginBottom: '10px',
        borderRadius: '40px'
    },
    title: {
        textAlign: 'center'
    },
    price: {
        color: 'red',
        fontWeight: 'bold',
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
                    <Typography className={classes.title} gutterBottom variant="h5" component="h2">{offer.title}
                    </Typography>
                    <Typography variant="body2" component="p"> {offer.description}
                    </Typography>
                    <Box className={classes.price}>Price: {offer.price} €</Box>
                    <Box className={classes.date}>Start date: {new Date(offer.startDate).toLocaleDateString()}</Box>
                    <Box className={classes.date}>End date: {new Date(offer.endDate).toLocaleDateString()}</Box>
                    {showDetails && (
                        <>
                            <Box mt={1} />
                            <Link to={`/offers/${offer._id}/order`}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    endIcon={<ShoppingCartTwoToneIcon />}
                                >
                                    Buy
                                </Button>
                            </Link>
                        </>
                    )}
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
