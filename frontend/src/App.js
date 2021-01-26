import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import { Categories } from "./pages/Categories"
import { OffersList } from "./pages/OffersList"
import { OfferInfo } from "./pages/OfferInfo"
import { Order } from "./pages/Order"

export const App = () => {
  return (
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

        <Route path="/orders" exact >
          <Order />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}
