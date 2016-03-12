var sinon = require('sinon');
var expect = require('chai').expect;
var utils = require('../src/utils');
var imageFilterGamma = require('../src/index');

describe('index', function () {
    var sandbox;
    var canvas;
    var context;

    beforeEach(function () {
       // Create a sandbox for the test
       sandbox = sinon.sandbox.create();
   });

   afterEach(function () {
       // Restore all the things made through the sandbox
       sandbox.restore();
   });

    beforeEach(function () {

        context = 'context';

        canvas = {
            width: 100,
            height: 150,
            getContext: sandbox.stub().returns(context)
        };

        sandbox.stub(utils, 'getCanvas').returns(canvas);
    });

    it('should throw error by missing parameters', function () {

        var fn = function () {
            imageFilterGamma({});
        };

        expect(fn).to.throw(/image-filter-gamma:: invalid options provided/);
    });

    it('should apply gamma transformation and return as imageData', function () {
        var imageData = {
            data: [193, 219, 242, 255]
        };

        const expectedData = {
            data: [63.33238209903888, 119.1406190826259, 196.29810549179535, 255]
        };

        sandbox.stub(utils, 'getPixels').returns(imageData);

        var result = imageFilterGamma({
            data: imageData,
            adjustment: 5
        });

        expect(result).to.deep.equal(expectedData);
    });

    it('should apply gamma transformation and return as dataURL', function() {
        var imageData = {
            data: [193, 219, 242, 255]
        };

        const expectedData = {
            data: [63.33238209903888, 119.1406190826259, 196.29810549179535, 255]
        };

        const expectedURL = 'imageDataURL';

        sandbox.stub(utils, 'getPixels').returns(imageData);
        sandbox.stub(utils, 'convertToDataURL').returns('imageDataURL');

        var result = imageFilterGamma({
            data: imageData,
            adjustment: 5,
            asDataURL: true
        });

        expect(utils.convertToDataURL.calledWith(canvas, context, expectedData)).to.equal(true);
        expect(result).to.deep.equal(expectedURL);
    });
});
