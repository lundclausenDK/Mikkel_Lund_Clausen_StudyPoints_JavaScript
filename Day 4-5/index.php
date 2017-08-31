<?php
require ("data/array.php");

if (isset($_POST["data"])) {
    global $persons;

    $data = $_POST["data"];

    array_push($persons, array("first_name" => $data));
}

?>

<!DOCTYPE html>
<html>
    <head></head>
    <body>

        <div id="app"></div>

        <hr>

        <div id="time"></div>

        <hr>

        <div id="persons_container"></div>
        <input type="submit" value="Load all persons" id="persons_button">

        <hr>

        <input type="text" id="newname_field">
        <input type="submit" value="Add new person" id="newname_button">

        <script src="js/script.js"></script>
    </body>
</html>