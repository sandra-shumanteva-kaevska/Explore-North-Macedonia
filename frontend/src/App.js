import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

import { Categories } from './pages/Categories'
import { OffersList } from './pages/OffersList'
import { OfferInfo } from './pages/OfferInfo'
import { Order } from './pages/Order'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { myTheme } from './theme/myTheme'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    height: `100vh`,
    backgroundColor: 'purple'
  },

}));

export const App = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={myTheme}>
      <Box className={classes.root}>
        <Header />
        <BrowserRouter>
          <Switch>

            <Route path="/" exact>
              <Categories />
            </Route>

            <Route path="/offers" exact>
              <OffersList />
            </Route>

            <Route path="/offers/:id" exact>
              <OfferInfo />
            </Route>

            <Route path="/orders" exact>
              <Order />
            </Route>

          </Switch>
        </BrowserRouter>

        <Footer />
      </Box>
    </ThemeProvider>
  )
}
