<?php

// make sure we have functions for database access
require_once 'DBBlackboxV2.php';

// determine if we are creating a new contact message
// or editing an existing one
if (isset($_GET['id'])) {
    // we are editing
    $contact_message_id = $_GET['id'];
    $is_edit = true;
} else {
    // we are creating
    $contact_message_id = null;
    $is_edit = false;
}

if ($is_edit) {
    // we want to work with data from the database

    $contact_message = find($contact_message_id);

} else {
    // we want to work with new, empty, default data

    // new, empty, default contact message:
    $contact_message = [
        'subject' => null,
        'text' => null,
        'is_robot' => 1,
        'topic' => null,
        'newsletter' => 0,
        'response' => 'none'
    ];
}

// now we are sure we have the following variables
// $contact_message_id
// $is_edit
// $contact_message = []
// ... and so we don't need to think about the code above any more



?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact form</title>

</head>
<body>

    <form action="handle-form.php" method="post">

        <label>
            Subject:<br>
            <input type="text" name="subject" value="<?= $contact_message['subject'] ?>">
        </label>

        <input type="submit" value="Send!">

    </form>

</body>
</html>