const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');

const localhost = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

const app = express();

app.disable('x-powered-by');

// config middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, '..', '..', 'dist')));

// routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://${localhost}:${port}`);
});
