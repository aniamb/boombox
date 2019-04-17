import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

import Save from "./Save"

class Tempo extends Component {
    render(){
        return(
            <div className="Tempo">
                BoomBox Tempo Page
                    <li><NavLink to="/save">move to save</NavLink></li>
                <Switch>
                    <Route path="/save" component={Save}/>
                </Switch>
            </div>
        )
    }
}

export default Tempo