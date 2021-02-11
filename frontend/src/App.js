import React, { useState } from 'react'
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
import { OrderInfo } from './pages/OdrerInfo'
import Loader from 'react-loader-spinner'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: `100vh`,
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  container: {
    display: "flex",
    flexGrow: '1',
    flexDirection: "column",
    padding: '10px',
    justifyContent: 'center'
  }
}))

export const App = () => {
  const classes = useStyles()
  const [loader, setLoader] = useState(false)

  return (
    <ThemeProvider theme={myTheme}>
      <Router>
        <Box className={classes.root}>
          <Header />

          {loader && <Loader
            type="Hearts"
            color="red"
            height={400}
            width={400}
            className="loader" />}

          <Box className={classes.container} >

            <Switch>
              <Route path="/" exact>
                <Categories />
              </Route>

              <Route path="/offers" exact>
                <OffersList showLoader={setLoader} />
                <ButtonBack />
              </Route>

              <Route path="/offers/:id" exact>
                <OfferInfo showLoader={setLoader} />
                <ButtonBack />
              </Route>

              <Route path="/offers/:id/order" exact>
                <Order showLoader={setLoader} />
                <ButtonBack />
              </Route>

              <Route path="/order/:id" exact>
                <OrderInfo showLoader={setLoader} />
              </Route>

            </Switch>
          </Box>

          <Footer />
        </Box >
      </Router>
    </ThemeProvider >
  )
}
render(<App />, document.getElementById("root"))