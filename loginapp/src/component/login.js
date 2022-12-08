import React,{Component} from "react";

const url = "https://developerjwt.onrender.com/api/auth/login";


class Login extends Component{
constructor(props){
    super(props)
    this.state = {
        email:'vishali@gmail.com',
        password:"12345678",
        message:''
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
.then((res)=>res.json())
.then((data)=>{
    if(data.auth===false){
        this.setState({massege:data.token})
    }
    else{
        sessionStorage.setItem('ltk',data.token)
        this.props.history.push('/profile')
    }
})

}

handleChange = (event) =>{
this.setState({[event.target.name]:event.target.value})
}
render(){
    return(
        <div className="container">
            <div className="panel panel-primary">
                <div className="panel-heading">
                     <h3>Login</h3>
                </div>
                <div className="panel-body">
                    <h3 style={{color:'red'}}>{this.state.massege}</h3>
                   <div className="row">
                    
                    <div className="form-group col-md-6">
                        <label>Email</label>
                        <input className="form-control" value={this.state.email} name="email"  onChange={this.handleChange}/>
                    </div>                    
                    <div className="form-group col-md-6">
                        <label>Password</label>
                        <input className="form-control" value={this.state.Password} name="password"  onChange={this.handleChange}/>
                    </div>
                   </div>
                   <button className="btn btn-success" onClick={this.handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
 
}
}
export default Login;