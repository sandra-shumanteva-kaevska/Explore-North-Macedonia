
import React from 'react'
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike'
import NaturePeopleIcon from '@material-ui/icons/NaturePeople'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'

export const baseAPI = 'https://explore-macedonia.herokuapp.com'
export const categories = [
    {
        category: 'Hiking Tour',
        image: `${baseAPI}/images/categories/hiking.jpg`,
        alt: 'Man is hiking in forest',
        description: 'Descover most beautiful place and mountains by hiking in North Macedonia',
        id: 'hiking-tours',
        icon: <NaturePeopleIcon fontSize='small' />
    },
    {
        category: 'Biking Tour',
        image: `${baseAPI}/images/categories/biking.jpg`,
        alt: 'Bikers on mountain',
        description: 'Descover most beautiful place and mountains by bike in North Macedonia',
        id: 'biking-tours',
        icon: <DirectionsBikeIcon fontSize='small' />
    },
    {
        category: 'Culture Tour',
        image: `${baseAPI}/images/categories/culture.jpg`,
        alt: 'National Macedonian',
        description: 'Descover national history and traditional food',
        id: 'culture-tours',
        icon: <AccountBalanceIcon fontSize='small' />
    }
]