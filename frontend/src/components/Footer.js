import React from 'react'
import Typography from '@material-ui/core/Typography'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        background: 'linear-gradient(90deg, rgba(160,150,223,1) 13%, rgba(19,96,186,1) 73%)',
    },
    footer: {
        bottom: '0px',
    }
}));

export const Footer = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Typography variant="h6" className={classes.footer}>
                <FavoriteIcon fontSize="small" />
                        Made by: Sandra Shumanteva Kaevska 2021 ® <FavoriteIcon fontSize="small" />
            </Typography>

        </div>
    )

}