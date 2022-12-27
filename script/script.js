const linesColors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
const ToleranceColor = ['brown', 'red', 'green', 'blue', 'violet', 'grey', 'gold', 'silver'];

const lineLeft = document.querySelector('.lineLeft');
const lineMid = document.querySelector('.lineMid');
const lineRight = document.querySelector('.lineRight');
const lineTolerance = document.querySelector('.lineTolerance');

const valueOhms = document.querySelector('.ohms h1');

let indexLineLeft = 1;
let indexLineMid = 0;
let indexLineRight = 2;
let indexLineTolerance = 6;

const valueTolerance = [1, 2, 0.5, 0.25, 0.10, 0.05, 5, 10];

document.addEventListener('click', (click) => {
    if (click.target == lineLeft) {
        indexLineLeft = addIndexLine(indexLineLeft, 9);
        lineLeft.src = `img/colors/lineLeft/${linesColors[indexLineLeft]}.png`;
    } else if (click.target == lineMid) {
        indexLineMid = addIndexLine(indexLineMid, 9);
        lineMid.src = `img/colors/lineMid/${linesColors[indexLineMid]}.png`;
    } else if (click.target == lineRight) { 
        indexLineRight = addIndexLine(indexLineRight, 9);
        lineRight.src = `img/colors/lineRight/${linesColors[indexLineRight]}.png`;
    } else if (click.target == lineTolerance) {
        indexLineTolerance = addIndexLine(indexLineTolerance, 7);
        lineTolerance.src = `img/colors/lineTolerance/${ToleranceColor[indexLineTolerance]}.png`;
    }
    mathOhms(indexLineLeft, indexLineMid, indexLineRight, indexLineTolerance, valueTolerance);
});

function addIndexLine(Indexline, maxIndex) {
    if (Indexline === maxIndex) {
        Indexline = 0;
    } else {
        Indexline++;
    }
    return Indexline;
}

function mathOhms (lineLeft, lineMid, lineRight, indexLineTolerance, valueTolerance) {
    let ohms = `${lineLeft}${lineMid}`;
    let multiply = '1';

    for (let i = 0; i < lineRight; i++) { 
        multiply = multiply + '0';
    }

    const lineTolerance = valueTolerance[indexLineTolerance];
    
    ohms = notation(ohms, multiply, lineTolerance);

    valueOhms.innerHTML = ohms; 
}

function notation(ohms, multiply, lineTolerance) { 
    ohms = `${parseInt(ohms) * parseInt(multiply)}`;
    
    if (ohms.length <= 3) {
        ohms = ohms + ' Ω'
    }
    else if (ohms.length >= 4 && ohms.length <= 7) {
        ohms = ohms.split('');
        ohms.splice(2, 2);
        ohms = ohms.join('') + ' KΩ';

        const index = ohms.length - 4;
        ohms = ohms.substr(0, index) + ',' + ohms.substr(index);

        if (ohms[ohms.length - 4] === '0') {
            ohms = ohms.split('');
            ohms.splice(ohms.length - 5, 2);
            ohms = ohms.join('');
        }

    } else {
        ohms = ohms.split('');
        ohms.splice(2, 6);
        ohms = ohms.join('') + ' MΩ';

        const index = ohms.length - 4;
        ohms = ohms.substr(0, index) + ',' + ohms.substr(index);

        if (ohms[ohms.length - 4] === '0') {
            ohms = ohms.split('');
            ohms.splice(ohms.length - 5, 2);
            ohms = ohms.join('');
        }
    }
    return `${ohms} ± ${lineTolerance}%`;
}

