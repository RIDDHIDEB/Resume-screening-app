import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import parseResume from 'parse-resume';

const UploadResume = () => {
  const [file, setFile] = useState(null);
  // const history = useHistory();

  const handleInit = () => {
    console.log('FilePond instance has been initialized');
  };

  const handleFileChange = (files) => {
    setFile(files[0]);
  };

  const handleUpload = async () => {
    if (file) {
      try {
        // Read the file content
        const fileContent = await file.getFileEncodeBase64String();

        // Parse resume data using parse-resume library
        const parsedResumeData = parseResume(fileContent);

        // Redirect to results page after parsing
        // history.push({
        //   pathname: '/results',
        //   state: { parsedResumeData },
        // });
      } catch (error) {
        console.error('Error parsing resume:', error);
        // Handle error, show a message, etc.
      }
    } else {
      console.log('No file Selected');
    }
  };

  return (
    <div>
      <h2>Upload Resume</h2>
      <FilePond
        files={[file]}
        allowMultiple={false}
        oninit={() => handleInit()}
        onupdatefiles={(fileItems) => handleFileChange(fileItems)}
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadResume;
