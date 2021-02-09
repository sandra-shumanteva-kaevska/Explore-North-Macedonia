import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { baseAPI } from '../config'
import { OfferInfoCard } from '../components/OfferInfoCard'
import { Error } from '../components/Error'

export const OfferInfo = ({ showLoader }) => {
    const { id } = useParams()
    const [offer, setOffer] = useState()
    const [error, setError] = useState('')

    useEffect(() => {
        const oferInfoApi = `${baseAPI}/offers/${id}`
        showLoader(true)
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
            .finally(() => showLoader(false))
        // eslint-disable-next-line
    }, [id])

    return offer ?
        <OfferInfoCard showDetails={true} {...offer} /> :
        <Error>{error}</Error>
}