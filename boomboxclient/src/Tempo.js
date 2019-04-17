import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

import Playlist from "./Playlist"

class Tempo extends Component {
    render(){
        return(
            <div className="Tempo">
                BoomBox Tempo Page
                    <li><NavLink to="/playlist">move to playlist</NavLink></li>
                <Switch>
                    <Route path="/playlist" component={Playlist}/>
                </Switch>
            </div>
        )
    }
}

export default Tempo