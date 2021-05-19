import './index.html';

import './style.scss';

const nav = document.querySelector('nav');

nav.addEventListener('mouseenter', () => {
    nav.classList.remove('hidden');
})

nav.addEventListener('mouseleave', () => {
    nav.classList.add('hidden');
})
