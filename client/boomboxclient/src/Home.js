import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

import Dance from "./Dance"
import Explore from "./Explore"

class Home extends Component {
    render(){
        return(
            <div className="Home">
                BoomBox Home Page
                <ul className = "navLinks">
                    <li><NavLink to="/dance">move to dance</NavLink></li>
                    <li><NavLink to="/explore">explore playlists</NavLink></li>
                    <li><NavLink to="/home">home page</NavLink></li>
                </ul>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/dance" component={Dance}/>
                    <Route path="/explore" component={Explore}/>
                </Switch>






            </div>
        )
    }
}

export default Home