/**
 * @name transform
 * @param {object} imageData
 * @param {number} adjustment - sane values are from 0 to 5
 */
export function transform(data, length, adjustment) {
    for (let i = 0; i < length; i += 4) {
        data[i] = Math.pow(data[i] / 255, adjustment) * 255;
        data[i + 1] = Math.pow(data[i + 1] / 255, adjustment) * 255;
        data[i + 2] = Math.pow(data[i + 2] / 255, adjustment) * 255;
    }
}
