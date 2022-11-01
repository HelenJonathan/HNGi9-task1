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
            <div className="face-card-container">
                
                   <img alt="face-card" src={Stargirl} className="face-img" 
                //    onMouseOver={e => (e.currentTarget.src={Hoverimage})}
                   />
                              
                <h3>Helen Jonathan Efebe</h3>
            </div>
        </div>
    )
}

export default Profile;