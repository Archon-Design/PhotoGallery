const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

<<<<<<< HEAD
<<<<<<< HEAD
const HomeController = require('./controllers/HomeController.js');
=======
const HomeController = require('./Controllers/HomeController.js');
>>>>>>> 1339b0c (Implemented seeding and simple component test)
=======
const HomeController = require('./controllers/HomeController.js');
>>>>>>> 608a567 (Implemented s3 hosting and updated get request to retrieve home images)

app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/api/homeinfo', (req, res) => {
  HomeController.getInfo(req, res);
});

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 608a567 (Implemented s3 hosting and updated get request to retrieve home images)
app.get('/api/homeimages', (req, res) => {
  HomeController.getImages(req, res);
});

<<<<<<< HEAD
=======
>>>>>>> 1339b0c (Implemented seeding and simple component test)
=======
>>>>>>> 608a567 (Implemented s3 hosting and updated get request to retrieve home images)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
