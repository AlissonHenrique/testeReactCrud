import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import List from './components/List'
import Edit from './components/Edit'
export default function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/list' exact component={List} />
                <Route path='/edit/:id' component={Edit} />
                <Route path='/edit' component={Edit} />
            </Switch>
        </BrowserRouter>


    )

}