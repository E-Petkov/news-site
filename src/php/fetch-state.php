<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: X-PINGOTHER, Content-Type');
header('Access-Control-Max-Age: 86400');
header('Vary: Accept-Encoding, Origin');
header('Keep-Alive: timeout=2, max=100');
header('Connection: Keep-Alive');
include('./conn.php');
//$sql = 'SELECT * FROM `news` ORDER BY `id` DESC';

//
//$sql1 = "SELECT
//            COUNT(*)
//        as count FROM
//            `news`
//        WHERE
//            `language` = 'en'";
//
//
//$result1 = query($sql1);
//confirm($result1);
//$news_count = $result1['count'];

$language = $_POST['language'];
if (!$language) {
    $language = 'en';
}
$sql = "SELECT 
    *
FROM
    `news`
WHERE
    `language` = '{$language}'
ORDER BY `id` DESC
LIMIT 0 , 10";
$res = query($sql);
confirm($res);
if ($res->num_rows > 0) {
    $json_array = array();
    while ($row = fetch_assoc($res)) {
        $json_array[] = $row;
    }

    echo json_encode($json_array);
}








//$sql1 = 'SELECT * FROM `news`';
// ORDER BY `id` DESC LIMIT 0,10;';
//$result1 = query($sql1);
//confirm($result1);
//print_r($result1);

//if ($result1->num_rows > 0) {
//    $json_array = array();
//    while ($row = fetch_array($result1)) {
//        $json_array[] = $row;
//    }
//    echo json_encode($json_array);
//}
//
//$data = fetch_assoc($result1);
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

