<?php 


echo 'Hello from arrays';
echo '<br/>';
echo '<br/>';

$array = [1, 2, 3];

var_dump($array);

echo '<br/>';

// associative array
$array = [
	'a' => 1,
	'b' => 2,
	'c' => 3
];

var_dump($array);
echo '<br/>';


$array = [];
var_dump($array);
echo '<br/>';

// $array = array();
// var_dump($array);
// echo '<br/>';


// for($i = 0; $i < 10; $i++){
// 	$array[] = 'new value';	
// }

$array[] = 'new value';	
$array[] = 'new value2';

var_dump($array);
echo '<br/>';

var_dump($array[0]);
echo '<br/>';


echo count($array);

echo '<hr/>';

for($i = 0; $i < count($array); $i++){
	echo '#'. $i . ' - '; 

	echo $array[$i];
	echo '<br/>';
}


echo '<hr/>';


$array['green_one'] = 'Pear';
var_dump($array);

echo '<br/>';

foreach( $array as $whatever ) {
	echo $whatever; 
	echo '<br/>';	
}

echo '<hr/>';

foreach( $array as $index => $item){
	echo '#'. $index . ' - ' . $item . '<br/>'; 
}


echo '<hr/>';

$numbers = [3457,3456,3452];

 
var_dump( min($numbers) );

sort($numbers);

var_dump( $numbers );










