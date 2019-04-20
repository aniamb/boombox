import React, { Component } from 'react'
// import { Route, Switch, NavLink } from 'react-router-dom'
import { Redirect } from 'react-router'
import  Slider  from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'


// import Valence from "./Valence"

class Energy extends Component {
    constructor(props){
        super(props);
        this.state = {
            energyLevel: 0,
            isSubmitted: false,
        }
    }
    handleChange = (value)  => {
        this.setState({energyLevel: value})
    }
    handleSubmit = (ev) => {
       ev.preventDefault()
       //console.log(`Submitted Energy Level: ${this.state.energyLevel}`)
       this.setState({isSubmitted: true})
       localStorage.setItem("energyData", this.state.energyLevel/10)
      // this.props.history.push(`/dance`)
    }
    render(){
       // console.log(`DanceLevel from "Dance": ${this.props.location.danceLevel}`)
       const energyLabels = {
        0: 'Kickback Vibes',
        10: 'BANGER Vibes!'
    } 
    const sliderStyle = {
        width: '50%',
        margin: 'auto',
    }
       
       return(
            <div className="Energy">
                <h3>Type in a number from 1 to 10 depending 
                    on how energetic you want the songs
                </h3>
                {/* <form onSubmit={this.handleSubmit}>
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
                   </form> */}
                    <div className="slider orientation-reversed custome-labels">
                        <div className = "slider-group" style={sliderStyle}>
                            <div className = "slider-horizontal">
                                <Slider
                                    min = {0}
                                    max = {10}
                                    value = {this.state.energyLevel}
                                    labels = {energyLabels}
                                    orientation = 'horizontal'
                                    onChange = {this.handleChange}
                                />
                            <div className = 'value'>{this.state.energyLevel}</div>
                        </div>
                     </div>
                </div>
                <form  onSubmit= {this.handleSubmit} >
                <button type="submit">Next </button>
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