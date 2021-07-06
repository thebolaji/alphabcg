const cloudinary = require('cloudinary').v2;
const cloudinarySetup = (opt) => {
  cloudinary.config(opt);
};

module.exports = cloudinarySetup;
