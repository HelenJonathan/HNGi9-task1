import React from 'react';
import './App.css';

const App = () => {
  
  return (
    <div id='link-container' className='link-container'>
      <a href="https://twitter.com/HelenJonathan5" target="_blank" rel="noopener noreferrer" id='anchor-twitter' className='anchor' style={{color: "black"}}>
        <button id="twitter" className='button'>Twitter Link</button>
      </a>
      <a href="https://training.zuri.team/" target="_blank" rel="noopener noreferrer" id='anchor-btn__zuri' className='anchor' style={{color: "black"}}>
        <button id="btn__zuri" className='button'>Zuri Team</button>
      </a>
      <a href="http://books.zuri.team" target="_blank" rel="noopener noreferrer" id='anchor-books' className='anchor' style={{color: "black"}}>
        <button id="books" className='button'>Zuri Books</button>
      </a>
      <a href="https://books.zuri.team/python-for-beginners?ref_id=<Helen>" target="_blank" rel="noopener noreferrer" id='anchor-book_python' className='anchor' style={{color: "black"}}>
        <button id="book_python" className='button'>Python Books</button>
      </a>
      <a href="https://backgroundcheck.zuri.team/" target="_blank" rel="noopener noreferrer" id='anchor-pitch' className='anchor' style={{color: "black"}}>
        <button id="pitch" className="button">Background check for coders</button>
      </a>
      <a href="https://books.zuri.team/design-rules" target="_blank" rel="noopener noreferrer" id='anchor-btn__design' className='anchor' style={{color: "black"}}>
        <button id="btn__design" className="button">Design Books</button>
      </a>
    </div>
  );
}

export default App;
