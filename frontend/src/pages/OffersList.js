import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

import { baseAPI } from '../config'
import { OfferCard } from 'components/OfferCard'

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
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: '1'
    },
}));

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export const OffersList = ({ showLoader }) => {
    const query = useQuery();
    const classes = useStyles()

    const [offers, setOffers] = useState([]);

    useEffect(() => {
        let offersUrl = `${baseAPI}/offers`
        showLoader(true)
        if (query.get("category")) {
            offersUrl += `?category=${query.get("category")}`
        }
        fetch(offersUrl)
            .then(response => response.json())
            .then(json => setOffers(json))
            .finally(() => showLoader(false))
        // eslint-disable-next-line
    }, [query.get("category")])

    return <section className={classes.section}>
        <Box className={classes.offerList}>
            {offers.map((offer) =>
                <OfferCard key={offer._id} {...offer} />
            )}
        </Box>
    </section>

}