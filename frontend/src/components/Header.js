import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { MyMenu } from './Menu'
import logo from '../assets/logo.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'linear-gradient(90deg, rgba(160,150,223,1) 13%, rgba(19,96,186,1) 73%)',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        textAlign: 'center'
    },
    imgLogo: {
        height: '45px',
        width: '45px',
    },
}));

export const Header = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.root} position="sticky">
            <Toolbar>
                <MyMenu />
                <Typography variant="h6" className={classes.title}>
                    Explore North Macedonia <img src={logo} alt='Point finger' className={classes.imgLogo} />
                </Typography>
            </Toolbar>
        </AppBar>
    )
}