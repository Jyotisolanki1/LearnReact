import React,{Component} from "react";
import './Search.css';

const lurl = "https://zomatoajulypi.herokuapp.com/location"

class Search extends Component{
    constructor(){
        super()

        this.state={
            location:''
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
    render(){
    return(
        <div id="search">
            <div id="logo">
                <span>D!</span>
            </div>
            <div id="heading">First Best Place Near You</div>
            <div className="dropdown">
                <select>
                    <option>--SELECT YOUR CITY</option>
                    {this.renderCity(this.state.location)}
                </select>
                <select id="restDrop">
                    <option>--SELECT YOUR RESTAURANTS</option>
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

export default Search;