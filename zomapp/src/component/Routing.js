import React from "react";
import { BrowserRouter,Route} from "react-router-dom";
import Footer from './Footer';
import Header from './Header';
import Home from './Home/Home';
import Listing from "./listing/listingApi";
import Details from "./details/restDetails";
import PlaceOrder from "./orders/placeOrder";
import ViewOrder from "./orders/viewOrder";

const Routing = () => {
return(
    <BrowserRouter>
      <Header/>
       <Route path='/' exact component={Home}/> 
       <Route path='/listing/:mealId' component={Listing}/>
       <Route path='/details' component={Details}/>
       <Route path='/placeOrder/:restName' component={PlaceOrder}/>
       <Route path='/viewBooking' component={ViewOrder}/>
      <Footer/>
    </BrowserRouter>
)
}
export default Routing;
