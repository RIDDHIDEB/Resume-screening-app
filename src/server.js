import multer from 'multer';

const express = require('express');
const multer = require('multer');
const pdf = require('pdf-parse');
const app = express();
const port = 5000;

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), async (request, response) => {
  if (!request.file) {
    return response.status(400).json({ message: 'No file uploaded' });
  }

  try {
    const dataBuffer = request.file.buffer;
    const data = await pdf(dataBuffer);
    const text = data.text;

    const skillsToMatch = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML'];

    const matchedSkills = skillsToMatch.filter((skill) => text.includes(skill));

    // You can return additional information if needed.
    response.json({ matchedSkills, fileText: text });

  } catch (error) {
    console.error('Error processing file:', error.message);
    res.status(500).json({ error: 'Error processing file' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
