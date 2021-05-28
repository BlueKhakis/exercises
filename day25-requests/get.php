<?php 
	$name = 'slavo';
	$surname = 'kozar';


	$query_string = http_build_query([
		'name' => $name,
		'surname' => $surname,
		'age' => 28
	]);

	// echo $query_string;	
?>


<!-- <a href="get.php?name=<?= $name; ?>&surname=<?= $surname ?>">Some cool link</a> -->

<a href="get.php?<?= $query_string ?>">Some cool link</a>



<?php 

$url = var_dump($_SERVER['REQUEST_URI']);

echo "<hr/>";



echo "<hr/>";

var_dump($_GET);

