import { updateSecretParagraph } from './paragraph';
import { updatesecretButton } from './button';
import { secretButton } from './dom-loader';
var showSecret = false;

secretButton.addEventListener('click', toggleSecretState);
updateSecretParagraph(showSecret);

function toggleSecretState() {
    showSecret = !showSecret;
    updateSecretParagraph(showSecret);
    updatesecretButton(showSecret);
}