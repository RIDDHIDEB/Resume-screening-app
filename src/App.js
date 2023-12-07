// App.js-------------
import React from 'react';
import FileUpload from './FileUpload';
import './App.css';

const App = () => {
  return (
    <div className='resume-container'>
      <h1>Resume Screening App</h1>
      <FileUpload />
    </div>
  );
};

export default App;
