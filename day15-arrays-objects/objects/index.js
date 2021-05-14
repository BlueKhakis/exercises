const item = {
    name: 'Apples',
    amount: '2kg'
};

console.log(item);

item.name = 'Green apples';

item.amount = '3kg';

console.log( item.name );
console.log( item.amount );

console.log('I\'m going to buy ' + item.amount + ' of ' + item.name);


for (let key in item) {
    console.log(key);

    console.log( item[key] ); // have to use the [] notation
}

// for (let value of item) {

//     console.log(value);

// }

let keys = Object.keys(item);

console.log(keys);

keys.forEach(key => {
    console.log(key, 'is the key of ', item[key]);
})

let values = Object.values(item); // no way of getting the keys

console.log(values);


item.new_value = 'foo';