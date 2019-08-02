import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Main from './components/Main'
import Edit from './components/Edit'
export default function Routes(){

return(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Main} />
            <Route path='/edit/:id'  component={Edit} />
        </Switch>
    </BrowserRouter>


)

}