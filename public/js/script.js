/* global $ */
function showNextImage() {
    window.customVars.currentIndex++;
    let currentFrame = (++window.customVars.currentFrame)%3;
    $('.frame').css('display','none');
    $('#image-' + currentFrame).css('display', 'block');
}

window.onload = function() {
    window.customVars = {
        currentIndex: 0,
        currentFrame: 0
    };
    setInterval(function() {
        console.log('next!');
        showNextImage();
        console.log(window.customVars.currentIndex);
        console.log(window.customVars.currentFrame);
    }, 3000);
};