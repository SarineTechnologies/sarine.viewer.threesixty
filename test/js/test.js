/**
 * Created by Eran.niv on 08/10/2017.
 */
window.onload = init;

var car;
function init(){

    car = $('.car').ThreeSixty({
        totalFrames: 36, // Total no. of image you have for 360 slider
        endFrame: 36, // end frame for the auto spin animation
        currentFrame: 1, // This the start frame for auto spin
        imgList: '.threesixty_images', // selector for image list
        progress: '.spinner', // selector to show the loading progress
        imagePath:'http://d3oayecwxm3wp6.cloudfront.net/qa3/demo/r2p/FXIR4X2RP0J/interactive/', // path of the image assets
        filePrefix: 'Image_', // file prefix if any
        ext: '.png', // extention for the assets
        height: 1000,
        width: 447,
        navigation: true
    });

}
