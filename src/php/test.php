<?php
header('Access-Control-Allow-Origin: *');
include('./conn.php');
$sql = 'SELECT * FROM `news` ORDER BY `date` DESC';
$res = query($sql);
confirm($res);
if ($res->num_rows > 0) {
    $json_array = array();
    while ($row = fetch_assoc($res)) {
        $json_array[] = $row;
    }
    echo json_encode($json_array);
}

//$data = fetch_assoc($res);
//print_r($data);

//
//$data = [];
//$data['id'] = isset($_GET['id']) ? $_GET['id'] : 0;
//$data['title'] = "много дълъг текст";
//$data['date'] = date('%Y-%m-%d %H:%i');
//$data['description'] = "
// още по дълъг текстоще по дълъг текстоще по дълъг текстоще по дълъг текстоще по дълъг текст  още по дълъг текст още по дълъг текст
// още по дълъг текстоще по дълъг текстоще по дълъг текстоще по дълъг текстоще по дълъг текст  още по дълъг текст още по дълъг текст
// още по дълъг текстоще по дълъг текстоще по дълъг текстоще по дълъг текстоще по дълъг текст  още по дълъг текст още по дълъг текст
// още по дълъг текстоще по дълъг текстоще по дълъг текстоще по дълъг текстоще по дълъг текст  още по дълъг текст още по дълъг текст
//";

