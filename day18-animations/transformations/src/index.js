import './index.html';

import './style.scss';

import App from './App';
import transforms from './transforms';

const box = document.querySelector('.box');
console.log(transforms);
const app = new App(box, transforms);