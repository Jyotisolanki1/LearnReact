import axios from 'axios';
import React, { Component } from 'react';


const url = "https://zomatoapi.onrender.com/filter";

class CuisineFilter extends Component{
    cuisineFilter = (event)=>{
     let mealId = this.props.mealId;
     let cuisineId=event.target.value;
     let cuisineUrl = "";
     if(cuisineId ===  ""){
        cuisineUrl = `${url}/${mealId}`
     }
     else{
        cuisineUrl = `${url}/${mealId}?cuisine=${cuisineId}`
     }
     axios.get(cuisineUrl)
     .then((res)=>{
     this.props.restPerCuisine(res.data)
     })
    }
render(){
  return(
   <>
      <center><h3>CuisineFilter</h3></center>
      <div style={{marginLeft:'15%'}} onChange={this.cuisineFilter}>
        <label className='radio'>
            <input type="radio" value="" name="cuisine"/>All
        </label>
        <label className='radio'>
            <input type="radio" value="1" name="cuisine"/>North Indian
        </label>
        <label className='radio'>
            <input type="radio" value="2" name="cuisine"/>South Indian
        </label>
        <label className='radio'>
            <input type="radio" value="3" name="cuisine"/>Chines
        </label>
        <label className='radio'>
            <input type="radio" value="4" name="cuisine"/>Fast Food
        </label>
        <label className='radio'>
            <input type="radio" value="5" name="cuisine"/>Street Food
        </label>
      </div>
   </>
  )  
}
}
export default CuisineFilter;