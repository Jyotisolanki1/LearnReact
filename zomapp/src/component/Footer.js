import React from "react";
import './Footer.css'

const Footer = ()=> {
    return(
        <footer>
        <hr/><hr/>
        <p id="footText">&copy; Developer Funnel</p>
        <div id="footMain">
            <div className="footDiv">
                <p>Contact us</p>
                <p>About us</p>
            </div>
            <div className="footDiv">
                <p>Contact us</p>
                <p>About us</p>
            </div>
            <div className="footDiv noBorder">
                <p>Contact us</p>
                <p>About us</p>
            </div>
        </div>
        <hr/>
        <div className="social">
            
        </div>
    </footer>
    )
}

export default Footer;