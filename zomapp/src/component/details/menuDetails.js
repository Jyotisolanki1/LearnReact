import React,{Component} from "react";

class menuDetails extends Component{
     orderId=[];
     placeOrder= (id)=>{
       this.orderId.push(id);
     }
     removeOrder=(id)=>{
       if(this.orderId.indexOf(id)>-1){
            this.orderId.slice(this.orderId.indexOf(id),1)
       }
     }
    renderMenu = ({menudata}) => {
      if(menudata){
        return menudata.map((item)=>{
            return(
                <div key="item.menu_id">
                    <div>
                      <div className="col-md-7">
                        <b>{item.menu_id}</b>
                        <img src={item.menu_image} alt={item.menu_name} style={{width:80,height:80}}/>
                        &nbsp; {item.menu_name} -Rs. {item.menu_price}
                      </div>
                      <div className="col-md-4">
                          <button className="btn btn-success">
                            <span className="glyphicon glyphicon-plus"></span>
                          </button>&nbsp;
                          <button className="btn btn-danger">
                            <span className="glyphicon glyphicon-minus"></span>
                          </button>
                      </div>
                    </div>
                </div>
            )
        })
      }
    }
 render(){
    return(
     <div>
        <div className="col-md-12 bg-success">
            <h2>item Added</h2>
            <p>item Number</p>
        </div>
        <div className="col-md-12 bg-info">
            {this.renderMenu(this.props)}
        </div>
     </div>
    )
 }
}
export default menuDetails;