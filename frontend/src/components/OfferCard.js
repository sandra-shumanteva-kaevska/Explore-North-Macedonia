import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

import { baseAPI } from '../config'

const useStyles = makeStyles({
    root: {
        margin: '20px',
        width: '300px',
        height: '350px'
    },
    media: {
        height: '200px',
        width: '342px'
    },
    title: {
        padding: '15px'
    },
    actionArea: {
        textAlign: 'center'
    }
});

export const OfferCard = (offer) => {
    const classes = useStyles();

    return (
        <Link to={`/offers/${offer._id}`}>
            <Card className={classes.root}>
                <CardActionArea className={classes.actionArea}>
                    <CardMedia
                        className={classes.media}
                        image={`${baseAPI}${offer.images[0].url}`}
                        title={offer.images[0].alt}
                    />
                    <CardContent>
                        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{offer.title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    )
}