const fs = require('fs');
const generateRandomColor = require('./color_generator');
const { registerFont, createCanvas } = require('canvas');
registerFont('Yantramanav-Bold.ttf', { family: 'BJ', weight: 400 });

const imageConverter = async (string) => {
  try {
    // trim string to remove spacing
    const trims = string.trim();

    // Get the first letter in the word
    const text = string.charAt(0).toUpperCase();

    // height and width of the image
    const width = 500;
    const height = 500;

    // creating the background
    const canvas = createCanvas(width, height);
    const context = canvas.getContext('2d');
    context.fillStyle = generateRandomColor();
    context.fillRect(0, 0, width, height);

    //  Add Text
    context.font = '200pt "BJ"';
    context.textAlign = 'center';
    context.fillStyle = '#fff';
    context.fillText(text, 250, 300);

    // covert to image
    const buffer = canvas.toBuffer('image/jpeg');
    return buffer;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = imageConverter;
