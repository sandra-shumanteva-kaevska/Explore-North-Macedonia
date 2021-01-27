import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import MuiImageSlider from 'mui-image-slider'

import Container from 'components/Container'
import ButtonBack from 'components/ButtonBack'

const useStyles = makeStyles({
    root: {
        maxWidth: 1300,
    },
    media: {
        height: 140,
    },
    imgSlider: {
        height: 300,
    }
});


export const OfferInfoCard = (offer) => {
    const classes = useStyles();

    return (
        <Container>
            <Card className={classes.root}>
                <CardActionArea>

                    <MuiImageSlider className={classes.imgSlider} autoPlay='true' arrowsColor="red" images={offer.images.map(image => image.url)} />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">{offer.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p"> {offer.description}
                        </Typography>
                        <div>Price: {offer.price} €</div>
                        <div>Start date: {new Date(offer.startDate).toLocaleDateString()}</div>
                        <div>End date: {new Date(offer.endDate).toLocaleDateString()}</div>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                </CardActions>
            </Card>
            <ButtonBack>Back</ButtonBack>
        </Container>
    );
}