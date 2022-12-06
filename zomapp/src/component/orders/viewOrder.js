import axios from "axios";
import React,{Component} from "react";
import DisplayOrder from './displayOrder';

const  PlaceOrder = "http://localhost:7000/orders";
class viewOrder extends Component{
    constructor(){
        super()
        this.state ={
            orders:''
        }
    }
render(){
    return(
        <>
         <DisplayOrder orderData={this.state.orders}/>
        </>
    )
}
componentDidMount(){
    axios.get(PlaceOrder).then((res)=>{
        this.setState({orders:res.data})
    })
}
}
export default viewOrder;