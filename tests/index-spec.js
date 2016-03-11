var sinon = require('sinon');
var expect = require('chai').expect;
var utils = require('../src/utils');
var imageFilterGamma = require('../src/index');

describe('index', function () {
    it('should throw error by missing parameters', function () {

        var fn = function () {
            imageFilterGamma({});
        };

        expect(fn).to.throw(/image-filter-gamma:: invalid options provided/);
    });

    it.skip('should apply gamma transformation and return as imageData', function () {

    });

    it.skip('should apply gamma transformation and return as dataURL', function() {

    });
});
