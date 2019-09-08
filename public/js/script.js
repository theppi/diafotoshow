/* global $, animations, startValues */
const DURATION = 8000;

async function showNextImage() {
    let currentFrame = (window.customVars.currentFrame + 1) % 4;
    let nextFrame = (currentFrame + 1) % 4;
    window.customVars.currentFrame = currentFrame;
    let $currentFrame = $('#image-' + currentFrame);
    await showImage($currentFrame, currentFrame);

}

let showImage = async ($currentFrame, i) => {
    $currentFrame.css('visibility', 'visible');
    let nextFrame = (i+1)%4;
    getImage(window.customVars.nextIndex, nextFrame);
    let animation = animations[i];
    for(let i = 0; i < animation.length; i++) {
        await animate($currentFrame, animation[i], DURATION/animation.length);
    }
    setDefaults(i);
        
};

let animate = ($object, animation, duration) => {
    return new Promise((resolve, reject) => {
        $object.animate(animation, duration,'linear', resolve);
    });
};

function setDefaults(i) {
    let $frame = $('#image-' + i);
    for (let j in startValues[i]) {
        $frame.css(j, startValues[i][j]);
    }
}

async function getImage(index, frameIndex) {
    let $frame = $('#image-' + frameIndex);
    return $.get('/api/image/' + index).then(function(result) {
        $frame.css('background-image', 'url("' + result.data + '")');
        window.customVars.nextIndex = parseInt(result.next);
    });
}

window.onload = async function () {
    window.customVars = {
        currentIndex: 0,
        currentFrame: 0,
        nextIndex: 0
    };
    await getImage(0, 0);
    for(let i = 0; i < 4; i++) {
        setDefaults(i);
    }
    console.log('Start animation');
    await showImage($('#image-0'), 0);
    for(;;) {
        await showNextImage();
    }

};