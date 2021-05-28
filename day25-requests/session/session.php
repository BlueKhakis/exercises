<?php 
	
session_start();

$_SESSION['name'] = 'Slavo';


// if( !isset( $_SESSION['start'] ) ){
if( empty( $_SESSION['start'] ) ){

	// do this only if `start` is not in a session
	$_SESSION['start'] = date('H:i:s');
}




var_dump($_SESSION);

echo '<hr/>';


echo $_SESSION['name'];