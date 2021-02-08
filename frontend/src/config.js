
import React from 'react'
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike'
import NaturePeopleIcon from '@material-ui/icons/NaturePeople'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'

export const baseAPI = "http://localhost:8080"
export const categories = [
    {
        category: "Hiking Tour",
        image: "http://localhost:8080/images/categories/hiking.jpg",
        alt: "Man is hiking in forest",
        description: "Descover most beautiful place and mountains by hiking in North Macedonia",
        id: "hiking-tours",
        icon: <NaturePeopleIcon fontSize="small" />
    },
    {
        category: "Biking Tour",
        image: "http://localhost:8080/images/categories/biking.jpg",
        alt: "Bikers on mountain",
        description: "Descover most beautiful place and mountains by bike in North Macedonia",
        id: "biking-tours",
        icon: <DirectionsBikeIcon fontSize="small" />
    },
    {
        category: "Culture Tour",
        image: "http://localhost:8080/images/categories/culture.jpg",
        alt: "National Macedonian",
        description: "Descover national history and traditional food",
        id: "culture-tours",
        icon: <AccountBalanceIcon fontSize="small" />
    }
]