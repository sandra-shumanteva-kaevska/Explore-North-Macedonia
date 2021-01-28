import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { CategoryCard } from "../components/CategoryCard"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: '1'
    },
}));

export const Categories = () => {
    const classes = useStyles()
    const categories = [
        {
            category: "Hiking Tour",
            image: "http://localhost:8080/images/categories/hiking.jpg",
            alt: "Man is hiking in forest",
            id: "hiking-tours"
        },
        {
            category: "Biking Tour",
            image: "http://localhost:8080/images/categories/biking.jpg",
            alt: "Bikers on mountain",
            id: "biking-tours"
        },
        {
            category: "Culture Tour",
            image: "http://localhost:8080/images/categories/culture.jpg",
            alt: "National Macedonian",
            id: "culture-tours"
        }
    ]
    return <>
        <section className={classes.root}>
            {categories.map((category) =>
                <CategoryCard key={category.id} {...category} />
            )}
        </section>
    </>
}