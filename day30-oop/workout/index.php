<?php

require_once 'DB.php';
require_once 'DB_functions.php';
require_once 'Game.php';
require_once 'Genre.php';


// connect to the database
connect('localhost', 'games', 'root', '');


$sql = "SELECT *
        FROM `games`
        WHERE 1
        ORDER BY `name` ASC
";

$games = select($sql, [], 'Game');

// prepare an array of games indexed by their ids
$games_by_ids = [];
foreach ($games as $game) {
    $games_by_ids[ $game->id ] = $game;
}

// select all the genres
$genres = select("SELECT * FROM `genres`", [], 'Genre');

// prepare an array of genres indexed by their ids
$genres_by_ids = [];
foreach ($genres as $genre) {
    $genres_by_ids[ $genre->id ] = $genre;
}

// prepare an array of ids of games
$game_ids = [];
foreach ($games as $game) {
    $game_ids[] = $game->id;
}

// prepare a query with count of $game_ids times ?
$sql = "SELECT *
        FROM `game_genre`
        WHERE `game_id` IN (".join(',', array_fill(0, count($game_ids), '?')).")
";

// run the query providing a value for every of the ?
$game_genres = select($sql, $game_ids);

foreach ($game_genres as $game_genre) {

    // pick one element from the $games_by_ids array
    // using the value of the game_id property of this
    // particular connection as the key
    $game = $games_by_ids[ $game_genre->game_id ];

    // pick one element from the $genres_by_ids array
    // using the value of the genre_id property of this
    // particular connection as the key
    $genre = $genres_by_ids[ $game_genre->genre_id ];

    // add the found genre into this game
    $game->addGenre($genre);
}


// OUTPUT:
//-------------

// send JSON header
header('Content-type: application/json');

// output JSON string
echo json_encode($games);