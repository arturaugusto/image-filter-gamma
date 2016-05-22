import { expect } from 'chai';
import { transform } from '../src/gamma';

describe('brightness', () => {
    it('should apply transformation and return as imageData', () => {
        const data = [
            193,
            219,
            242,
            255,
            193,
            219,
            242,
            255
        ];

        const expectedData = [
            63.33238209903888,
            119.1406190826259,
            196.29810549179535,
            255,
            193,
            219,
            242,
            255
        ];

        transform(data, 4, 5);
        expect(data).to.deep.equal(expectedData);
    });
});
