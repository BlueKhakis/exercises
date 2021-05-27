<?php

// 1.
$name_outside_of_function = 'Jan';

// 3.
$birth_month = '06';

// 4.
$birth_day = '05';

// 5.
$birth_date = $birth_month . '-' . $birth_day;

// 6.
var_dump($birth_date);

// 7.
define('DATE_OF_BIRTH_FORMAT', 'm-d');

// 8., 9.
$today = date(DATE_OF_BIRTH_FORMAT);

// 10.
var_dump($today);

// 11.
$birth_year = 1982;

// 12.
$this_year = date('Y');

// 13.
if ($birth_date < $today) {
    echo $name_outside_of_function . ' turned ' . ($this_year - $birth_year) . ' this year';
} else {
    echo "{$name_outside_of_function} will turn " . ($this_year - $birth_year) . " this year";
}

// 14.
function getBirthdaySentence($name_inside_of_function, $birth_year, $year)
{
    // 15.
    $sentence = "In the year {$year} {$name_inside_of_function} turned " . ($year - $birth_year) . ".";

    return $sentence;
}

// 16., 17.
for ($year = $birth_year; $year <= $this_year; $year++) {
    echo getBirthdaySentence( $name_outside_of_function, $birth_year, $year ) . '<br>';
}


for ($year = 1937; $year <= $this_year; $year++) {
    echo getBirthdaySentence( 'Morgan Freeman', 1937, $year ) . '<br>';
}