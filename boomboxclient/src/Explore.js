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
            allInfo: [],
        }
    }
    // componentWillMount (){
    //     localStorage.clear();
    // }

    componentDidMount(){


        // const itemsRef = base.database().ref("users");
        // // itemsRef.once("value").then(function(snapshot) {
        // itemsRef.once('value', (snapshot) => {
        //     let newState = [];
        //     // const privacy = snapshot.child("privacy").val();
        //     const playlistName = snapshot.child("playlistName").val();
        //     const keyword = snapshot.child("keyword").val();
        //     const danceLevel = snapshot.child("danceLevel").val();
        //     const energyLevel = snapshot.child("energyLevel").val();
        //     const valenceLevel = snapshot.child("valenceLevel").val();
        //     const tempoLevel = snapshot.child("tempoLevel").val();
        //     newState.push(playlistName, keyword,danceLevel,energyLevel,valenceLevel,tempoLevel)
                
        //     this.setState({
        //         allItems: newState
        //     });
        // })
        const itemsRef = base.database().ref("users");
        itemsRef.once('value', snapshot => {
            snapshot.forEach(data => {
                let temp = []
                data.forEach(result => {
                    // this.setState({info: result.val()})
                    // temp.push(<p>{result.val()}</p>)
                    temp.push(result.val())

                })
                this.state.allInfo.push(temp)
            })
        })
        this.setState({
            allInfo: this.state.allInfo
        })
        //console.log(this.state.allInfo)
        console.log(this.state.allInfo)
        // return this.state.allInfo
    }
    
    render(){
    
        console.log(this.state.allInfo[0])

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
                    </div> */}

            </div>
        )
    }
}

export default Explore