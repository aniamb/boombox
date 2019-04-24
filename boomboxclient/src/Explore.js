import React, { Component } from 'react'
// import { Route, Switch, NavLink } from 'react-router-dom'

// import Home from "./Home"
import base from "./base"
import { format } from 'url';

class Explore extends Component {
    constructor(props){
        super(props);
        this.state = {
            dance: '',
            energy: '',
            keyword: '',
            playlist:'',
            valence:'',
            info: [],
            allInfo: [],
        }
    }
    // componentWillMount (){
    //     localStorage.clear();
    // }

    componentDidMount(){
        let allTemp = [];
        const itemsRef = base.database().ref("users");
        itemsRef.once('value', snapshot => {
            snapshot.forEach(data => {
                let temp = []
                data.forEach(result => {
                    // this.setState({info: result.val()})
                    // temp.push(<p>{result.val()}</p>)
                    temp.push(result.val())

                })
                allTemp.push(temp)
            })
            this.setState({
                allInfo: allTemp
            })
           console.log(this.state.allInfo)
        })
    }   
    format(array){
        let head = array.shift();
        let temp = []
        temp.push(<div className = "card-header">{head}</div>)
        array.map(item =>
            temp.push(
                <ul className = "list-group list-group-flush">
                 <li className="list-group-item">{item}</li>
                </ul>
            )
        )
       return temp

    }

    render(){
       const cardStyle = {
           width: "18rem"
       }

        return(
            <div className="Explore">
                BoomBox Explore Page 

                     {this.state.allInfo.map(data => 
                            //  <div>{this.format(data)}
                            //  <p>TEST</p>
                            //  </div>
                            // <div className = "card" style={cardStyle}>
                            //      <div className = "card-body">
                            //         <div className = "card-text">{this.format(data)}</div>
                            //     </div>
                            // </div>
                            <div className = "card" style={cardStyle}>
                                    {/* <div className = "card-text">{this.format(data)}</div> */}
                                    {this.format(data)}
                           </div>
                    //    </div>
                            
                        
                        
                        )}
 



            </div>
        )
    }
}

export default Explore