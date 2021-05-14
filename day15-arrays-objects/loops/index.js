let i = 0,
    space_in_bag = 5,
    unwanted_item = 3;

let string = 'foo';
string = string + 'bar'; // foobar
string += 'bar';

// i += 1;
// i++;

// i = i + 2;
// i += 2;

while (i < 10) {
    i++;

    if (i > space_in_bag) {
        break;
    }

    if (i === unwanted_item) {
        continue;
    }

    document.querySelector('.list').innerHTML += `<li>Item #${i}</li>`;
}


console.log(i); // 6

do {

    i++; // 7

    document.querySelector('.list').innerHTML += `<li>Extra item #${i}</li>`; // Extra item #7

} while (i < 2);

console.log(i);


for (let j = 0; j < 5; j++) {

    if (j === 3) {
        continue;
    }

    if (j === 4) {
        break;
    }

    document.querySelector('.list').innerHTML += `<li>Another item #${j}</li>`;
}