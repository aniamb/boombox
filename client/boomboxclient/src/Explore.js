import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

import Home from "./Home"

class Explore extends Component {
    render(){
        return(
            <div className="Explore">
                BoomBox Explore Page
                <ul className = "navLinks">
                    <li><NavLink to="/explore">explore playlists</NavLink></li>
                    <li><NavLink to="/home">home page</NavLink></li>
                </ul>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/explore" component={Explore}/>
                </Switch>






            </div>
        )
    }
}

export default Explore