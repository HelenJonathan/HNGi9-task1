import React from "react";
import './App.css';
import Slack from "./assets/slack.png";
import Github from "./assets/Icon.png";
import Zuri from "./assets/Vector.png";
import I4G from "./assets/I4G.png"

const Footer = () => {

    // const openInNewTab = url => {
    //     window.open(url, '_blank', 'noopener,noreferrer');
    //   };
    
    return (
        <div className="footer">
            <div className="slack">
              <a href="https://oasiscommunity.slack.com/?redir=%2Farchives%2FD02SUT48CHX" target="_blank" rel="noopener noreferrer">
                 <img alt="slack" src={Slack} />
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                 <img alt="github" src={Github} />
              </a>
            </div>
            <hr />
            <div className="zuri">
                <img alt="Zuri" src={Zuri} />
                <p>HNG Intership 9 Frontend Task</p>
                <img alt="I4G" src={I4G} />
            </div>
        </div>
    )
}

export default Footer;