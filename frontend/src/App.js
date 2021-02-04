import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import { render } from 'react-dom'

import { Categories } from './pages/Categories'
import { OffersList } from './pages/OffersList'
import { OfferInfo } from './pages/OfferInfo'
import { Order } from './pages/Order'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { myTheme } from './theme/myTheme'
import { makeStyles } from '@material-ui/core/styles'
import background from './assets/background.jpg'
import { ButtonBack } from 'components/ButtonBack'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: `100vh`,
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

export const App = () => {
  const classes = useStyles()

  const postOrder = () => {

  }

  return (
    <ThemeProvider theme={myTheme}>
      <Box className={classes.root}>
        <Header />

        <Router>
          <Switch>
            <Route path="/" exact>
              <Categories />
            </Route>

            <Route path="/offers" exact>
              <OffersList />
              <ButtonBack />
            </Route>

            <Route path="/offers/:id" exact>
              <OfferInfo />
              <ButtonBack />
            </Route>

            <Route path="/offers/:id/order" exact>
              <Order onFormSubmited={postOrder} />
              <ButtonBack />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </Box>
    </ThemeProvider >
  )
}
render(<App />, document.getElementById("root"))