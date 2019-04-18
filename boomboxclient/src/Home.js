import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'

//import Dance from "./Dance"
// import Explore from "./Explore"
import Keyword from './Keyword'

class Home extends Component {

    
    render(){
        return(
            <div className="Home">
                <h2>To Begin, Login to Spotify</h2>
                   
                    
                    <li><NavLink to="/keyword">move to Keyword</NavLink></li>
                    <Route path="/keyword" component={Keyword}/>
            </div>
        )
    }
}

export default Home
