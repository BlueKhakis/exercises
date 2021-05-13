document.querySelector('.headline').innerHTML = 'Hello';

// 0ms after page load
const sayHelloWorld = () => {
    // 2000ms after page load
    document.querySelector('.headline').innerHTML = 'Hello, world!';
    console.log('CHECKPOINT 4');

    setTimeout(() => {
        document.querySelector('.headline').innerHTML += '(2.5 seconds)';
        console.log('CHECKPOINT 4.5');
    }, 500) // after 2500ms after page load = current time (2000ms + 500)
}

console.log('CHECKPOINT 1');
// 0ms after page load
setTimeout(
    sayHelloWorld,
    2000 // 2000ms after page load = current time (0ms + 2000)
)

// 0ms after page load
console.log('CHECKPOINT 2');

// 0ms after page load
const fiveSecTimeout_id = setTimeout(
    () => {
        document.querySelector('.headline').innerHTML += '!!!';
        console.log('CHECKPOINT 5');
    },
    5000 // 5000ms after page load = current time (0ms + 5000)
)

// 0ms after page load
console.log('CHECKPOINT 3');

// 0ms after page load
const interval_id = setInterval(() => {
    // after 1000ms, after 2000ms, after 3000ms ...
    document.querySelector('.headline').innerHTML += '! ';
}, 10000);

/**
 * stops the interval that adds exclamation marks
 */
const stopExclamationMarks = () => {
    clearInterval(interval_id);
    console.log('Interval stopped');
}

/**
 * stops the timeout that adds !!! after 5000ms
 */
const stop5sTimeout = () => {
    clearTimeout(fiveSecTimeout_id);
    console.log('timeout cleared');
}

let time = 0;
document.querySelector('.timer').innerHTML = time++ + ' seconds since page load';
const timer_interval_id = setInterval(() => {
    document.querySelector('.timer').innerHTML = time++ + ' seconds since page load';
}, 1000);

/**
 * stops the timer that shows seconds
 * elapsed since page load
 */
const stopTimer = () => {
    clearInterval(timer_interval_id);
}

const stop_button = document.querySelector('.stop_button');

stop_button.addEventListener('click', () => {
    stopExclamationMarks();
    stopTimer();
})


document.querySelector('.stop_timer').addEventListener(
    'click',
    stopTimer
);

document.querySelector('.stop_timer').addEventListener('click', () => {
    alert('Paused!');
})

const add_qmark = () => {
    document.querySelector('.headline').innerHTML += '?';
}

document.querySelector('.add_question_mark').addEventListener('click', add_qmark);

document.querySelector('.prevent_qmarks').addEventListener('click', () => {
    document.querySelector('.add_question_mark').removeEventListener('click', add_qmark);
    console.log('The button .add_question_mark can no longer add question marks');
})

let box_left = 0,
    box_top = 0;

window.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowLeft') {
        box_left -= 100;
        document.querySelector('.box').style.left = box_left + 'px';
    } else if (event.key === 'ArrowRight') {
        box_left += 100;
        document.querySelector('.box').style.left = box_left + 'px';
    } else if (event.key === 'ArrowUp') {
        box_top -= 100;
        document.querySelector('.box').style.top = box_top + 'px';
    } else if (event.key === 'ArrowDown') {
        box_top += 100;
        document.querySelector('.box').style.top = box_top + 'px';
    }
})