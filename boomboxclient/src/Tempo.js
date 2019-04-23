import React, { Component } from 'react'
// import { Route, Switch, NavLink } from 'react-router-dom'
import { Redirect } from 'react-router'
import  Slider  from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

// import Save from "./Save"

class Tempo extends Component {
    constructor(props){
        super(props);
        this.state = {
            tempo: 0,
            isSubmitted: false,
        }
    }
    handleChange = (value)  => {
        this.setState({tempo: value})
    }
    handleSubmit = (ev) => {
       ev.preventDefault()
      // console.log(`Submitted Temp: ${this.state.tempo}`)
       this.setState({isSubmitted: true})
       localStorage.setItem("tempoData", this.state.tempo)

      // this.props.history.push(`/dance`)
    }
    render(){
        //******* TEMPO NOT MEASURED IN SINGLE NUMBER MEASURED IN BPM **************/
       // console.log(`ValenceLevel from "Valence": ${this.props.location.valenceLevel}`)
       const tempoLabels = {
        0: 'sloooooowww it down',
        10: 'Can\'t keep up',
        } 
        const sliderStyle = {
        width: '50%',
        margin: 'auto',
        } 
       return(
            <div className="Tempo">
            <h3>Type in a number from 1 to 10 depending 
                   on how fast you want the songs
            </h3>  
            {/* <form onSubmit={this.handleSubmit}>
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
                   </form>                   */}
            <div className="slider orientation-reversed custom-labels">
                    <div className = "slider-group" style = {sliderStyle}>
                        <div className = "slider-horizontal">
                            <Slider
                                min = {0}
                                max = {10}
                                value = {this.state.tempo}
                                labels = {tempoLabels}
                                orientation = 'horizontal'
                                onChange = {this.handleChange}
                            />
                            <div className = 'value'>{this.state.tempo}</div>
                        </div>
                     </div>
             </div>
                <form  onSubmit= {this.handleSubmit} >
                <button type="submit"><a href="http://localhost:8888">Next</a></button>
                </form>

            
                {/* <li><NavLink to="/save">move to save</NavLink></li>
                    <Route path="/save" component={Save}/> */}
                {/* {this.state.isSubmitted && <Redirect to={{
                    pathname: '/save',
                    tempo: this.state.tempo,
                }}/>} */}
            </div>
        )
    }
}

export default Tempo