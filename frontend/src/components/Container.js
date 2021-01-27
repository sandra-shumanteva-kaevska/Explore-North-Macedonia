import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function SimpleContainer({ children }) {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container >
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} >
                    {children}
                </Typography>
            </Container>
        </React.Fragment>
    );
}