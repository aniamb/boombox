import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import { Redirect } from 'react-router'

import Save from "./Save"

class Tempo extends Component {
    constructor(props){
        super(props);
        this.state = {
            tempo: 0,
            isSubmitted: false,
        }
    }
    handleChange = (ev)  => {
        this.setState({tempo: ev.target.value})
    }
    handleSubmit = (ev) => {
       ev.preventDefault()
       console.log(`Submitted Temp: ${this.state.tempo}`)
       this.setState({isSubmitted: true})
       localStorage.setItem("tempoData", this.state.tempo)

      // this.props.history.push(`/dance`)
    }
    render(){
        console.log(`ValenceLevel from "Valence": ${this.props.location.valenceLevel}`)
        return(
            <div className="Tempo">
            <h3>Type in a number from 1 to 10 depending 
                   on how fast you want the songs
            </h3>  
            <form onSubmit={this.handleSubmit}>
                        <div>
                            <input 
                                type = "text"
                                value={this.state.tempo}
                                onChange={this.handleChange.bind(this)}
                            />
                        </div>
                    <div>
                        <button type="submit">Next </button>
                    </div>
                   </form>                  
                {/* <li><NavLink to="/save">move to save</NavLink></li>
                    <Route path="/save" component={Save}/> */}
                {this.state.isSubmitted && <Redirect to={{
                    pathname: '/save',
                    tempo: this.state.tempo,
                }}/>}
            </div>
        )
    }
}

export default Tempo