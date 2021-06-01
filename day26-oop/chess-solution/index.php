<?php

require_once 'Piece.php';
require_once 'Square.php';
require_once 'Board.php';

$black_pawn = new Piece('p');
$white_queen = new Piece('Q');

$a2 = new Square(1, 2);
$b2 = new Square(2, 2, $white_queen);
$c2 = new Square(3, 2, $black_pawn);
$d2 = new Square(4, 2);

$positions = [
    1 => [8 => 'r', 7 => 'p', 2 => 'P', 1 => 'R'],
    2 => [8 => 'n', 7 => 'p', 2 => 'P', 1 => 'N'],
    3 => [8 => 'b', 7 => 'p', 2 => 'P', 1 => 'B'],
    4 => [8 => 'q', 7 => 'p', 2 => 'P', 1 => 'Q'],
    5 => [8 => 'k', 7 => 'p', 4 => 'P', 1 => 'K'],
    6 => [8 => 'b', 7 => 'p', 2 => 'P', 1 => 'B'],
    7 => [8 => 'n', 7 => 'p', 2 => 'P', 1 => 'N'],
    8 => [8 => 'r', 7 => 'p', 2 => 'P', 1 => 'R'],
];

$board = new Board('rn1qkb1r/1p3ppp/p2pbn2/4p3/4P3/1NN1BP2/PPP3PP/R2QKB1R b KQkq - 0 8');

?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Chess</title>

    <style>
    body {
        background-color: #efefef;
    }
    .board {
        display: flex;
        flex-flow: row wrap;
        width: 24em;
    }
    .square {
        width: 3em;
        height: 3em;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .square.dark {
        background-color: #666666;
    }
    .square.light {
        background-color: #cccccc;
    }
    </style>
</head>
<body>

    <?php echo $board; ?>

</body>
</html>