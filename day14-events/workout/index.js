'use strict';

let result = 0;

setResult(result);

function equalClicked() {

    // find the number input element on the page
    // take the current value from the number input
    const value = getElementValue('.number_input');

    // add the value to the result
    result += Number(value);

    // update the contents of the result element
    setResult(result);

    // clear the value of the number input
    setInputValue(0);

}

function setInputValue(value) {
    const number_input = document.querySelector('.number_input');

    number_input.value = value;
}

function getInputValue() {
    const number_input = document.querySelector('.number_input');

    return number_input.value;
}

function getElementValue(css_selector) {
    const number_input = document.querySelector(css_selector);

    return number_input.value;
}

function setResult(value) {
    let result_element = document.querySelector('.result');

    result_element.textContent = value;

    if (value === 0) {
        result_element.style.opacity = '0.5';
    } else {
        result_element.style.opacity = '1.0';
    }
}