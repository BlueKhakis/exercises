<?php

include ('./data.php');
require_once('./Celebrity.php');

$celebrities = [];

foreach($data as $array){
    $celebrity = new Celebrity();
    $celebrity->fill($array);

    $celebrities[] = $celebrity;
}

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

echo json_encode($celebrities);