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
    content: {
        padding: '10px',
        fontSize: '1rem'
    },
    actionArea: {
        textAlign: 'center'
    }
});

export const CategoryCard = (category) => {
    const classes = useStyles()

    return (
        <Link to={`offers?category=${category.id}`} >
            <Card className={classes.root}>
                <CardActionArea className={classes.actionArea}>
                    <CardMedia
                        className={classes.media}
                        image={category.image}
                        title={category.alt}
                    />
                    <CardContent>
                        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{category.category}
                            <Typography className={classes.content} variant="body2" color="textSecondary" component="p"> {category.description}
                            </Typography>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link >
    )
}
