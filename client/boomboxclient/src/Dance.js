import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

import Home from "./Home"
import Explore from "./Explore"
import Energy from "./Energy"

class Dance extends Component {
    render(){
        return(
            <div className="Dance">
                BoomBox Dance Page
                <ul className = "navLinks">
                    <li><NavLink to="/energy">move to energy</NavLink></li>
                    <li><NavLink to="/explore">explore playlists</NavLink></li>
                    <li><NavLink to="/home">home page</NavLink></li>
                </ul>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/energy" component={Energy}/>
                    <Route path="/explore" component={Explore}/>
                </Switch>






            </div>
        )
    }
}

export default Dance