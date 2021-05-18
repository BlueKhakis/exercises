import './index.html';

import './css/style.scss';
import './style.css';

import { ProgressBar } from './js/ProgressBarComponent.js';

document.querySelector('main').innerHTML = 'Hello';

new ProgressBar( document.querySelector('main') );
