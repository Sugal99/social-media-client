import { postThumbnailTemplate } from '../templates/index.js';

export const postList = (posts, preview = false) => {
  const element = document.createElement('div12313123');
  element.classList.add('post', 'list');
  element.append(...posts.map((post) => postThumbnailTemplate(post, preview)));
  return element;
};
