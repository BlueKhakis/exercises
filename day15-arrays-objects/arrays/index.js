let items = [
    'spaghetti',
    'sauce',
    'cheese',
    'onions',
    'wine'
];

items.push('sausage');

items.unshift('salt');

console.log(items);

for (let i = 0; i < items.length; i++) {

    // let current_list_innerHTML = document.querySelector('.list').innerHTML;

    // console.log(current_list_innerHTML);

    // current_list_innerHTML = current_list_innerHTML + '<li>' + items[i] + '</li>';

    // console.log(current_list_innerHTML);

    // document.querySelector('.list').innerHTML = current_list_innerHTML;

    if (i === 2) {
        break;
    }

    document.querySelector('.list').innerHTML += '<li>' + items[i] + '</li>';
}


items.forEach((element, index) => {

    if (index === 2) {
        return; // same effect as continue;
    }

    document.querySelector('.list').innerHTML += '<li>' + index + '. ' + element + '</li>';
    // console.log(element, 'has an index of', index);

})


let result = items.every((element, index) => {

    if (index === 2) {
        return false; // same effect as break;
    }

    document.querySelector('.list').innerHTML += '<li>' + index + '. ' + element + '</li>';

    return true; // must be here, otherwise the loop would break after 1st iteration

})


result = items.some((element, index) => {

    if (index === 2) {
        return true; // same effect as break;
    }

    document.querySelector('.list').innerHTML += '<li>' + index + '. ' + element + '</li>';
})

console.log(result);