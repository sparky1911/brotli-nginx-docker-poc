const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 5000;

app.get('/data', (req, res) => {
  const index = req.query.index;
  const jsonFilePath = path.join(__dirname, `json/data_${index}.json`);

  fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send({ error: 'Error reading JSON file' });
    }

    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

app.get('/data/svg', (req, res) => {
  const index = req.query.index;
  const svgFilePath = path.join(__dirname, `svg/svg_${index}KB.svg`);

  fs.readFile(svgFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send({ error: 'Error reading SVG file' });
    }

    res.setHeader('Content-Type', 'image/svg+xml');
    res.send(data);
  });
});


app.get('/data/html', (req, res) => {
  const index = req.query.index;
  const svgFilePath = path.join(__dirname, `webpages/html_file_${index}KB.html`);

  fs.readFile(svgFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send({ error: 'Error reading SVG file' });
    }

    res.setHeader('Content-Type', 'image/svg+xml');
    res.send(data);
  });
});


app.get('/', (req, res) => {
  res.send('Hello from the Node.js API with Brotli!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});