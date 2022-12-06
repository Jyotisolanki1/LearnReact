import React,{Component} from "react";
import './Search.css';
import { withRouter } from "react-router-dom";

const lurl = "https://zomatoapi.onrender.com/location";
const restUrl = "https://zomatoapi.onrender.com/restaurant?stateId=";

class Search extends Component{
    constructor(){
        super()

        this.state={
            location:'',
            restData:''
        }
    }
    renderCity = (data) =>{
       if(data){
        return data.map((item) =>{
            return(
                <option value={item.state_id} key={item._id}>{item.state}</option>
            )
        })
       }
    }
    renderRest = (data) =>{
        if(data){
            return data.map((item)=>{
                return( 
                <option value={item.restaurant_id} key={item.restaurant_id}>{item.restaurant_name}|{item.address}</option>
                )
            })
        }
    }
    handleRest = (event) =>{
    this.props.history.push(`/details?restId=${event.target.value}`)
    }
    handleCity = (event) =>{
        let stateId = event.target.value
        fetch(`${restUrl}${stateId}`,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
          this.setState({restData:data})
        })
    }
    render(){
    return(
        <div id="search">
            <div id="logo">
                <span>D!</span>
            </div>
            <div id="heading">First Best Place Near You</div>
            <div className="dropdown">
                <select onChange={this.handleCity}>
                    <option>--SELECT YOUR CITY</option>
                    {this.renderCity(this.state.location)}
                </select>
                <select id="restDrop" onChange={this.handleRest}>
                    <option>--SELECT YOUR RESTAURANTS</option>
                    {this.renderRest(this.state.restData)}
                </select>
            </div>
        </div>
    )
}
// api calling on page load 
componentDidMount(){
    fetch(lurl,{method: 'GET'})
    //return promise
    .then((res)=>res.json())
    //resolve promise
    .then((data)=>{
        this.setState({location:data});
    })
    .catch((err)=>{
        console.log(err);
    })
}
}

export default withRouter(Search);