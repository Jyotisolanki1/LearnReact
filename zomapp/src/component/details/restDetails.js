import React, { Component } from 'react';
import axios from 'axios';
import './details.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import{Link} from 'react-router-dom';
import Menu from './menuDetails';

const url = "https://zomatoapi.onrender.com"
class Details extends Component{
constructor(props){
    super(props)
    this.state={
        details:'',
        mealId:sessionStorage.getItem('mealId')?sessionStorage.getItem('mealId'):1,
        menuList:'',
        userItem:''
    }
}
addToCard=(data)=>{
this.setState({userItem:data});
}
proceed = () =>{
      sessionStorage.setItem('menu',this.state.userItem)
      this.props.history.push(`/placeOrder/${this.state.details.restaurant_name}`)
}
render(){
    //let details = this.state.details
    let {details }= this.state
    return(
           <>
            <div className='main'>
                <div className='tileImage'>
                    <div className='imageClass'>
                    <img src={this.state.details.restaurant_thumb} alt={this.state.details.restaurant_name}/>
                    </div>
                </div>
                <div className='tileContent'>
                    <h1>{details.restaurant_name}</h1>
                </div>
                    <Tabs>
                    <TabList>
                        <Tab>About</Tab>
                        <Tab>Contact</Tab>
                    </TabList>

                    <TabPanel>
                    <h2>{details.restaurant_name}</h2>
                    <p>After reading this paragraph you will be able to answer the following questions: What is a post office?   What are the functions of a post office?  What are the functions of a postman?  What banking…</p>
                    </TabPanel>
                    <TabPanel>
                    <h2>{details.address}</h2>
                    <h3>contact:{details.contact_number}</h3>
                    </TabPanel>
                </Tabs>
                <Link to={`/listing/${this.state.mealId}`} className="btn btn-danger">
                    Back
                </Link>&nbsp;
                <button className='btn btn-success'onClick={this.proceed}>Proceed</button>
            
            <div className='col-md-12'>
                <h2><center>menu</center></h2>
                <Menu menudata={this.state.menuList} finalOrder={(data)=>{this.addToCard(data)}}/>
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
    let response = await axios.get(`${url}/details/${restId}`)
    let menuResponse = await axios.get(`${url}/menu/${restId}`)
    this.setState({details:response.data[0],menuList:menuResponse.data})
}
}
export default Details;
//tab   command