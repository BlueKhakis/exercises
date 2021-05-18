'use strict';

let value = 40;


const minus_button = document.querySelector('.progress .btn-minus');
const plus_button = document.querySelector('.progress .btn-plus');


const setKnobWidth = (value) => {

    const knob = document.querySelector('.progress .bar .knob');
    knob.style.width = value + '%';

}

const setCounterValue = (value) => {

    const counter = document.querySelector('#counter');
    counter.innerHTML = value / 10;

}

const changeValue = (amount) => {

    // prepare the number that we want
    let indended_value = value + amount;

    // limit intended_value to be between 0 and 100
    indended_value = Math.max(0, Math.min(indended_value, 100));

    value = indended_value;

    setKnobWidth(value);

    setCounterValue(value);

}

minus_button.addEventListener('click', () => {

    changeValue(-10);

})


plus_button.addEventListener('click', () => {

    changeValue(10);

})