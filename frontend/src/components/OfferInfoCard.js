import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MuiImageSlider from 'mui-image-slider';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export const OfferInfoCard = (offer) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <MuiImageSlider images={offer.images} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">{offer.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p"> {offer.description}
                    </Typography>
                    <span>{offer.price}</span>
                    <span>{offer.startDate}</span>
                    <span>{offer.endDate}</span>
                </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
        </Card>
    );
}