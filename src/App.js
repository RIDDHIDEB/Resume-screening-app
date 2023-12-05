// import React, { useState } from 'react';
// import axios from 'axios';
// import FileUpload from './FileUpload';
// import './App.css';

// const App = () => {
//   const [matchedSkills, setMatchedSkills] = useState([]);
//   const [fileText, setFileText] = useState('');

//   const onFileUpload = async (file) => {
//     const formData = new FormData();
//     formData.append('file', file);
//     console.log(file);
//     console.log(formData);
//     try {
//       const response = await axios.post('http://localhost:5000/upload', file,{
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       console.log('File uploaded successfully:', response);

//       // setMatchedSkills(response.data.matchedSkills || []);
//       // setFileText(response.data.fileText || '');

//     } catch (error) {
//       console.error('Error uploading file:', error.message);
//     }
//   };

//   return (
//     <div className='resume-container'>
//       <h1>Resume Screening App</h1>
//       <FileUpload onFileUpload={onFileUpload} />

//       {matchedSkills.length > 0 && (
//         <div>
//           <h2>Matched Skills:</h2>
//           <ul>
//             {matchedSkills.map((skill, index) => (
//               <li key={index}>{skill}</li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {fileText && (
//         <div>
//           <h2>Extracted Text:</h2>
//           <p>{fileText}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;


import React, { useState } from 'react';
import axios from 'axios';
import UploadCV from './FileUpload';
import MatchedSkills from './MatchedSkills';
import './App.css'

const App = () => {
  const [matchedSkills, setMatchedSkills] = useState([]);

  const handleUpload = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    console.log(file);

    try {
      const response = await axios.post('http://localhost:5000/upload',formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(res =>{
        console.log(res);
      })
      ;
      const { skills } = response.data;
      // setMatchedSkills(skills);
      console.log(formData);
    } catch (error) {
      console.error('Error uploading CV:', error);
    }
  };

  return (
    <div className='resume-container'>
      <h1>Resume Screening App</h1>
      <UploadCV onUpload={handleUpload} />
      {/* <MatchedSkills skills={matchedSkills} /> */}
    </div>
  );
};

export default App;
