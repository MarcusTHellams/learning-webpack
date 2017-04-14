import { secretParagraph } from './dom-loader';


export function updateSecretParagraph(showSecret) {
    if (showSecret) {
        secretParagraph.style.display = 'block';
    } else {
        secretParagraph.style.display = 'none';
    }
}