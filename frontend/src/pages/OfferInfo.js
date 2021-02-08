import React, { useState, useEffect } from 'react'
import Loader from 'react-loader-spinner'
import { useParams } from 'react-router-dom'

import { baseAPI } from '../config'
import { OfferInfoCard } from '../components/OfferInfoCard'
import { Error } from '../components/Error'

export const OfferInfo = () => {
    const { id } = useParams()
    const [offer, setOffer] = useState()
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        const oferInfoApi = `${baseAPI}/offers/${id}`
        setLoader(true)
        fetch(oferInfoApi)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(json => setOffer(json))
            .catch((error) => {
                setError('Offer was not found')
            })
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
            <Error>{error}</Error>
}