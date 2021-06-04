<?php

require_once 'Dice.php';

$nr_of_dice = 1;

if (isset($_GET['nr_of_dice'])) {
    $nr_of_dice = $_GET['nr_of_dice'];
}

$nr_of_sides = 6;

if (isset($_GET['nr_of_sides'])) {
    $nr_of_sides = $_GET['nr_of_sides'];
}

$dice = [];

for ($i = 0; $i < $nr_of_dice; $i++) {
    
    $die = new Dice($nr_of_sides);

    $die->roll();

    $dice[] = $die;
}

?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Dice throwing</title>

    <style>
        .dice {
            display: flex;
            flex-flow: row wrap;
        }
        .dice .die {
            width: 2em;
            height: 2em;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid black;
            border-radius: 0.125em;
            margin: 0.25em;
        }

    </style>
</head>
<body>
    
    <form action="" method="get">

        <input type="text" name="nr_of_dice" value="<?= htmlspecialchars($nr_of_dice) ?>">

        <select name="nr_of_sides">
            <option value="4"<?= $nr_of_sides == 4 ? ' selected' : '' ?>>4</option>
            <option value="6"<?= $nr_of_sides == 6 ? ' selected' : '' ?>>6</option>
            <option value="8"<?= $nr_of_sides == 8 ? ' selected' : '' ?>>8</option>
            <option value="10"<?= $nr_of_sides == 10 ? ' selected' : '' ?>>10</option>
            <option value="20"<?= $nr_of_sides == 20 ? ' selected' : '' ?>>20</option>
        </select>
    
        <input type="submit" value="roll the dice!">

    </form>

    <div class="dice">
    
        <?php 
        
            foreach ($dice as $die) {
                echo $die;
            }
        
        ?>

    </div>

</body>
</html>