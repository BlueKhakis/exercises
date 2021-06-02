<?php

require_once 'DB.php';
require_once 'DB_functions.php';
require_once 'Country.php';
require_once 'Region.php';

// connect to the database
$success = connect('127.0.0.1', 'world', 'root', '');

// $sql = "INSERT
//         INTO `regions`
//         (`name`, `slug`)
//         VALUES
//         (?, ?)
// ";

// insert($sql, [ 'Western Europe', 'western-europe' ]);


// $sql = "INSERT
//         INTO `regions`
//         (`name`, `slug`)
//         VALUES
//         (?, ?),
//         (?, ?),
//         (?, ?)
// ";

// insert($sql, [
//     'North America',
//     'north-america',
//     'Central America',
//     'central-america',
//     'South America',
//     'south-america',
// ]);


$region = new Region;
$region->name = 'Central Africa';
$region->insert();

// var_dump($region);

// redirect to edit of the newly inserted region
// (does not work as we don't have a display-form.php :))
header('Location: display-form.php?id=' . $region->id);