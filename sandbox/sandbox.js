var imageFilterGamma = require('../src/index');

function applyResults(selector, src) {
    var target;
    var image;

    target = document.querySelectorAll(selector)[0];

    image = document.createElement('img');
    image.setAttribute('src', src);
    target.appendChild(image);
}

window.onload = function () {

    var img = new Image;
    img.onload = function(){
        var canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        var context = canvas.getContext('2d');
        context.drawImage(img,0,0);

        var data = context.getImageData(0, 0, img.width, img.height);

        var results1 = imageFilterGamma({
            data: data,
            adjustment: 5,
            asDataURL: true
        });
        applyResults('#target-1', results1);
    };
    img.src = "dummy.jpg";
}