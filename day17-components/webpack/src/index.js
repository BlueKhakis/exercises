import './index.html';

import './css/style.scss';
import './style.css';

import ProgressBar, { my_function } from './js/ProgressBarComponent.js';

new ProgressBar( document.querySelector('main') );

my_function();