import React from "react";
import "./Styles.css";
import Slack from "../assets/slack.png";
import Github from "../assets/Icon.png";
import Zuri from "../assets/Vector.png";
import I4G from "../assets/I4G.png"

const Footer = () => {
    
    return (
        <div className="footer" id="footer">
            <div className="slack" id="slack">
              <a href="https://oasiscommunity.slack.com/?redir=%2Farchives%2FD02SUT48CHX" target="_blank" rel="noopener noreferrer" id="anchor-slack">
                 <img id="img-slack" alt="slack" src={Slack} />
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" id="github">
                 <img id="img-github" alt="github" src={Github} />
              </a>
            </div>
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