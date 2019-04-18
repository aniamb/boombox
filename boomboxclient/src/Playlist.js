import React, { Component } from 'react'
//import { Route, Switch, NavLink } from 'react-router-dom'

//import Valence from "./Valence"

class Playlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: this.props.keyword,
            isSubmitted: false,
        }
    }
    render(){
        console.log(`printed from playlsit: ${this.state.key}`)
        return(
            <div className="Playlist">
                BoomBox Playlist Page
                    {/* <li><NavLink to="/valence">move to valence</NavLink></li>
                <Switch>
                    <Route path="/valence" component={Valence}/>
                </Switch> */}
            </div>
        )
    }
}

export default Playlist