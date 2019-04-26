import React, { Component } from 'react'
import { Route, NavLink, Redirect } from 'react-router-dom'

//import Dance from "./Dance"
// import Explore from "./Explore"
import Keyword from './Keyword'
import './Home.css'

class Home extends Component {

   componentWillMount(){
       localStorage.clear()
   } 

    render(){
    //    const btn = {
    //        marginTop: '100px',
    //        fontSize: '35px',
    //        color: 'rgb(30, 182, 65)'
    //    }
        return(
            <div className="Home">
                <div className = "outer">
                 <h2>Ready to design a playlist?</h2>
                   
                    
{/*                    
                   <NavLink to="/keyword"><img 
                   src={require('/Users/netrapradhan/Documents/GitHub/boombox/boomboxclient/src/imgs/boombox.png')}
                   alt = 'boombox'
                   ></img></NavLink> */}
                   {/* <img 
                    className = "boom"
                   src={require('/Users/netrapradhan/Documents/GitHub/boombox/boomboxclient/src/imgs/boombox.png')}
                   alt = 'boombox'
                   ></img> */}

                    {/* <button className="btn"> <NavLink to="/keyword"><i className="fas fa-forward"></i></NavLink></button> */}

                    {/* <Route path="/keyword" component={Keyword}/> */}
                    </div>
            </div>
        )
    }
}

export default Home
