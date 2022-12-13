import React from "react";

const displayOrder = (props)=>{

 const   renderTable = ({orderData}) =>{
        if(orderData){
        return orderData.map((item)=>{
           return(
             <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.hotel_name}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.cost}</td>
             </tr>
           )
        })
    }
    }
     
 return(
 <div className="container">
    <center><h3>orders</h3></center>
    <table className="table">
        <thead>
            <tr>
                <th>order Id</th>
                <th>Restaurant Name</th>
                <th>Name</th>
                <th>phone</th>
                <th>email</th>
                <th>cost</th>
                <th>Date</th>
                <th>status</th>
                <th>Bank Name</th>
            </tr>
        </thead>
        <tbody>
          {renderTable(props)}
        </tbody>
    
    </table>
 </div>
 )
}
export default displayOrder;