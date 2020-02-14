<?php

header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: X-PINGOTHER, Content-Type');
header('Access-Control-Max-Age: 86400');
header('Vary: Accept-Encoding, Origin');
header('Keep-Alive: timeout=2, max=100');
header('Connection: Keep-Alive');

include('./conn.php');

//        var_dump($_POST);
$topic = clean(
    $_POST['topic']);
$topic = escape($topic);
$description = clean(
    $_POST['description']);
$description = escape($description);
$text =$_POST['text'];
$text = escape($text);
$refs = clean(
    $_POST['refs']);
$refs = escape($refs);
$date = clean(
    $_POST['date']);
$date = escape($date);
$id = clean(
    $_POST['id']);
$id = escape($id);

$sql = "UPDATE `news` SET `topic` = '$topic', `description`='$description', `text` = '$text',`refs` = '$refs',`date` = '$date' WHERE (`id` = '$id')";
$result = query($sql);
confirm($result);
