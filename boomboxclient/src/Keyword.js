import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

import Dance from "./Dance"
// import Explore from "./Explore"

class Keyword extends Component {
    render(){
        return(
            <div className="Keyword">
                BoomBox Keyword Page
                    <li><NavLink to="/dance">move to dance</NavLink></li>
                <Switch>
                    <Route path="/dance" component={Dance}/>
                </Switch>
            </div>
        )
    }
}

export default Keyword