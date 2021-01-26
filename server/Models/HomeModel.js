const db = require('../../database/index.js');

const getInfo = (callback) => {
  db.query('SELECT * FROM HomeInfo WHERE id = 1', callback);
};

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 608a567 (Implemented s3 hosting and updated get request to retrieve home images)
const getImages = (callback) => {
  db.query('SELECT * FROM HomeImages WHERE Home_ID = 1', callback);
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
