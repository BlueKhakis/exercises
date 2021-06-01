<?php

// try to understand (from $_GET & $_POST) what the consumer wants
// ...

// database operations
// ...

// select data from database
// ...

// ...

$movies = [
    'The <strong>Shawshank</strong> redemption',
    'The Godfather',
    'The Godfather II',
    'Dark Knight',
    '12 angry men',
    'Schindler\'s list',
    'Pulp fiction',
    'Lord of the Rings: Return of the King',
    'The good, the bad and the ugly',
    'Fight club'
];


header('Content-type: application/json');

echo json_encode($movies);