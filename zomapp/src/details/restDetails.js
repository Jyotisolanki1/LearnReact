import React, { Component } from 'react';
import axios from 'axios';
import './details.css'

const url = "https://zomatoapi.onrender.com/details"
class Details extends Component{
constructor(props){
    super(props)
    this.state={
        details:''
    }
}
render(){
    //let details = this.state.details
    let {details }= this.state
    return(
           <>
            <div className='main'>
                <div className='tileImage'>
                    <div className='imageClass'>
                    <img src={this.state.details.restaurant_thumb} alt=""/>
                    </div>
                </div>
                <div className='tileContent'>
                    <h1>{details.restaurant_name}</h1>
                </div>
            </div>
           </>
          )
}
// componentDidMount(){
//     let mealId = this.props.match.params.mealId;
//     sessionStorage.setItem('mealId',mealId)
//     axios.get(`${url}${mealId}`)
//     .then((res) => this.setState({restaurantList:res.data}))
// }
async componentDidMount(){
    let restId = this.props.location.search.split('=')[1];
    let response = await axios.get(`${url}/${restId}`)
    this.setState({details:response.data[0]})
}
}
export default Details;