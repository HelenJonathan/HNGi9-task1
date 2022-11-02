import React from 'react';
import './App.css';

const App = () => {
  // const openInNewTab = url => {
  //   window.open(url, '_blank', 'noopener,noreferrer');
  // };

  return (
    <div className='link-container'>
      <a href="https://twitter.com/HelenJonathan5" target="_blank" rel="noopener noreferrer" className='anchor'>
        <button id='twitter' className='button'>Twitter Link</button>
      </a>
      <a href="https://training.zuri.team/" target="_blank" rel="noopener noreferrer" className='anchor'>
        <button id='btn__zuri' className='button'>Zuri Team</button>
      </a>
      <a href="http://books.zuri.team" target="_blank" rel="noopener noreferrer" className='anchor'>
        <button id='books' className='button'>Zuri Books</button>
      </a>
      <a href="https://books.zuri.team/python-for-beginners?ref_id=<Helen>" target="_blank" rel="noopener noreferrer" className='anchor'>
        <button id='book_python' className='button'>Python Books</button>
      </a>
      <a href="https://backgroundcheck.zuri.team/" target="_blank" rel="noopener noreferrer" className='anchor'>
        <button id='pitch' className='button'>Background check for coders</button>
      </a>
      <a href="https://books.zuri.team/design-rules" target="_blank" rel="noopener noreferrer" className='anchor'>
        <button id='btn__design' className='button'>Design Books</button>
      </a>
    </div>
  );
}

export default App;
