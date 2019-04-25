import React, { Component } from 'react'
// import { Route, Switch, NavLink } from 'react-router-dom'
import { Redirect } from 'react-router'
import  Slider  from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import './Energy.css'

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
        width: '70%',
        marginTop:'45px',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
     const btn = {
        marginTop: '60px',
        fontSize: '35px',
        color: 'rgb(30, 182, 65)',
        border: 'none',
        backgroundColor: '#F2F2F2'
    }
       
       return(
            <div className="Energy">
            <div className="outer">
                <h3>How <b>energetic</b> do you want the songs?
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
                <button type="submit"  style={btn}><i className="fas fa-forward"></i></button>             
                   </form>

                    {/* <li><NavLink to="/valence">move to valence</NavLink></li>
                    <Route path="/valence" component={Valence}/> */}
                    {this.state.isSubmitted && <Redirect to={{
                    pathname: '/valence',
                    energyLevel: this.state.energyLevel,
                }}/>}
                </div>
            </div>
        )
    }
}

export default Energy