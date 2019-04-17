import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

//import Dance from "./Dance"
// import Explore from "./Explore"
import Keyword from './Keyword'

class Home extends Component {
    render(){
        return(
            <div className="Home">
                BoomBox Home Page
                    <li><NavLink to="/keyword">move to Keyword</NavLink></li>
                <Switch>
                    <Route path="/keyword" component={Keyword}/>
                </Switch>
            </div>
        )
    }
}

export default Home
