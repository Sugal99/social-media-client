import { isLoggedIn } from '../api/index.js';
import { load } from '../storage/load.js';
import { profileButton } from '../templates/profile/index.js';

export const footer = () => {
  const footerElement = document.querySelector('footer'); // Change the variable name for clarity
  const actions = footerElement.querySelector('#footerActions'); // Change the variable name for clarity

  if (isLoggedIn()) {
    const profile = load('profile');
    actions.prepend(profileButton(profile));
  }
};
