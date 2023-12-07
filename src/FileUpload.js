import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [matchedSkills, setMatchedSkills] = useState([]);
  const [percentage, setPercentage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    console.log('Uploading file...');

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', file);
    try {
        console.log('Sending request...');
        const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if(Promise.resolve){
        console.log('Server Response:', response.data)
      }
     
      const { matchedSkills, percentage } = response.data;
      setMatchedSkills(matchedSkills);
      setPercentage(percentage);

    //   console.log('Server Response:', response);
    } catch (error) {
      console.error('Error uploading file:', error);
      setError('An error occurred while processing the file.');
    }finally {
        setLoading(false);
      }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <Button onClick={handleUpload}>Upload</Button>
        
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {matchedSkills.length > 0 && !loading && !error &&(
        <div>
          <h3>Matched Skills:</h3>
          <ul>
            {matchedSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <h4>Percentage:</h4>
          <p>{percentage.toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
