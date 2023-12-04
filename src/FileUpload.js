import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './App.css';

const FileUpload = ({ onFileUpload }) => {
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    onFileUpload(file);
  }, [onFileUpload]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className='fileupload-container'>
      <input {...getInputProps()} />
      <p>Drag 'n' drop a CV file here, or click to select one</p>
    </div>
  );
};

export default FileUpload;
