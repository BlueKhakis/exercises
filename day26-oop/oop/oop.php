<?php


require_once 'User.php';


$steve = new User('Steve');

$steve->id = 1;
$steve->username = 'steve';
$steve->name = 'Stephen';

// var_dump($steve);

echo 'The name of user ' . $steve->id . ' is ' . $steve->name;

$steve->dump();



$bob = new User('Bob');

$bob->dump();
$bob->name = 'Robert';

echo $bob . ' goes to school';