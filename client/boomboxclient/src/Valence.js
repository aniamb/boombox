import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

import Home from "./Home"
import Explore from "./Explore"
import Tempo from "./Tempo"

class Valence extends Component {
    render(){
        return(
            <div className="Valence">
                BoomBox Valence Page
                <ul className = "navLinks">
                    <li><NavLink to="/tempo">move to tempo</NavLink></li>
                    <li><NavLink to="/explore">explore playlists</NavLink></li>
                    <li><NavLink to="/home">home page</NavLink></li>
                </ul>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/tempo" component={Tempo}/>
                    <Route path="/explore" component={Explore}/>
                </Switch>






            </div>
        )
    }
}

export default Valence