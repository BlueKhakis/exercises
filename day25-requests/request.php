<?php 

var_dump( $_GET );

echo '<hr/>';


// longest one using if and else

if( isset($_GET['name']) ){

	$name = $_GET['name'];

} else {

	$name = null;

}

// shorter one using ternary operator

// $name = (condition) ? value if condition is true : value if condition is false;
$name = isset($_GET['name']) ? $_GET['name'] : null;

// the shortest one using coalescing operator

$name = $_GET['name'] ?? null; // love this!






var_dump( $name );	

echo '<hr/>';

var_dump($_POST);


// $array = array(
//     'foo' => 'abc',
//     // 'bar' => 'abc',
//     'key' => ''
// );
 
// var_dump( isset($array['foo']) ); // true
// var_dump( isset($array['bar']) ); // false
// var_dump( isset($array['key']) ); // false