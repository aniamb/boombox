import React, { Component } from 'react'
// import { Route, Switch, NavLink } from 'react-router-dom'

// import Home from "./Home"
import base from "./base"

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
            allInfo: this.props.items,
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
        })
         this.setState({
             allInfo: allTemp
         }, function(){
            localStorage.setItem("exploreInfo", JSON.stringify(this.state.allInfo));
         })
        console.log(this.state.allInfo)
    }
    
    render(){
        console.log( `test: ${this.state.allInfo}`)

        const { info } = this.state;
        return(
            <div className="Explore">
                BoomBox Explore Page 
                    {/* {info.map(info => (
                        <li> {info} </li>
                    ))} */}

               {/* <table>{this.printLists()}</table> */}
           {/* <ul>    */}
           {/* {this.state.allInfo.map(item =>(
                        <p>{item}</p>
            ))}  
                    </ul> */}

                     {/* <div>
                        this.state.allInfo.map((rowdata, i) =>
                          
                            {
                                this.rowdata.map((subRowData,k) =>
                                    <li>{subRowData}</li>
                                )
                            }
                    
                        )
                    </div>  */}

            </div>
        )
    }
}

export default Explore