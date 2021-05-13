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
}, 100);

const stopExclamationMarks = () => {
    clearInterval(interval_id);
    console.log('Interval stopped');
}

const stop5sTimeout = () => {
    clearTimeout(fiveSecTimeout_id);
    console.log('timeout cleared');
}

let time = 1;
setInterval(() => {
    document.querySelector('.timer').innerHTML = time++ + ' seconds since page load';
}, 1000);