'use strict';

let value = 40;


const minus_button = document.querySelector('.progress .btn-minus');
const plus_button = document.querySelector('.progress .btn-plus');


minus_button.addEventListener('click', () => {

    if (value === 0) {
        return;
    }

    value -= 10;

    const knob = document.querySelector('.progress .bar .knob');
    knob.style.width = value + '%';

    const counter = document.querySelector('#counter');

    const text = document.createTextNode(value / 10);
    counter.removeChild(counter.firstChild);
    counter.appendChild(text);
})


plus_button.addEventListener('click', () => {

    if (value === 100) {
        return;
    }

    value += 10;

    const knob = document.querySelector('.progress .bar .knob');
    knob.style.width = value + '%';

    const counter = document.querySelector('#counter');
    counter.innerHTML = value / 10;
})