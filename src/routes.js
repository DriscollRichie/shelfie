import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ShelfList from './Components/ShelfList/ShelfList'
import BinList from './Components/BinList/BinList'
import BinDetails from './Components/BinDetails/BinDetails'

export default (
  <Switch>
    <Route exact path='/' component={ShelfList}/>
    <Route exact path='/:shelf' component={BinList}/>
    <Route path='/:shelf/:bin' component={BinDetails}/>
  </Switch>
)
