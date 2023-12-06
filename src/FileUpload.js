import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [matchedSkills, setMatchedSkills] = useState([]);
  const [percentage, setPercentage] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);
    try {
        const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const { matchedSkills, percentage } = response.data;
      setMatchedSkills(matchedSkills);
      setPercentage(percentage);

      console.log('Server Response:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <Button onClick={handleUpload}>Upload</Button>

      {matchedSkills.length > 0 && (
        <div>
          <h3>Matched Skills:</h3>
          <ul>
            {matchedSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <p>Percentage: {percentage.toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
