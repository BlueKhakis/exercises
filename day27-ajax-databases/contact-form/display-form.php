<?php

// make sure we have functions for database access
require_once 'DBBlackboxV2.php';
require_once 'ContactMessage.php';

class FlashedData
{
    // flashed data is part of the FlashedData class, no longer just a global variable
    public static $data = null;

    public static function getFlashedData()
    {
        if (static::$data === null) {
            static::$data = [];

            if (isset($_SESSION['flashed_data'])) {
                static::$data = $_SESSION['flashed_data'];
                unset($_SESSION['flashed_data']);
            }
        }

        return static::$data;
    }
}

/**
 * gets the value submitted in the previous request by its name
 *
 * allows to pass an optional second argument which is returned
 * if such an element does not exist in old data
 */
function old($name, $default_value = null)
{
    $flashed_data = FlashedData::getFlashedData();

    if (isset($flashed_data[$name])) {
        return $flashed_data[$name];
    } else {
        return $default_value;
    }
}

function getFlashedMessages()
{
    $flashed_messages = [];

    if (isset($_SESSION['error_messages'])) {
        $flashed_messages = $_SESSION['error_messages'];
        unset($_SESSION['error_messages']);
    }

    return $flashed_messages;
}

// start the session
session_start();

// get success message from session and delete it: *flashing*
if (isset($_SESSION['success_message'])) {
    $success_message = $_SESSION['success_message'];
    unset($_SESSION['success_message']); // delete success_message from the session
}

// $error_messages = [];
// if (isset($_SESSION['error_messages'])) {
//     $error_messages = $_SESSION['error_messages'];
//     unset($_SESSION['error_messages']); // delete error_messages from the session
// }
// now I have $error_messages array (empty or not)


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

    $contact_message = find($contact_message_id, 'ContactMessage');

} else {
    // we want to work with new, empty, default data

    // new, empty, default contact message:
    $contact_message = new ContactMessage;
}

// now we are sure we have the following variables
// $contact_message_id
// $is_edit
// $contact_message = []
// ... and so we don't need to think about the code above any more


function ___($text) {
    return htmlspecialchars($text);
}


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact form</title>

    <style>
        form {
            display: flex;
            flex-direction: column;
        }

        label {
            margin-bottom: 1em;
        }
    </style>

</head>
<body>

    <?php if ($is_edit) : ?>
        <h1>Editing record <?= $contact_message_id ?></h1>
    <?php else : ?>
        <h1>Creating a new record</h1>
    <?php endif; ?>

    <?php if (isset($success_message)) : ?>
        <div class="message">
            <strong><?= $success_message ?></strong>
        </div>
    <?php endif; ?>


    <?php foreach (getFlashedMessages() as $error_message) : ?>
        <div class="message message--error">
            <?= $error_message ?>
        </div>
    <?php endforeach; ?>

    <form action="handle-form.php<?= $is_edit ? '?id='.$contact_message_id : '' ?>" method="post">

        <label>
            Subject:<br>
            <input type="text" name="subject" value="<?= htmlspecialchars(old('subject', $contact_message->subject)) ?>">
        </label>

        <label>
            Text:<br>
            <textarea name="text" id="" cols="30" rows="10"><?= htmlspecialchars(old('text', $contact_message->text)) ?></textarea>
        </label>

        <input id="is_robot_input" type="hidden" name="is_robot" value="1">

        <label>
            <button onclick="document.getElementById('is_robot_input').value = 0; return false;">I am not a robot</button>
        </label>

        <label>
            Topic:<br>

            <select name="topic">
                <option value="" <?= old('topic', $contact_message->topic) == '' ? ' selected' : '' ?>>-- please select one --</option>
                <option value="proposal" <?= old('topic', $contact_message->topic) == 'proposal' ? ' selected' : '' ?>>Feature proposal</option>
                <option value="bug" <?= old('topic', $contact_message->topic) == 'bug' ? ' selected' : '' ?>>Bug report</option>
                <option value="other" <?= old('topic', $contact_message->topic) == 'other' ? ' selected' : '' ?>>Other</option>
            </select>

        </label>

        <label>
            Want a newsletter:<br>

            <input type="hidden" name="newsletter" value="0">
            <input type="checkbox" name="newsletter" value="1" <?= old('newsletter', $contact_message->newsletter) ? ' checked' : '' ?>>
        </label>

        <label for="">
            How should we contact you?<br>

            <input type="radio" name="response" value="email" <?= old('response', $contact_message->response) == 'email' ? ' checked' : '' ?>>Respond by email<br>
            <input type="radio" name="response" value="phone" <?= old('response', $contact_message->response) == 'phone' ? ' checked' : '' ?>>Respond by phone<br>
            <input type="radio" name="response" value="none" <?= old('response', $contact_message->response) == 'none' ? ' checked' : '' ?>>Don't respond<br>
        </label>

        <input type="submit" value="<?= $is_edit ? 'Update' : 'Insert' ?>">

    </form>

</body>
</html>