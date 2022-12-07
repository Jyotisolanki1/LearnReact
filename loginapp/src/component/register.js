import React,{Component} from "react";

const url = "https://developerjwt.onrender.com/api/auth/register";


class Register extends Component{
constructor(props){
    super(props)
    this.state = {
    
        name:'jyoti',
        email:'jyotisolankics29@gmail.com',
        password:"",
        phone:9691515185,
    }
}
handleSubmit = ()=>{
   
    fetch(url,{method:"POST",
    headers:{
        "accept":"application/json",
        "Content-Type":"application/json"
    },
    body:JSON.stringify(this.state)
})
.then(this.props.history.push('/'))

}

handleChange = (event) =>{
this.setState({[event.target.name]:event.target.value})
}
render(){
    return(
        <div className="container">
            <div className="panel panel-primary">
                <div className="panel-heading">
                     <h3>Register</h3>
                </div>
                <div className="panel-body">
                   <div className="row">
                    <div className="form-group col-md-6">
                        <label>Name</label>
                        <input className="form-control" value={this.state.name} name="name"  onChange={this.handleChange}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label>Email</label>
                        <input className="form-control" value={this.state.email} name="email"  onChange={this.handleChange}/>
                    </div>
                    
                    <div className="form-group col-md-6">
                        <label>Password</label>
                        <input className="form-control" value={this.state.Password} name="password"  onChange={this.handleChange}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label>Phone</label>
                        <input className="form-control" value={this.state.phone} name="phone"  onChange={this.handleChange}/>
                    </div>
                   </div>
                   <button className="btn btn-success" onClick={this.handleSubmit}>Register</button>
                </div>
            </div>
        </div>
    )
 
}
}
export default Register;