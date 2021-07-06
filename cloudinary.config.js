const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');

dotenv.config();

const cloudinarySetup = (opt) => {
  cloudinary.config(opt);
};

module.exports = cloudinarySetup;
