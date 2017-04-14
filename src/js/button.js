import { secretButton } from './dom-loader';

export function updatesecretButton(showSecret) {
    if (showSecret) {
        secretButton.textContent = 'Hide the Secret';
    } else {
        secretButton.textContent = 'Show the Secret';
    }
}