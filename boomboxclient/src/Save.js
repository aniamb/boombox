import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

import Playlist from "./Playlist"
// import Explore from "./Explore"

class Save extends Component {
    render(){
        return(
            <div className="Save">
                BoomBox Save Page
                    <li><NavLink to="/playlist">move to playlist</NavLink></li>
                <Switch>
                    <Route path="/playlist" component={Playlist}/>
                </Switch>
            </div>
        )
    }
}

export default Save