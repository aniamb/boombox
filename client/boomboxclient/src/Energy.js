import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

import Home from "./Home"
import Explore from "./Explore"
import Valence from "./Valence"

class Energy extends Component {
    render(){
        return(
            <div className="Energy">
                BoomBox Energy Page
                <ul className = "navLinks">
                    <li><NavLink to="/valence">move to valence</NavLink></li>
                    <li><NavLink to="/explore">explore playlists</NavLink></li>
                    <li><NavLink to="/home">home page</NavLink></li>
                </ul>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/valence" component={Valence}/>
                    <Route path="/explore" component={Explore}/>
                </Switch>






            </div>
        )
    }
}

export default Energy