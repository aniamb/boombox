import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

import Energy from "./Energy"
// import Explore from "./Explore"

class Dance extends Component {
    constructor(props){
        super(props);
        this.state = {
            danceLevel: 0,
            testKey : '',
        }
    }
    render(){
        // console.log(`${this.props.location.keyword}`)
        console.log(`${this.props.location.keyword}`)
        return(
            <div className="Dance">
                BoomBox Dance Page
                    <li><NavLink to="/energy">move to energy</NavLink></li>
                <Switch>
                    <Route path="/energy" component={Energy}/>
                </Switch>
            </div>
        )
    }
}

export default Dance