import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'

//import Dance from "./Dance"
// import Explore from "./Explore"
import Keyword from './Keyword'

class Home extends Component {

   componentWillMount(){
       localStorage.clear()
   } 
    render(){
        return(
            <div className="Home">
                <h2>Ready to design a playlist?</h2>
                   
                    
                    <li><NavLink to="/keyword">Let's Begin</NavLink></li>
                    <Route path="/keyword" component={Keyword}/>
            </div>
        )
    }
}

export default Home
