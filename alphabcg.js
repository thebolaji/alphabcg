const CloudinaryStorage = require('./cloudinary.config');
const uploadFromBuffer = require('./cloudinary');
const imageConverter = require('./imageConverter');

const alphabcg = async (str, opts) => {
  try {
    if (!str) throw new Error('insert text to covert to image');
    if (!opts) {
      const result = await imageConverter(str);
      return result;
    }
    if (!opts.cloud_name || !opts.api_key || !opts.api_secret)
      throw new Error('Options are not complete or correct');

    CloudinaryStorage(opts);
    const buffer = await imageConverter(str);
    const result = await uploadFromBuffer(buffer);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = alphabcg;
