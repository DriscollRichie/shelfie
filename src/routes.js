import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ShelfList from './Components/ShelfList/ShelfList'
import BinList from './Components/BinList/BinList'

export default (
  <Switch>
    <Route exact path='/' component={ShelfList}/>
    <Route path='/:shelf' component={BinList}/>
  </Switch>
)
