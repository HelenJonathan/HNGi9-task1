import React from "react";
import "./Styles.css";
import Zuri from "../assets/Vector.png";
import I4G from "../assets/I4G.png"

const Footer = () => {
    
    return (
        <div className="footer" id="footer">
            
            <hr id="line" />
            <div className="zuri" id="zuri">
                <img id="zuri-logo" alt="Zuri" src={Zuri} />
                <p id="p-tag">HNG Intership 9 Frontend Task</p>
                <img id="I4G-logo" alt="I4G" src={I4G} />
            </div>
        </div>
    )
}

export default Footer;