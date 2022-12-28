const lineColorsLeftMid = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
const lineColorsRight = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'gold', 'silver'];
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

        if (indexLineMid == 0) {
            indexLineLeft = addIndexLine(indexLineLeft, 9, 1);
        } else {
            indexLineLeft = addIndexLine(indexLineLeft, 9);
        }

        lineLeft.src = `img/colors/lineLeft/${lineColorsLeftMid[indexLineLeft]}.png`;
    } else if (click.target == lineMid) {

        if (indexLineLeft == 0) {
            indexLineMid = addIndexLine(indexLineMid, 9, 1);
        } else {
            indexLineMid = addIndexLine(indexLineMid, 9);
        }

        lineMid.src = `img/colors/lineMid/${lineColorsLeftMid[indexLineMid]}.png`;
    } else if (click.target == lineRight) { 
        indexLineRight = addIndexLine(indexLineRight, 9);
        lineRight.src = `img/colors/lineRight/${lineColorsRight[indexLineRight]}.png`;
    } else if (click.target == lineTolerance) {
        indexLineTolerance = addIndexLine(indexLineTolerance, 7);
        lineTolerance.src = `img/colors/lineTolerance/${ToleranceColor[indexLineTolerance]}.png`;
    }
    mathOhms(indexLineLeft, indexLineMid, indexLineRight, indexLineTolerance, valueTolerance);
});

function addIndexLine(Indexline, maxIndex, flag = 0) {
    if (Indexline === maxIndex) {
        Indexline = 0;
        if (flag === 1) {
            return 1;
        }
    } else {
        Indexline++;
    }
    return Indexline;
}

function mathOhms (lineLeft, lineMid, lineRight, indexLineTolerance, valueTolerance) {
    let ohms = `${lineLeft}${lineMid}`;
    let multiply = 1;

    const lineTolerance = valueTolerance[indexLineTolerance];

    if (lineRight === 8) {
        multiply = '0.1';
        ohms = `${(parseFloat(ohms) * parseFloat(multiply)).toFixed(2)} Ω ± ${lineTolerance}%`;
        valueOhms.innerHTML = ohms; 
    } else if (lineRight === 9) {
        multiply = '0.01';
        ohms = `${(parseFloat(ohms) * parseFloat(multiply)).toFixed(2)} Ω ± ${lineTolerance}%`;
        valueOhms.innerHTML = ohms; 
    } else {
        for (let i = 0; i < lineRight; i++) { 
            multiply = multiply * 10;
        }
        valueOhms.innerHTML = `${notation(ohms, multiply)} ± ${lineTolerance}%`; 
    }
}

function notation(ohms, multiply) {
    let temp;
    if (multiply >= 100 && multiply < 100000) {
        temp = `${parseInt(ohms) * parseFloat(multiply / 1000)}`;
        if (temp.length > 3) {
            temp = truncNumber(temp);
        }
        return `${temp} KΩ`
    } else if (multiply >= 100000) {
        temp = `${parseInt(ohms) * parseFloat(multiply / 1000000)}`;
        if (temp.length > 3) {
            temp = truncNumber(temp);
        }
        return `${temp} MΩ`
    } else {    
        return `${parseInt(ohms) * parseInt(multiply)} Ω`;
    }
}

function truncNumber(temp) {
    temp = temp.split('');
    temp.splice(3, temp.length - 3);
    return temp.join('');
}
