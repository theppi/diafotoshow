const startValues = {
    0: {
        left: '0',
        top: '0',
        opacity: '0'
    },
    1: {
        right: '0',
        top: '0',
        opacity: '0'
    },
    2: {
        right: '0',
        bottom: '0',
        opacity: '0'
    },
    3: {
        left: '0',
        bottom: '0',
        opacity: '0'
    }
};
const animations = {
    0: [
        {
            left: '-2.5vw',
            top: '-2.5vh',
            opacity: '1'
        },
        {
            left: '-5vw',
            top: '-5vh',
            opacity: '1'
        },
        {
            left: '-7.5vw',
            top: '-7.5vh',
            opacity: '1'
        },
        {
            left: '-10vw',
            top: '-10vh',
            opacity: '0'
        },
    ],
    1: [
        {
            right: '-2.5vw',
            top: '-2.5vh',
            opacity: '1'
        },{
            right: '-5vw',
            top: '-5vh',
            opacity: '1'
        },{
            right: '-7.5vw',
            top: '-7vh',
            opacity: '1'
        },{
            right: '-10vw',
            top: '-10vh',
            opacity: '0'
        },
    ],
    2: [
        {
            right: '-2.5vw',
            bottom: '-2.5vh',
            opacity: '1'
        },{
            right: '-5vw',
            bottom: '-5vh',
            opacity: '1'
        },{
            right: '-7.5vw',
            bottom: '-7.5vh',
            opacity: '1'
        },{
            right: '-10vw',
            bottom: '-10vh',
            opacity: '0'
        }
    ],
    3: [
        {
            left: '-2.5vw',
            bottom: '-2.5vh',
            opacity: '1'
        },{
            left: '-5vw',
            bottom: '-5vh',
            opacity: '1'
        },{
            left: '-7.5vw',
            bottom: '-7.5vh',
            opacity: '1'
        },{
            left: '-10vw',
            bottom: '-10vh',
            opacity: '0'
        }
    ]
};