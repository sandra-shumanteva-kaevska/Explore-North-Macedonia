import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export const CategoryCard = (category) => {
    const classes = useStyles()

    return (
        <Link to={`offers?category=${category.id}`} >
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={category.image}
                        title={category.alt}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">{category.category}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link >

    );
}
