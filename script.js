// const colors = {
//     black: '',
//     brown: '',
//     red: '',
//     orange: '',
//     yellow: '',
//     green: '',
//     blue: '',
//     violet: '',
//     gray: '',
//     white: '',
//     silver: '',
//     gold: '',
// }

const linesColors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
const ToleranceColor = ['brown', 'red', 'green', 'blue', 'violet', 'grey', 'gold', 'silver'];

const lineLeft = document.querySelector('.lineLeft');
const lineMid = document.querySelector('.lineMid');
const lineRight = document.querySelector('.lineRight');
const lineTolerance = document.querySelector('.lineTolerance');

let indexLineLeft = 0;
let indexLineMid = 0;
let indexLineRight = 0;
let indexLineTolerance = 0;

document.addEventListener('click', (click) => {
    if (click.target == lineLeft) {
        lineLeft.src = `img/colors/lineLeft/${linesColors[indexLineLeft]}.png`;
        indexLineLeft = addIndexLine(indexLineLeft, 9);
    } else if (click.target == lineMid) {
        lineMid.src = `img/colors/lineMid/${linesColors[indexLineMid]}.png`;
        indexLineMid = addIndexLine(indexLineMid, 9);
    } else if (click.target == lineRight) { 
        lineRight.src = `img/colors/lineRight/${linesColors[indexLineRight]}.png`;
        indexLineRight = addIndexLine(indexLineRight, 9);
    } else if (click.target == lineTolerance) {
        lineTolerance.src = `img/colors/lineTolerance/${ToleranceColor[indexLineTolerance]}.png`;
        indexLineTolerance = addIndexLine(indexLineTolerance, 7)
    }

    // if (indexLineTolerance === 7) {
    //     indexLineTolerance = 0;
    // } else {
    //     indexLineTolerance++;
    // }
});

function addIndexLine(Indexline, maxIndex) {
    if (Indexline === maxIndex) {
        Indexline = 0;
    } else {
        Indexline++;
    }
    return Indexline;
}

