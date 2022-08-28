import ancientsData from "../data/ancients.js";
import cardsDataGreen from "../data/mythicCards/green/index.js";
import cardsDataBrown from "../data/mythicCards/brown/index.js";
import cardsDataBlue from "../data/mythicCards/blue/index.js";

const azathoth = document.querySelector('.azathoth');
const cthulth = document.querySelector('.cthulth');
const iogsothoth = document.querySelector('.iogsothoth');
const shubniggurath = document.querySelector('.shubniggurath');

const veryEasy = document.querySelector('.very-easy');
const easy = document.querySelector('.easy');
const middle = document.querySelector('.middle');
const hard = document.querySelector('.hard');
const veryHard = document.querySelector('.very-hard');

const level = document.querySelector('.level');
const mix = document.querySelector('.mix');
const card = document.querySelector('.card');
const count = document.querySelector('.count');
const faceCard = document.querySelector('.card-facial');

const cardBackground = document.querySelector('.card-background');
const cardFacial = document.querySelector('.face');

const greenFirst = document.querySelector('.green-first');
const brownFirst = document.querySelector('.brown-first');
const blueFirst = document.querySelector('.blue-first');

const greenSecond = document.querySelector('.green-second');
const brownSecond = document.querySelector('.brown-second');
const blueSecond = document.querySelector('.blue-second');

const greenThird = document.querySelector('.green-third');
const brownThird = document.querySelector('.brown-third');
const blueThird = document.querySelector('.blue-third');

shuffle(cardsDataGreen);
shuffle(cardsDataBrown);
shuffle(cardsDataBlue);

const easyGreen = cardsDataGreen.filter(item => item.difficulty === 'easy');
const normalGreen = cardsDataGreen.filter(item => item.difficulty === 'normal');
const hardGreen = cardsDataGreen.filter(item => item.difficulty === 'hard');

const easyBrown = cardsDataBrown.filter(item => item.difficulty === 'easy');
const normalBrown = cardsDataBrown.filter(item => item.difficulty === 'normal');
const hardBrown = cardsDataBrown.filter(item => item.difficulty === 'hard');

const easyBlue = cardsDataBlue.filter(item => item.difficulty === 'easy');
const normalBlue = cardsDataBlue.filter(item => item.difficulty === 'normal');
const hardBlue = cardsDataBlue.filter(item => item.difficulty === 'hard');

let countAncients;

let firstLine;
let secondLine;
let thirdLine;

let lastCard;

function deleteCheck() {
    azathoth.classList.remove('button-check');
    cthulth.classList.remove('button-check');
    iogsothoth.classList.remove('button-check');
    shubniggurath.classList.remove('button-check');
    veryEasy.classList.remove('button-check');
    easy.classList.remove('button-check');
    middle.classList.remove('button-check');
    hard.classList.remove('button-check');
    veryHard.classList.remove('button-check');
    checkMix();
    mix.classList.add('hidden');
};

function deleteCheckLevel() {
    veryEasy.classList.remove('button-check');
    easy.classList.remove('button-check');
    middle.classList.remove('button-check');
    hard.classList.remove('button-check');
    veryHard.classList.remove('button-check');
};

function checkMix() {
    count.classList.add('hidden');
    card.classList.add('hidden');
    cardFacial.src = `../assets/mythicCardBackground.png`
    faceCard.classList.add('hidden');
};

function shuffle(arr) {
    for(let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
};

function countColorGreen(card) {
    return ancientsData[card].firstStage.greenCards + ancientsData[card].secondStage.greenCards + ancientsData[card].thirdStage.greenCards;
};

function countColorBlow(card) {
    return ancientsData[card].firstStage.brownCards + ancientsData[card].secondStage.brownCards + ancientsData[card].thirdStage.brownCards;
};

function countColorBlue(card) {
    return ancientsData[card].firstStage.blueCards + ancientsData[card].secondStage.blueCards + ancientsData[card].thirdStage.blueCards;
};

function sectionCard() {
    greenFirst.textContent = firstLine.filter(item => item.color === 'green').length;
    brownFirst.textContent = firstLine.filter(item => item.color === 'brown').length;
    blueFirst.textContent = firstLine.filter(item => item.color === 'blue').length;

    greenSecond.textContent = secondLine.filter(item => item.color === 'green').length;
    brownSecond.textContent = secondLine.filter(item => item.color === 'brown').length;
    blueSecond.textContent = secondLine.filter(item => item.color === 'blue').length;

    greenThird.textContent = thirdLine.filter(item => item.color === 'green').length;
    brownThird.textContent = thirdLine.filter(item => item.color === 'brown').length;
    blueThird.textContent = thirdLine.filter(item => item.color === 'blue').length;
};

function cardClick(firstLine, secondLine, thirdLine) {
    if(!(firstLine.length === 0)) {
        lastCard = firstLine.pop();
    } else if(!(secondLine.length === 0)) {
        lastCard = secondLine.pop();
    } else if(!(thirdLine.length === 0)) {
        lastCard = thirdLine.pop();
    } else {
        return false;
    };

    sectionCard();
};

azathoth.addEventListener('click', () => {
    deleteCheck();
    azathoth.classList.add('button-check');

    countAncients = 0;

    level.classList.remove('hidden');
});

cthulth.addEventListener('click', () => {
    deleteCheck();
    cthulth.classList.add('button-check');

    countAncients = 1;

    level.classList.remove('hidden');
});

iogsothoth.addEventListener('click', () => {
    deleteCheck();
    iogsothoth.classList.add('button-check');

    countAncients = 2;

    level.classList.remove('hidden');
});

shubniggurath.addEventListener('click', () => {
    deleteCheck();
    shubniggurath.classList.add('button-check');

    countAncients = 3;

    level.classList.remove('hidden');
});

veryEasy.addEventListener('click', () => {
    let countGreen = countColorGreen(countAncients);
    let countBrown = countColorBlow(countAncients);
    let countBlue = countColorBlue(countAncients);

    let veryEasyGreen = easyGreen.slice(0);
    let veryEasyBrown = easyBrown.slice(0);
    let veryEasyBlue = easyBlue.slice(0);

    if (countGreen > veryEasyGreen.length) {
        let count = countGreen - veryEasyGreen.length;
        veryEasyGreen.push(normalGreen.slice(0, count));
    };
    if (countBrown > veryEasyBrown.length) {
        let count = countBrown - veryEasyBrown.length;
        veryEasyBrown.push(normalBrown.slice(0, count));
    };
    if (countBlue > veryEasyBlue.length) {
        let count = countBlue - veryEasyBlue.length;
        veryEasyBlue.push(normalBlue.slice(0, count));
    };

    veryEasyGreen = veryEasyGreen.flat();
    veryEasyBrown = veryEasyBrown.flat();
    veryEasyBlue = veryEasyBlue.flat();

    shuffle(veryEasyGreen);
    shuffle(veryEasyBrown);
    shuffle(veryEasyBlue);

    let greenCard = veryEasyGreen.slice(0);
    greenCard.splice(countGreen);

    let brownCard = veryEasyBrown.slice(0);
    brownCard.splice(countBrown);

    let blueCard = veryEasyBlue.slice(0);
    blueCard.splice(countBlue);

    let greenCardFirst = greenCard.slice(0, ancientsData[countAncients].firstStage.greenCards);
    let greenCardSecond = greenCard.slice(ancientsData[countAncients].firstStage.greenCards, ancientsData[countAncients].secondStage.greenCards + ancientsData[countAncients].firstStage.greenCards);
    let greenCardThird = greenCard.slice(ancientsData[countAncients].secondStage.greenCards + ancientsData[countAncients].firstStage.greenCards);

    let brownCardFirst = brownCard.slice(0, ancientsData[countAncients].firstStage.brownCards);
    let brownCardSecond = brownCard.slice(ancientsData[countAncients].firstStage.brownCards, ancientsData[countAncients].secondStage.brownCards + ancientsData[countAncients].firstStage.brownCards);
    let brownCardThird = brownCard.slice(ancientsData[countAncients].secondStage.brownCards + ancientsData[countAncients].firstStage.brownCards);

    let blueCardFirst = blueCard.slice(0, ancientsData[countAncients].firstStage.blueCards);
    let blueCardSecond = blueCard.slice(ancientsData[countAncients].firstStage.blueCards, ancientsData[countAncients].secondStage.blueCards + ancientsData[countAncients].firstStage.blueCards);
    let blueCardThird = blueCard.slice(ancientsData[countAncients].secondStage.blueCards + ancientsData[countAncients].firstStage.blueCards);
    
    firstLine = [...blueCardFirst, ...brownCardFirst, ...greenCardFirst];

    secondLine = [...blueCardSecond, ...brownCardSecond, ...greenCardSecond];

    thirdLine = [...blueCardThird, ...brownCardThird, ...greenCardThird];

    shuffle(firstLine);
    shuffle(secondLine);
    shuffle(thirdLine);

    sectionCard ();
    deleteCheckLevel();
    checkMix();

    veryEasy.classList.add('button-check');

    mix.classList.remove('hidden');
});

easy.addEventListener('click', () => {
    let countGreen = countColorGreen(countAncients);
    let countBrown = countColorBlow(countAncients);
    let countBlue = countColorBlue(countAncients);

    let easyGreenCards = [...easyGreen, ...normalGreen];
    let easyBrownCards = [...easyBrown, ...normalBrown];
    let easyBlueCards = [...easyBlue, ...normalBlue];

    shuffle(easyGreenCards);
    shuffle(easyBrownCards);
    shuffle(easyBlueCards);

    let greenCard = easyGreenCards.slice(0);
    greenCard.splice(countGreen);

    let brownCard = easyBrownCards.slice(0);
    brownCard.splice(countBrown);

    let blueCard = easyBlueCards.slice(0);
    blueCard.splice(countBlue);

    let greenCardFirst = greenCard.slice(0, ancientsData[countAncients].firstStage.greenCards);
    let greenCardSecond = greenCard.slice(ancientsData[countAncients].firstStage.greenCards, ancientsData[countAncients].secondStage.greenCards + ancientsData[countAncients].firstStage.greenCards);
    let greenCardThird = greenCard.slice(ancientsData[countAncients].secondStage.greenCards + ancientsData[countAncients].firstStage.greenCards);

    let brownCardFirst = brownCard.slice(0, ancientsData[countAncients].firstStage.brownCards);
    let brownCardSecond = brownCard.slice(ancientsData[countAncients].firstStage.brownCards, ancientsData[countAncients].secondStage.brownCards + ancientsData[countAncients].firstStage.brownCards);
    let brownCardThird = brownCard.slice(ancientsData[countAncients].secondStage.brownCards + ancientsData[countAncients].firstStage.brownCards);

    let blueCardFirst = blueCard.slice(0, ancientsData[countAncients].firstStage.blueCards);
    let blueCardSecond = blueCard.slice(ancientsData[countAncients].firstStage.blueCards, ancientsData[countAncients].secondStage.blueCards + ancientsData[countAncients].firstStage.blueCards);
    let blueCardThird = blueCard.slice(ancientsData[countAncients].secondStage.blueCards + ancientsData[countAncients].firstStage.blueCards);
    
    firstLine = [...blueCardFirst, ...brownCardFirst, ...greenCardFirst];

    secondLine = [...blueCardSecond, ...brownCardSecond, ...greenCardSecond];

    thirdLine = [...blueCardThird, ...brownCardThird, ...greenCardThird];

    shuffle(firstLine);
    shuffle(secondLine);
    shuffle(thirdLine);

    sectionCard ();
    deleteCheckLevel();
    checkMix();

    easy.classList.add('button-check');

    mix.classList.remove('hidden');
});

middle.addEventListener('click', () => {

    let countGreen = countColorGreen(countAncients);
    let countBrown = countColorBlow(countAncients);
    let countBlue = countColorBlue(countAncients);

    let greenCard = cardsDataGreen.slice(0);
    greenCard.splice(countGreen);

    let brownCard = cardsDataBrown.slice(0);
    brownCard.splice(countBrown);

    let blueCard = cardsDataBlue.slice(0);
    blueCard.splice(countBlue);

    let greenCardFirst = greenCard.slice(0, ancientsData[countAncients].firstStage.greenCards);
    let greenCardSecond = greenCard.slice(ancientsData[countAncients].firstStage.greenCards, ancientsData[countAncients].secondStage.greenCards + ancientsData[countAncients].firstStage.greenCards);
    let greenCardThird = greenCard.slice(ancientsData[countAncients].secondStage.greenCards + ancientsData[countAncients].firstStage.greenCards);

    let brownCardFirst = brownCard.slice(0, ancientsData[countAncients].firstStage.brownCards);
    let brownCardSecond = brownCard.slice(ancientsData[countAncients].firstStage.brownCards, ancientsData[countAncients].secondStage.brownCards + ancientsData[countAncients].firstStage.brownCards);
    let brownCardThird = brownCard.slice(ancientsData[countAncients].secondStage.brownCards + ancientsData[countAncients].firstStage.brownCards);

    let blueCardFirst = blueCard.slice(0, ancientsData[countAncients].firstStage.blueCards);
    let blueCardSecond = blueCard.slice(ancientsData[countAncients].firstStage.blueCards, ancientsData[countAncients].secondStage.blueCards + ancientsData[countAncients].firstStage.blueCards);
    let blueCardThird = blueCard.slice(ancientsData[countAncients].secondStage.blueCards + ancientsData[countAncients].firstStage.blueCards);
    
    firstLine = [...blueCardFirst, ...brownCardFirst, ...greenCardFirst];

    secondLine = [...blueCardSecond, ...brownCardSecond, ...greenCardSecond];

    thirdLine = [...blueCardThird, ...brownCardThird, ...greenCardThird];

    shuffle(firstLine);
    shuffle(secondLine);
    shuffle(thirdLine);

    sectionCard ();
    deleteCheckLevel();
    checkMix();

    middle.classList.add('button-check');

    mix.classList.remove('hidden');
});

hard.addEventListener('click', () => {
    let countGreen = countColorGreen(countAncients);
    let countBrown = countColorBlow(countAncients);
    let countBlue = countColorBlue(countAncients);

    let hardGreenCards = [...hardGreen, ...normalGreen];
    let hardBrownCards = [...hardBrown, ...normalBrown];
    let hardBlueCards = [...hardBlue, ...normalBlue];

    shuffle(hardGreenCards);
    shuffle(hardBrownCards);
    shuffle(hardBlueCards);

    let greenCard = hardGreenCards.slice(0);
    greenCard.splice(countGreen);

    let brownCard = hardBrownCards.slice(0);
    brownCard.splice(countBrown);

    let blueCard = hardBlueCards.slice(0);
    blueCard.splice(countBlue);

    let greenCardFirst = greenCard.slice(0, ancientsData[countAncients].firstStage.greenCards);
    let greenCardSecond = greenCard.slice(ancientsData[countAncients].firstStage.greenCards, ancientsData[countAncients].secondStage.greenCards + ancientsData[countAncients].firstStage.greenCards);
    let greenCardThird = greenCard.slice(ancientsData[countAncients].secondStage.greenCards + ancientsData[countAncients].firstStage.greenCards);

    let brownCardFirst = brownCard.slice(0, ancientsData[countAncients].firstStage.brownCards);
    let brownCardSecond = brownCard.slice(ancientsData[countAncients].firstStage.brownCards, ancientsData[countAncients].secondStage.brownCards + ancientsData[countAncients].firstStage.brownCards);
    let brownCardThird = brownCard.slice(ancientsData[countAncients].secondStage.brownCards + ancientsData[countAncients].firstStage.brownCards);

    let blueCardFirst = blueCard.slice(0, ancientsData[countAncients].firstStage.blueCards);
    let blueCardSecond = blueCard.slice(ancientsData[countAncients].firstStage.blueCards, ancientsData[countAncients].secondStage.blueCards + ancientsData[countAncients].firstStage.blueCards);
    let blueCardThird = blueCard.slice(ancientsData[countAncients].secondStage.blueCards + ancientsData[countAncients].firstStage.blueCards);
    
    firstLine = [...blueCardFirst, ...brownCardFirst, ...greenCardFirst];

    secondLine = [...blueCardSecond, ...brownCardSecond, ...greenCardSecond];

    thirdLine = [...blueCardThird, ...brownCardThird, ...greenCardThird];

    shuffle(firstLine);
    shuffle(secondLine);
    shuffle(thirdLine);

    sectionCard ();
    deleteCheckLevel();
    checkMix();

    hard.classList.add('button-check');

    mix.classList.remove('hidden');
});

veryHard.addEventListener('click', () => {
    let countGreen = countColorGreen(countAncients);
    let countBrown = countColorBlow(countAncients);
    let countBlue = countColorBlue(countAncients);

    let veryHardGreen = hardGreen.slice(0);
    let veryHardBrown = hardBrown.slice(0);
    let veryHardBlue = hardBlue.slice(0);

    if (countGreen > veryHardGreen.length) {
        let count = countGreen - veryHardGreen.length;
        veryHardGreen.push(normalGreen.slice(0, count));
    };
    if (countBrown > veryHardBrown.length) {
        let count = countBrown - veryHardBrown.length;
        veryHardBrown.push(normalBrown.slice(0, count));
    };
    if (countBlue > veryHardBlue.length) {
        let count = countBlue - veryHardBlue.length;
        veryHardBlue.push(normalBlue.slice(0, count));
    };

    veryHardGreen = veryHardGreen.flat();
    veryHardBrown = veryHardBrown.flat();
    veryHardBlue = veryHardBlue.flat();

    shuffle(veryHardGreen);
    shuffle(veryHardBrown);
    shuffle(veryHardBlue);

    let greenCard = veryHardGreen.slice(0);
    greenCard.splice(countGreen);

    let brownCard = veryHardBrown.slice(0);
    brownCard.splice(countBrown);

    let blueCard = veryHardBlue.slice(0);
    blueCard.splice(countBlue);

    let greenCardFirst = greenCard.slice(0, ancientsData[countAncients].firstStage.greenCards);
    let greenCardSecond = greenCard.slice(ancientsData[countAncients].firstStage.greenCards, ancientsData[countAncients].secondStage.greenCards + ancientsData[countAncients].firstStage.greenCards);
    let greenCardThird = greenCard.slice(ancientsData[countAncients].secondStage.greenCards + ancientsData[countAncients].firstStage.greenCards);

    let brownCardFirst = brownCard.slice(0, ancientsData[countAncients].firstStage.brownCards);
    let brownCardSecond = brownCard.slice(ancientsData[countAncients].firstStage.brownCards, ancientsData[countAncients].secondStage.brownCards + ancientsData[countAncients].firstStage.brownCards);
    let brownCardThird = brownCard.slice(ancientsData[countAncients].secondStage.brownCards + ancientsData[countAncients].firstStage.brownCards);

    let blueCardFirst = blueCard.slice(0, ancientsData[countAncients].firstStage.blueCards);
    let blueCardSecond = blueCard.slice(ancientsData[countAncients].firstStage.blueCards, ancientsData[countAncients].secondStage.blueCards + ancientsData[countAncients].firstStage.blueCards);
    let blueCardThird = blueCard.slice(ancientsData[countAncients].secondStage.blueCards + ancientsData[countAncients].firstStage.blueCards);
    
    firstLine = [...blueCardFirst, ...brownCardFirst, ...greenCardFirst];

    secondLine = [...blueCardSecond, ...brownCardSecond, ...greenCardSecond];

    thirdLine = [...blueCardThird, ...brownCardThird, ...greenCardThird];

    shuffle(firstLine);
    shuffle(secondLine);
    shuffle(thirdLine);

    sectionCard();
    deleteCheckLevel();
    checkMix();

    veryHard.classList.add('button-check');

    mix.classList.remove('hidden');
});

cardBackground.addEventListener('click', () => {
    cardClick(firstLine, secondLine, thirdLine);

    cardFacial.src = `../assets/MythicCards/${lastCard.color}/${lastCard.cardFace}`;
    faceCard.classList.remove('hidden');
});

mix.addEventListener('click', () => {
    mix.classList.add('hidden');
    count.classList.remove('hidden');
    card.classList.remove('hidden');
});