import React, { useState, useEffect } from 'react'
import Loader from 'react-loader-spinner'
import { useLocation, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

import { offersAPI } from 'config'
import { OfferCard } from 'components/OfferCard'
import ButtonBack from 'components/ButtonBack'

const useStyles = makeStyles((theme) => ({
    section: {
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column'
    },
    offerList: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
}));

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export const OffersList = () => {
    let offersUrl = `${offersAPI}`
    const query = useQuery();
    const classes = useStyles()

    const [offers, setOffers] = useState([]);
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true)
        if (query.get("category")) {
            offersUrl += `?category=${query.get("category")}`
        }
        fetch(offersUrl)
            .then(response => response.json())
            .then(json => setOffers(json))
            .finally(() => setLoader(false))
    }, [])

    return loader
        ? <Loader
            type="Hearts"
            color="red"
            height={400}
            width={400}
            className="loader" />
        : <section className={classes.section}>
            <Box className={classes.offerList}>
                {offers.map((offer) =>
                    <OfferCard key={offer._id} {...offer} />
                )}
            </Box>
            <Link to="/"><ButtonBack /></Link>
        </section>

}