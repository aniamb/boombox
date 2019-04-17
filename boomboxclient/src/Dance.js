import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

import Energy from "./Energy"
// import Explore from "./Explore"

class Dance extends Component {
    render(){
        return(
            <div className="Dance">
                BoomBox Dance Page
                    <li><NavLink to="/energy">move to energy</NavLink></li>
                <Switch>
                    <Route path="/energy" component={Energy}/>
                </Switch>
            </div>
        )
    }
}

export default Dance