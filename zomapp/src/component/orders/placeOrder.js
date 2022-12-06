import React,{Component} from "react";
import './placeOrder.css'

const url = "https://zomatoapi.onrender.com/menuItem";
const  PlaceOrder = "http://localhost:7000/orders";

class placeOrder extends Component{
constructor(props){
    super(props)
    this.state = {
        id:Math.floor(Math.random()*100000),
        hotel_name:this.props.match.params.restName,
        name:'jyoti',
        email:'jyotisolankics29@gmail.com',
        cost:0,
        phone:9691515185,
        address:'KY 34 sector 12',
        menuItem:''
    }
}
placeOrder = ()=>{
    let obj = this.state
    obj.menuItem = sessionStorage.getItem('menu');
    fetch(PlaceOrder,{method:"POST",
    headers:{
        "accept":"application/json",
        "Content-Type":"application/json"
    },
    body:JSON.stringify(obj)
})
.then(this.props.history.push('/viewBooking'))

}
renderItem = (data) =>{
if(data)
{
return data.map((item)=>{
    return(
        <div className="orderItem" key={item.menu_id}>
            <img src={item.menu_image} alt={item.menu_name}/>
            <h3>{item.menu_name}</h3>
            <h4>{item.menu_price}</h4>
        </div>
    )
})
}}
handleChange = (event) =>{
this.setState({[event.target.name]:event.target.value})
}
render(){
    return(
        <div className="container">
            <div className="panel panel-primary">
                <div className="panel-heading">
                     <h3>Your Order from {this.state.hotel_name}</h3>
                </div>
                <div className="panel-body">
                   <div className="row">
                    <input type='hidden' name='cost' value={this.state.id}/>
                    <input type="hidden" name='id' value={this.state.cost}/>
                    <input type="hidden" name="hotel_name" value={this.state.hotel_name}/>
                    <div className="form-group col-md-6">
                        <label>Name</label>
                        <input className="form-control" value={this.state.name} name="name"  onChange={this.handleChange}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label>Email</label>
                        <input className="form-control" value={this.state.email} name="email"  onChange={this.handleChange}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label>Phone</label>
                        <input className="form-control" value={this.state.phone} name="phone"  onChange={this.handleChange}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label>Address</label>
                        <input className="form-control" value={this.state.address} name="address"  onChange={this.handleChange}/>
                    </div>
                   </div>
                   {this.renderItem(this.state.menuItem)}
                   <div className="row">
                     <div className="col-md-12">
                        <h2>total price is Rs.{this.state.cost}</h2>
                     </div>
                   </div>
                   <button className="btn btn-success" onClick={this.placeOrder}>Checkout</button>
                </div>
            </div>
        </div>
    )
 
}
   //calling api
   componentDidMount(){
    let menuItem = sessionStorage.getItem('menu')
    let orderId = [];
    menuItem.split(',').map((item)=>{
        orderId.push(parseInt(item))
        return 'Ok'
    })
    fetch(url,{
        method:'POST',
        headers:{
         'accept':'application/json',
         'content-type':'application/json'
        },
        'body':JSON.stringify(orderId)
    })
        .then((res)=>res.json())
        .then((data)=>{
            let totalPrice =0;
            data.map((item)=>{
                totalPrice = totalPrice + Number(item.menu_price);
                return 'Ok'
        })
        this.setState({menuItem:data,cost:totalPrice})
      
    })
}
}
export default placeOrder;