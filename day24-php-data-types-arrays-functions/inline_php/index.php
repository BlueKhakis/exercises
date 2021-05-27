<?php 

	$user = null;
	
	$user = 'John Doe';
	$age = 17;


	$vehicles = [
	    'Bicycle' => 50,
	    'Car' => 150,
	    'Train' => 110
	];

	$messages = [
	    'Preparing to do some stuff...',
	    'Doing amazing stuff...',
	    'Stuff is done.'
	];

	// $messages = [];

?>
<!DOCTYPE html>
<html>
<head>
	<title>Slavo's page</title>
</head>

<body>

<h1>Slavo's page</h1>


<table>
    <tr>
        <th>Means of transport</th>
        <th>Max. speed (km/h)</th>
    <tr>

    <?php 
    	foreach($vehicles as $vehicle => $speed){
    		echo "<tr><td>{$vehicle}</td><td>{$speed}</td></tr>";
    	}	
    ?>

    <?php 
    	foreach($vehicles as $vehicle => $speed):
	?>
		<tr>
			<td><?= $vehicle; ?></td>
			<td><?= $speed; ?></td>
		</tr>
	<?php 
		endforeach;
	?>
</table>


<?php if( count($messages) > 0 ): ?>

	<ul class="messages" style="padding: 1em; border: 1px solid black; margin: 1em;">

		<?php foreach ($messages as $message): ?>

	    	<li><?= $message ?></li>

		<?php endforeach; ?>
	   
	</ul>

<?php endif; ?>


<?php 

	if( $user != null) {
		echo "<p>Welcome {$user}</p>";
	}

?>

<?php if( $user != null ): ?>

	<p>Welcome <?php echo $user; ?></p>
	<p>Welcome <?= $user; ?></p>

	<?php if( $age >= 18 ): ?>

		It's great that you can vote!

	<?php elseif( $age == 17): ?>	

		I'll come next year!		

	<?php else: ?>	

		Wait few more years!

	<?php endif; ?>

<?php endif; ?>


<div>
	<div>Lorem</div>
	<div>Ipsum</div>
</div>

</body>
</html>