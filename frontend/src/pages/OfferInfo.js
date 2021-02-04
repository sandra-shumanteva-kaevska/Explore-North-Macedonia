import React, { useState, useEffect } from 'react'
import Loader from 'react-loader-spinner'
import { useParams } from 'react-router-dom'

import { offersAPI } from '../config'
import { OfferInfoCard } from '../components/OfferInfoCard'

export const OfferInfo = () => {
    const { id } = useParams()
    const [offer, setOffer] = useState()
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        const oferInfoApi = `${offersAPI}/${id}`
        setLoader(true)
        fetch(oferInfoApi)
            .then(response => response.json())
            .then(json => setOffer(json))
            .finally(() => setLoader(false))
    }, [id])

    return loader
        ? <Loader
            type="Hearts"
            color="red"
            height={400}
            width={400}
            className="loader" /> :
        offer ?
            <OfferInfoCard showDetails={true} {...offer} /> :
            "Order was not found"
}