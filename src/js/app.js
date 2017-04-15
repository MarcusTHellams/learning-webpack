// import '../css/main.css';
// import '../css/input-elements.css';
import { updateSecretParagraph } from './paragraph';
import { updatesecretButton } from './button';
import { secretButton } from './dom-loader';
import { RandomGenerator } from './random-generator';
import '../css/main.scss';
var showSecret = false;

const outputParagraph = document.querySelector('#outputParagraph');

const outputRandomInt = () => {
    outputParagraph.textContent = RandomGenerator.randomInteger();
};


const outputRandomRange = () => {
    outputParagraph.textContent = RandomGenerator.randomRange(1, 500);
};

const buttonRndInt = document.querySelector('#randomInt');
const buttonRndRange = document.querySelector('#randomRange');

buttonRndInt.addEventListener('click', outputRandomInt);
buttonRndRange.addEventListener('click', outputRandomRange);


secretButton.addEventListener('click', toggleSecretState);
updateSecretParagraph(showSecret);

function toggleSecretState() {
    showSecret = !showSecret;
    updateSecretParagraph(showSecret);
    updatesecretButton(showSecret);
}

