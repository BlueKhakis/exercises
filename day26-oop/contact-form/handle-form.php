<?php

// make sure we have functions for database access
require_once 'DBBlackboxV2.php';

// new, empty, default contact message
$contact_message = [
    'subject' => null,
    'text' => null,
    'is_robot' => 1,
    'topic' => null,
    'newsletter' => 0,
    'response' => 'none'
];

// update it with whatever came in the request: $_POST
$contact_message['subject']     = $_POST['subject'] ?? $contact_message['subject'];
$contact_message['text']        = $_POST['text'] ?? $contact_message['text'];
$contact_message['is_robot']    = $_POST['is_robot'] ?? $contact_message['is_robot'];
$contact_message['topic']       = $_POST['topic'] ?? $contact_message['topic'];
$contact_message['newsletter']  = $_POST['newsletter'] ?? $contact_message['newsletter'];
$contact_message['response']    = $_POST['response'] ?? $contact_message['response'];

// same as one of the lines above
if (isset($_POST['subject'])) {
    $contact_message['subject'] = $_POST['subject'];
} else {
    $contact_message['subject'] = $contact_message['subject'];
}

// save the contact message into the database
$id = insert($contact_message);


// redirect to somewhere else
header('Location: display-form.php');

// no HTML code anywhere