<?php 
	var_dump($_POST);
?>

<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<?php 
		if( isset($_POST['nick'] ) && strlen( $_POST['nick'] ) > 0 ):
	?>

		<h1> Hello <?= $_POST['nick']; ?> </h1>

	<?php endif; ?>

	<form method="post" action="">
		<input type="text" name="nick">

		<input type="submit" name="submit" value="submit">	
	</form>

</body>
</html>