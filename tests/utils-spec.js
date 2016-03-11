var expect = require('chai').expect;
var utils = require('../src/utils');

describe('utils', function () {
    it('getCanvas', function () {
        var expectedResult = '<canvas width="100" height="100"></canvas>';
        var element = utils.getCanvas(100, 100);

        expect(element.tagName).to.equal('CANVAS');
        expect(element.height).to.equal(100);
        expect(element.width).to.equal(100);
    });
});
