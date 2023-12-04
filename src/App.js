import React, { useState } from 'react';
import axios from 'axios';
import FileUpload from './FileUpload';
import './App.css';

const App = () => {
  const [matchedSkills, setMatchedSkills] = useState([]);
  const [fileText, setFileText] = useState('');

  const onFileUpload = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('File uploaded successfully:', response.data);

      setMatchedSkills(response.data.matchedSkills || []);
      setFileText(response.data.fileText || '');

    } catch (error) {
      console.error('Error uploading file:', error.message);
    }
  };

  return (
    <div className='resume-container'>
      <h1>Resume Screening App</h1>
      <FileUpload onFileUpload={onFileUpload} />

      {matchedSkills.length > 0 && (
        <div>
          <h2>Matched Skills:</h2>
          <ul>
            {matchedSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      )}

      {fileText && (
        <div>
          <h2>Extracted Text:</h2>
          <p>{fileText}</p>
        </div>
      )}
    </div>
  );
};

export default App;

// import React, { useState } from 'react';
// import Fuse from 'fuse.js';

// const App = () => {
//   const [file, setFile] = useState(null);
//   const [skills, setSkills] = useState('');
//   const [matchedSkills, setMatchedSkills] = useState([]);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSkillsChange = (e) => {
//     setSkills(e.target.value);
//   };

//   const handleUpload = () => {
//     try {
//       // Simulate reading resume data from the file (adjust based on your actual use case)
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         const resumeData = JSON.parse(reader.result); // Adjust based on your data format

//         // Extract skills from the resumeData
//         const resumeSkills = resumeData.skills || [];

//         // Use Fuse.js for fuzzy search and matching
//         const fuse = new Fuse(resumeSkills, { shouldSort: true });

//         // Match user-provided skills with resume skills
//         const matches = fuse.search(skills.split(','));

//         setMatchedSkills(matches.map((match) => match.item));

//         // Handle other response data and UI updates accordingly
//       };

//       reader.readAsText(file);
//     } catch (error) {
//       console.error('Error uploading resume:', error);
//       // Handle errors
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       <input
//         type="text"
//         placeholder="Enter skills (comma-separated)"
//         onChange={handleSkillsChange}
//       />
//       <button onClick={handleUpload}>Upload Resume</button>

//       {matchedSkills.length > 0 && (
//         <div>
//           <h3>Matched Skills:</h3>
//           <ul>
//             {matchedSkills.map((match, index) => (
//               <li key={index}>{match}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
