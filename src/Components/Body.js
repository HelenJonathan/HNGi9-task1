import React from 'react';
import { Link } from "react-router-dom"
import Slack from "../assets/slack.png";
import Github from "../assets/Icon.png";
import "./Styles.css";


const Body = () => {
  
  return (
    <div>

        <div id='link-container' className='link-container'>
              <div className='button'>
                <a href="https://twitter.com/HelenJonathan5" target="_blank" rel="noopener noreferrer" id="twitter" className='anchor' >
                  Twitter Link
                </a>
              </div>
              <div className='button'>
                <a href="https://training.zuri.team/" target="_blank" rel="noopener noreferrer" id="btn__zuri" className='anchor' >
                  Zuri Team
                </a>
              </div>
              <div className='button'>
                <a href="http://books.zuri.team" target="_blank" rel="noopener noreferrer" id="books" className='anchor' >
                  Zuri Books
                </a>
              </div>
              <div className='button'> 
                <a href="https://books.zuri.team/python-for-beginners?ref_id=<Helen>" target="_blank" rel="noopener noreferrer" id="book_python" className='anchor' >
                  Python Books
                </a>
              </div>
              <div className="button">
                <a href="https://backgroundcheck.zuri.team/" target="_blank" rel="noopener noreferrer" id="pitch" className='anchor' >
                  Background check for coders
                </a>
              </div>
              <div className="button">
                <a href="https://books.zuri.team/design-rules" target="_blank" rel="noopener noreferrer" id="btn__design" className='anchor' >
                  Design Books
                </a>
              </div>
              
            </div>

            <div className="button">
              <Link to="/contact" id="contact">Contact me</Link>
            </div>

            <div>
            <div className="slack" id="slack">
              <a href="https://oasiscommunity.slack.com/?redir=%2Farchives%2FD02SUT48CHX" target="_blank" rel="noopener noreferrer" id="anchor-slack">
                 <img id="img-slack" alt="slack" src={Slack} />
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" id="github">
                 <img id="img-github" alt="github" src={Github} />
              </a>
            </div>
            </div>
    </div>
    
  );
}

export default Body;
