import React from 'react';
import "./Styles.css";

const Body = () => {
  
  return (
    <div id='link-container' className='link-container'>
      <div className='button'>
        <a href="https://twitter.com/HelenJonathan5" target="_blank" rel="noopener noreferrer" id="twitter" className='button' >
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
  );
}

export default Body;
