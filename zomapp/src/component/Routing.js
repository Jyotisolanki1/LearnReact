import React from "react";
import { BrowserRouter,Route} from "react-router-dom";
import Footer from './Footer';
import Header from './Header';
import Home from './Home/Home';
import Listing from "./listing/listingApi";
import Details from "./details/restDetails";

const Routing = () => {
return(
    <BrowserRouter>
      <Header/>
       <Route path='/' exact component={Home}/> 
       <Route path='/listing/:mealId' component={Listing}/>
       <Route path='/details' component={Details}/>
      <Footer/>
    </BrowserRouter>
)
}
export default Routing;
