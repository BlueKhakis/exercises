<?php

require_once 'DB.php';
require_once 'DB_functions.php';
require_once 'Country.php';

// connect to the database
$success = connect('127.0.0.1', 'world', 'root', '');

// run a query, get the results
$results = select(
    'SELECT *
     FROM `countries`
     WHERE `population` > ?
     ORDER BY `population` ASC
     LIMIT 9, 5
    ',
    [
        20000000
    ],
    'Country'
);

// var_dump($results);

// header('Content-type: application/json');

// echo json_encode($results);

// exit();

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <ul>

        <?php foreach ($results as $result) : ?>

            <li>
                <h2><?= $result->name ?></h2>
                population <?= $result->getPopulationNicelyFormatted() ?>
            </li>

        <?php endforeach; ?>

    </ul>

</body>
</html>
