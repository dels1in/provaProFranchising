import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/Login'
import ProductList from './pages/ProductList'


export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/productList" component={ProductList} />
      </Switch>
    </BrowserRouter>
  )
}
