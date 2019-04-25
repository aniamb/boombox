import React, { Component } from 'react'
// import { Route, Switch, NavLink } from 'react-router-dom'
import { Redirect } from 'react-router'
import  Slider  from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import './Tempo.css'
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
        // this.setState({tempo: value})
        this.setState({
            tempo: value }, function() {
             localStorage.setItem("tempoData", this.state.tempo);
            
            }.bind(this));


        
    }
    handleSubmit = (ev) => {
       ev.preventDefault()
      // console.log(`Submitted Temp: ${this.state.tempo}`)
       this.setState({isSubmitted: true})
    //    localStorage.setItem("tempoData", this.state.tempo)
      
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
            width: '70%',
            marginTop:'45px',
            marginLeft: 'auto',
            marginRight: 'auto'
        }
         const btn = {
            marginTop: '60px',
            fontSize: '35px',
            color: 'rgb(30, 182, 65)'
           
        }
        const regbtn = {
            border: 'none',
            backgroundColor: '#F2F2F2'
        }
       return(
            <div className="Tempo">
            <div className="outer">
            <h3>How <b>fast</b> do you want the songs?
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
                {/* <button type="submit"  style={btn}><a href="http://localhost:8888" style={iconhref}><i className="fas fa-forward" /></a></button>              */}
                <button type="submit"  style={regbtn}><a href="http://localhost:8888" className="fas fa-forward" style={btn}></a></button>
                </form>

            
                {/* <li><NavLink to="/save">move to save</NavLink></li>
                    <Route path="/save" component={Save}/> */}
                {/* {this.state.isSubmitted && <Redirect to={{
                    pathname: '/save',
                    tempo: this.state.tempo,
                }}/>} */}
                </div>
            </div>
        )
    }
}

export default Tempo