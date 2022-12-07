import axios from "axios";
import React,{Component} from "react";
import Display from './userDisplay';

const  userUrl = "https://developerjwt.onrender.com/api/auth/users";
class UserList extends Component{
    constructor(){
        super()
        this.state ={
            users:''
        }
    }
render(){
    if(sessionStorage.getItem('ltk')===null){
        this.props.history.push('/');
        }
       
    if(sessionStorage.getItem('ltk') !==null && sessionStorage.getItem('rtk') !== "Admin"){
        this.props.history.push('/profile');
        }
    return(
        <>
         <Display userData={this.state.users}/>
        </>
    )
}
componentDidMount(){
    axios.get(userUrl).then((res)=>{
        this.setState({users:res.data})
    })
}
}
export default UserList;