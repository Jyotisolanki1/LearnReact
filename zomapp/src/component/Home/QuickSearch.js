import React, { Component } from "react";
import QuickDisplay from "./QuickDisplay";

const url = "https://zomatoapi.onrender.com/quicksearch"
class QuickSearch extends Component{
    constructor(){
        super()
        this.state={
            mealType:''
        }
    }
    render(){
    return(
        <div id="quickSearch">
            <span id="quickHeading">Quick search</span>
            <span id="quickSubHeading">Find Restaurant by Meal Type</span>
            <QuickDisplay mealData={this.state.mealType}/>
       </div>
    )
    }
    //api call on page load
    componentDidMount(){
        fetch(url,{method : 'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({mealType:data})
        })
    }
}
export default QuickSearch;