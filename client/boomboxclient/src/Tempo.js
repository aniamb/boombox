import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

import Home from "./Home"
import Explore from "./Explore"
import Playlist from "./Playlist"

class Tempo extends Component {
    render(){
        return(
            <div className="Tempo">
                BoomBox Tempo Page
                <ul className = "navLinks">
                    <li><NavLink to="/playlist">move to playlist</NavLink></li>
                    <li><NavLink to="/explore">explore playlists</NavLink></li>
                    <li><NavLink to="/home">home page</NavLink></li>
                </ul>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/playlist" component={Playlist}/>
                    <Route path="/explore" component={Explore}/>
                </Switch>






            </div>
        )
    }
}

export default Tempo