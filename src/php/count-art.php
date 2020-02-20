<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: X-PINGOTHER, Content-Type');
header('Access-Control-Max-Age: 86400');
header('Vary: Accept-Encoding, Origin');
header('Keep-Alive: timeout=2, max=100');
header('Connection: Keep-Alive');
include './conn.php';
$language = isset($_GET['language']) ? $_GET['language'] : 'en';


$sql_count = "
SELECT COUNT(*) as count FROM `news` WHERE `language`='{$language}';
";
$res_count = query($sql_count);
confirm($res_count);
$news_count= fetch_assoc($res_count);
$news_count=$news_count['count'];
echo $news_count;