import { isLoggedIn } from '../api/index.js';
import { load } from '../storage/load.js';
import { profileButton } from '../templates/profile/index.js';
console.log(footer);
console.log(footer);
export const footer = () => {
  const footer = document.querySelector('footer');
  const actions = footer.querySelector('#footerActions');
  console.log(footer);

  if (isLoggedIn()) {
    const profile = load('profile');
    actions.prepend(profileButton(profile));
    console.log(profile);
  }
};
