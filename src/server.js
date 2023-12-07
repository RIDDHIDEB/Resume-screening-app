import express from 'express';
import multer from 'multer';
import pdfParser from 'pdf-parse';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/test', (req, res) => {
  res.send('Server is working!');
});

app.post('/upload', upload.single('file'),async (req, res) => {
  console.log(req.file.originalname); 
  try {
   const pdfFilePath = '/home/rchakraborty/Downloads/resume-screening-backend/'+req.file.originalname;
   const fileContent = req.file.buffer;
  
   const text = await pdfParser(req.file.buffer);
  console.log(text.text.toString());
  } catch (error) {
    console.log(error)
  }

const cvData = `
Java Programming 
Database Management System
HTML, CSS, JavaScript
React.JS
`;

const skillsArray = cvData.split('\n').map(skill => skill.trim());
console.log(skillsArray);

const skillsToMatch = ['javascript', 'React.JS', 'node.js', 'html', 'css'];

try{
const cleanedSkillsFromCV = skillsArray
  .filter(skill => typeof skill === 'string' && skill.trim() !== '')
  .flatMap(skill => skill.split(',')) // Split combined skills

const cleanedSkillsFromCvLowercase = cleanedSkillsFromCV.map(skill => skill.trim().toLowerCase());

const matchedSkills = skillsToMatch.filter(skill => cleanedSkillsFromCvLowercase.includes(skill.toLowerCase()));

console.log('Matched Skills:', matchedSkills);

const percentage = (matchedSkills.length / skillsToMatch.length) * 100;
console.log('Percentage:', percentage.toFixed(2) + '%');
res.json({ matchedSkills, percentage }); 
} catch (error) {
  console.error('An error occurred:', error);
  res.status(500).json({ error: 'Internal Server Error' }); 
}
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
