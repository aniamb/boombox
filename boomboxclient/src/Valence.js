import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import { Redirect } from 'react-router'

import Tempo from "./Tempo"

class Valence extends Component {
    constructor(props){
        super(props);
        this.state = {
            valenceLevel: 0,
            isSubmitted: false,
        }
    }
    handleChange = (ev)  => {
        this.setState({valenceLevel: ev.target.value})
    }
    handleSubmit = (ev) => {
       ev.preventDefault()
       console.log(`Submitted Valence Level: ${this.state.valenceLevel}`)
       this.setState({isSubmitted: true})
      // this.props.history.push(`/dance`)
    }
    render(){
        console.log(`EnergyLevel from "Energy": ${this.props.location.energyLevel}`)
        return(
            <div className="Valence">
                <h3>Type in a number from 1 to 10 depending 
                    on how "positive" you want the songs
                </h3>
                <form onSubmit={this.handleSubmit}>
                        <div>
                            <input 
                                type = "text"
                                value={this.state.valenceLevel}
                                onChange={this.handleChange.bind(this)}
                            />
                        </div>
                    <div>
                        <button type="submit">Next </button>
                    </div>
                   </form>
                    {/* <li><NavLink to="/tempo">move to tempo</NavLink></li>
                    <Route path="/tempo" component={Tempo}/> */}
                    {this.state.isSubmitted && <Redirect to={{
                    pathname: '/tempo',
                    valenceLevel: this.state.valenceLevel,
                }}/>}
            </div>
        )
    }
}

export default Valence