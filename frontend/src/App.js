import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import { Categories } from "./pages/Categories"
import { OffersList } from "./pages/OffersList"
import { OfferInfo } from "./pages/OfferInfo"
import { Order } from "./pages/Order"
import { Header } from './components/Header'
import { Footer } from './components/Footer'

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Chilanka',
      'cursive',
    ].join(','),
  },
});

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header>

      </Header>

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

      <Footer></Footer>
    </ThemeProvider>
  )
}
