<<<<<<< HEAD
<<<<<<< HEAD
const HomeModel = require('../models/HomeModel.js');
=======
const HomeModel = require('../Models/HomeModel.js');
>>>>>>> 1339b0c (Implemented seeding and simple component test)
=======
const HomeModel = require('../models/HomeModel.js');
>>>>>>> 608a567 (Implemented s3 hosting and updated get request to retrieve home images)

const getInfo = (req, res) => {
  HomeModel.getInfo((err, success) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(success);
    }
  });
};

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 608a567 (Implemented s3 hosting and updated get request to retrieve home images)
const getImages = (req, res) => {
  HomeModel.getImages((err, success) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(success);
    }
  });
};

<<<<<<< HEAD
module.exports = {
  getInfo,
  getImages,
=======
module.exports = {
  getInfo,
>>>>>>> 1339b0c (Implemented seeding and simple component test)
=======
module.exports = {
  getInfo,
  getImages,
>>>>>>> 608a567 (Implemented s3 hosting and updated get request to retrieve home images)
};
