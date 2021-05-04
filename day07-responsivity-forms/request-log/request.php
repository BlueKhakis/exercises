<?php

// prepare text to write into the text file
$text = [];
$text[] = '';
$text[] = 'Request time: '.date('Y-m-d H:i:s');
$text[] = 'Request method: '.$_SERVER['REQUEST_METHOD'];

$text[] = 'GET data:';

foreach ($_GET as $key => $value) {
    $text[] = '  '.$key.': '.(is_string($value) ? $value : json_encode($value));
}

$text[] = 'POST data:';

foreach ($_POST as $key => $value) {
    $text[] = '  '.$key.': '.(is_string($value) ? $value : json_encode($value));
}

$text[] = '';
$text[] = '---------------------';

// open a text file for adding text
$fh = fopen('request-log.txt', 'a');

// write the text lines into a text file
foreach ($text as $line) {
    fwrite($fh, $line . "\n");
}

// close the text file
fclose($fh);

// output information for the user
echo 'Request logged.';