<?php
 
if (class_exists('GuzzleHttp\Client')) {
 
   	echo 'Guzzle HTTP client is ready to be used';

} else {

    echo 'Guzzle HTTP client is not loaded';
    
}