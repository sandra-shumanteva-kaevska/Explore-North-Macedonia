import React, { useState, useEffect } from "react"
import Loader from 'react-loader-spinner'
import { useLocation } from "react-router-dom";

import { offersAPI } from "../config"
import { OfferCard } from "../components/OfferCard"

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export const OffersList = () => {
    let offersUrl = `${offersAPI}`
    const query = useQuery();

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
        : <section>
            {offers.map((offer) =>
                <OfferCard key={offer._id} {...offer} />
            )}
        </section>
}