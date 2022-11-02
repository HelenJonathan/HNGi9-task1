import React from "react";
import './App.css';
import Stargirl from "./assets/stargirl.jpeg"
import Direct from "./assets/_Avatar share button.png"
import Hoverimage from "./assets/Hoverimage.png"

const Profile = () => {
    return (
        <div className="profile">
            <div>
                <img alt="direct" src={Direct} className="pointer" />
            </div>
            <div tabIndex="0" className="face-card-container">
                   <img alt="face-card" src={Stargirl} className="face-img" tabIndex="1" />
                   <div className="middle">
                     <img alt="camara" src={Hoverimage} className="camara" />  
                   </div>
                                          
            </div>
            <h3>Helen Jonathan Efebe</h3>
        </div>
    )
}

export default Profile;