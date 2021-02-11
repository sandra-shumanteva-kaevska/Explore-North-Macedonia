import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { CategoryCard } from '../components/CategoryCard'
import { categories } from '../config'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: '1'
    },
}))

export const Categories = () => {
    const classes = useStyles()

    return <section className={classes.root}>
        {categories.map((category) =>
            <CategoryCard key={category.id} {...category} />
        )}
    </section>
}