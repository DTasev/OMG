/**
 * Created by dimta on 21-Apr-16.
 */

var parallaxBackground = (function () {


    var cloudProp = {};

    this.resetCloudPositions = function () {

        for (var i = 0; i < assetLoader.images.cloud.length; i++) {
            cloudProp[i] = {
                'x'         : Math.floor((Math.random() * canvas.width) + 1),
                'y'         : Math.floor((Math.random() * canvas.height) + 1),
                'directionX' : Math.random() < 0.5 ? -1 : 1,
                'directionY' : Math.random() < 0.5 ? -1 : 1,
                'speed'     : Math.random()
            };

        }
    };


    this.renderBackground = function (canvasContext) {
        canvasContext.drawImage(assetLoader.images.background[0], 0, 0, canvas.width, canvas.height);

        for (var i = 0; i < assetLoader.images.cloud.length; i++) {

            if (cloudProp[i].x > canvas.width) {

                cloudProp[i].x = 0;

            } else if(cloudProp[i].x + assetLoader.images.cloud[i].width < 0){

                cloudProp[i].x = canvas.width;
            }

            if (cloudProp[i].y > canvas.height) {

                cloudProp[i].y = 0;

            } else if (cloudProp[i].y + assetLoader.images.cloud[i].height < 0){
                cloudProp[i].y = canvas.height;

            }

            cloudProp[i].x += cloudProp[i].directionX * cloudProp[i].speed;

            cloudProp[i].y += cloudProp[i].directionY * cloudProp[i].speed;

            canvasContext.drawImage(assetLoader.images.cloud[i],
                0, 0,
                assetLoader.images.cloud[i].width, assetLoader.images.cloud[i].height,
                cloudProp[i].x, cloudProp[i].y,
                assetLoader.images.cloud[i].width, assetLoader.images.cloud[i].height);
        }


    };


    return this;
})();