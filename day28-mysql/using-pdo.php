<?php

require_once 'Country.php';

try {
    // connect to the database
    $connection = new PDO(
        'mysql:dbname=world;host=localhost;charset=utf8',
        'root',
        ''
    );
} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
}


var_dump($connection);


$sql = "
    SELECT *
    FROM `countries`
    WHERE `population` > ?
    ORDER BY `population` ASC
    LIMIT 5
";

// prepare the query, get the statement
$statement = $connection->prepare($sql);

var_dump($statement);

// execute the statement
$statement->execute( [ 20000000 ] );

// specify how I want the results
$statement->setFetchMode(PDO::FETCH_CLASS, 'Country');

// get next row from the result
$next_result = $statement->fetch();

var_dump($next_result);

$next_result = $statement->fetch();

var_dump($next_result);

$next_result = $statement->fetch();

var_dump($next_result);


$all_results = $statement->fetchAll();

var_dump($all_results);