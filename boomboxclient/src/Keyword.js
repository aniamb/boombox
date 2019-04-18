import React, { Component } from 'react'
import { Redirect } from 'react-router'

import Dance from "./Dance"
import Playlist from "./Playlist"
// import Explore from "./Explore"

class Keyword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            isSubmitted: false,
        }
    }
    handleChange = (ev)  => {
        this.setState({keyword: ev.target.value})
    }
    handleSubmit = (ev) => {
       ev.preventDefault()
       console.log(`from home with keyword ${this.state.keyword}`)
       this.setState({isSubmitted: true})
      // this.props.history.push(`/dance`)
    }
    render(){
        return(
            <div className="Keyword">
                <h3>Type in a Keyword to Search</h3>
                <form onSubmit={this.handleSubmit}>
                        <div>
                            <input 
                                type = "text"
                                value={this.state.keyword}
                                onChange={this.handleChange.bind(this)}
                            />
                        </div>
                    <div>
                        <button type="submit">Next </button>
                    </div>
                   </form>
                {/* {this.state.isSubmitted && <Dance keyword={this.state.keyword}/>}  */}
               {/* <Dance keyword={this.state.keyword}/>  */}
               {/* {this.state.isSubmitted && <Playlist keyword={this.state.keyword}/>} */}
                {/* {this.state.isSubmitted && <Redirect to='/dance'/>} */}
                {this.state.isSubmitted && <Redirect to={{
                    pathname: '/dance',
                    keyword: this.state.keyword,
                }}/>}
                {/* <Playlist keyword = {this.state.keyword}/> */}
               {this.state.isSubmitted && <Playlist keyword={this.state.keyword}/>} 
            </div>
        )
    }
}

export default Keyword