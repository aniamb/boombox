import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

import Dance from "./Dance"
// import Explore from "./Explore"

class Home extends Component {
    render(){
        return(
            <div className="Home">
                BoomBox Home test 124 Page
                    <li><NavLink to="/dance">move to dance</NavLink></li>
                <Switch>
                    <Route path="/dance" component={Dance}/>
                </Switch>
            </div>
        )
    }
}

export default Home
