var utils = require('./utils');

/**
 * @name transform
 * @param {object} imageData
 * @param {number} adjustment - sane values are from 0 to 5
 */
function transform(imageData, adjustment) {

    var data = imageData.data;
    for (var i = 0; i < data.length; i+= 4) {
        data[i] = Math.pow(data[i] / 255, adjustment) * 255;
        data[i + 1] = Math.pow(data[i + 1] / 255, adjustment) * 255;
        data[i + 2] = Math.pow(data[i + 2] / 255, adjustment) * 255;
    };

    return imageData;
}

/**
 * @name gamma
 * @param {object} options
 * @param {string} options.data - data of a image extracted from a canvas
 * @param {string} options.adjustment
 * @param {bool} options.asDataURL
 */
module.exports = function gamma(options) {
    var factor;
    var result;
    var canvas;
    var context;

    if (!options.data || !options.adjustment) {
        throw new Error('image-filter-gamma:: invalid options provided');
    }

    canvas = utils.getCanvas(options.data.width, options.data.height);
    context = canvas.getContext('2d');

    options.data = utils.getPixels(canvas, context, options.data);

    result = transform(options.data, options.adjustment);

    if (options.asDataURL) {
        return utils.convertToDataURL(canvas, context, result);
    }

    return result;
}
