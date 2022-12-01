import React from "react";
import { BrowserRouter,Route} from "react-router-dom";
import Footer from './Footer';
import Header from './Header';
import Home from './Home/Home';

const Routing = () => {
return(
    <BrowserRouter>
      <Header/>
       <Route path='/' exact component={Home}/> 
      <Footer/>
    </BrowserRouter>
)
}
export default Routing;
