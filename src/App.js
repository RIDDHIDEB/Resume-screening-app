// import React, { useState } from 'react';
// import axios from 'axios';
// import UploadCV from './FileUpload';
// import MatchedSkills from './MatchedSkills';
// import './App.css'

// const App = () => {

//   const handleUpload = async (file) => {
//     const formData = new FormData();
//     formData.append('file', file);
//     console.log(file);
    
//     try {
//       const response = await axios.post('http://localhost:5000/upload',formData, {
//         headers: {
//           "Content-Type": "multipart/form-data"
//         }
//       });
//       console.log('File uploaded successfully:', response.data);
//       // .then(res =>{
//       //   console.log(res);
//       // });

//     } catch (error) {
//       console.error('Error uploading CV:', error);
//     }
//   };

//   return (
//     <div className='resume-container'>
//       <h1>Resume Screening App</h1>
//       <UploadCV onUpload={handleUpload} />
//       <MatchedSkills/>
//     </div>
//   );
// };

// export default App;

// App.js
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
