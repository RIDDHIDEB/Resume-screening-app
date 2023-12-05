import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const UploadCV = ({ onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // Ensure a file is selected before attempting to upload
    if (selectedFile) {
      // Call the onUpload callback with the selected file
      onUpload(selectedFile);
    } else {
      console.error('No file selected for upload.');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <Button variant='primary' onClick={handleUpload}>Upload CV</Button>
    </div>
  );
};

export default UploadCV;
