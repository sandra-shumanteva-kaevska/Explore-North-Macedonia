import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Alert from '@material-ui/lab/Alert'

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'center'
    },
    alert: {
        alignSelf: 'center'
    }

}))

export const Error = ({ children }) => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <Alert className={classes.alert} variant="filled" severity="error">
                {children}
            </Alert>
        </div>
    )
}