import React, { Component } from 'react'
// import { Route, Switch, NavLink } from 'react-router-dom'
import { Redirect } from 'react-router'
import  Slider  from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import './Valence.css'
// import Tempo from "./Tempo"

class Valence extends Component {
    constructor(props){
        super(props);
        this.state = {
            valenceLevel: 0,
            isSubmitted: false,
        }
    }
    handleChange = (value)  => {
        this.setState({valenceLevel: value})
    }
    handleSubmit = (ev) => {
       ev.preventDefault()
   //console.log(`Submitted Valence Level: ${this.state.valenceLevel}`)
       this.setState({isSubmitted: true})
       localStorage.setItem("valenceData", this.state.valenceLevel/10)
      // this.props.history.push(`/dance`)
    }
    render(){
       // console.log(`EnergyLevel from "Energy": ${this.props.location.energyLevel}`)
       const valenceLabels = {
        0: 'sadboi hours',
        10: 'happyboi hours'
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
            <div className="Valence">
            <div className="outer">
                <h3>How <b>"positive"</b> do you want the songs
                </h3>
                {/* <form onSubmit={this.handleSubmit}>
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
                   </form> */}
                <div className="slider orientation-reversed custom-labels">
                    <div className = "slider-group" style = {sliderStyle}>
                        <div className = "slider-horizontal">
                            <Slider
                                min = {0}
                                max = {10}
                                value = {this.state.valenceLevel}
                                labels = {valenceLabels}
                                orientation = 'horizontal'
                                onChange = {this.handleChange}
                            />
                            <div className = 'value'>{this.state.valenceLevel}</div>
                        </div>
                     </div>
                </div>
                <form  onSubmit= {this.handleSubmit} >
                <button type="submit"  style={btn}><i className="fas fa-forward"></i></button>            
                    </form>     
                    
            
                    {/* <li><NavLink to="/tempo">move to tempo</NavLink></li>
                    <Route path="/tempo" component={Tempo}/> */}
                    {this.state.isSubmitted && <Redirect to={{
                    pathname: '/tempo',
                    valenceLevel: this.state.valenceLevel,
                }}/>}
                </div>
            </div>
        )
    }
}

export default Valence