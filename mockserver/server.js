const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

const port = 8000;

// Function to safely load JSON file content
const loadFile = (filename) => {
  try {
    return require(path.join(__dirname, 'dev', `${filename}.json`));
  } catch (error) {
    return null; // or throw error to handle in route
  }
};

// Common handler for returning JSON file content
const sendFileContent = (filename) => (req, res) => {
  const data = loadFile(filename);
  if (data) {
    res.json(data);
  } else {
    res.status(404).json({ error: 'File not found' });
  }
};

app.put('/dev/xer_upload', sendFileContent('xer_upload'));
app.put('/dev/upload', sendFileContent('upload'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
