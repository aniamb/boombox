import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

import Tempo from "./Tempo"

class Valence extends Component {
    render(){
        return(
            <div className="Valence">
                BoomBox Valence Page
                    <li><NavLink to="/tempo">move to tempo</NavLink></li>
                <Switch>
                    <Route path="/tempo" component={Tempo}/>
                </Switch>
            </div>
        )
    }
}

export default Valence