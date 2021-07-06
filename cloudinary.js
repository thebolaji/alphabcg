const cloudinary = require('cloudinary');
const streamifier = require('streamifier');

let uploadFromBuffer = (Buffer) => {
  return new Promise((resolve, reject) => {
    let cld_upload_stream = cloudinary.v2.uploader.upload_stream(
      {
        folder: 'foo',
      },
      (error, result) => {
        if (result) {
          resolve(result);
        } else {
          reject(error);
        }
      }
    );
    streamifier.createReadStream(Buffer).pipe(cld_upload_stream);
  });
};

module.exports = uploadFromBuffer;
