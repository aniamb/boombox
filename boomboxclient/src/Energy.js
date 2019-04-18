import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import { Redirect } from 'react-router'

import Valence from "./Valence"

class Energy extends Component {
    constructor(props){
        super(props);
        this.state = {
            energyLevel: 0,
            isSubmitted: false,
        }
    }
    handleChange = (ev)  => {
        this.setState({energyLevel: ev.target.value})
    }
    handleSubmit = (ev) => {
       ev.preventDefault()
       console.log(`Submitted Energy Level: ${this.state.energyLevel}`)
       this.setState({isSubmitted: true})
      // this.props.history.push(`/dance`)
    }
    render(){
        console.log(`DanceLevel from "Dance": ${this.props.location.danceLevel}`)
        return(
            <div className="Energy">
                <h3>Type in a number from 1 to 10 depending 
                    on how energetic you want the songs
                </h3>
                <form onSubmit={this.handleSubmit}>
                        <div>
                            <input 
                                type = "text"
                                value={this.state.energyLevel}
                                onChange={this.handleChange.bind(this)}
                            />
                        </div>
                    <div>
                        <button type="submit">Next </button>
                    </div>
                   </form>
                    {/* <li><NavLink to="/valence">move to valence</NavLink></li>
                    <Route path="/valence" component={Valence}/> */}
                    {this.state.isSubmitted && <Redirect to={{
                    pathname: '/valence',
                    energyLevel: this.state.energyLevel,
                }}/>}
            </div>
        )
    }
}

export default Energy