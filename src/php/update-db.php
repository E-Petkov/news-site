<?php

header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: X-PINGOTHER, Content-Type');
header('Access-Control-Max-Age: 86400');
header('Vary: Accept-Encoding, Origin');
header('Keep-Alive: timeout=2, max=100');
header('Connection: Keep-Alive');

include('./conn.php');
//
//        var_dump($_POST);
//$data = mPrepareData(['topic', 'description', 'text', 'refs', 'date', 'language', 'id'], 'POST');
//
//$sql = "
//    UPDATE
//        `news`
//    SET
//        `topic` = '{$data['topic']}',
//        `description` = '{$data['description']}',
//        `text` = '{$data['text']}',
//        `refs` = '{$data['refs']}',
//        `date` =  '{$data['date']}' ,
//        `language` = '{$data['language']}'
//    WHERE
//        (`id` = {$data['id']})
//";
//
//$result = query($sql);
//confirm($result);

for ($i=1; $i<=1500; $i++) {
    for ($g=1; $g<=3; $g++) {
        if ($g==1) {
            $lang='en';
            $language='English';
        } elseif ($g==2) {
            $lang='de';
            $language='Deutsch';
        } else {
            $lang='bg';
            $language='Български';
        }
        $sql = "
        INSERT INTO
              `news` (
                  `topic`,
                  `description`,
                  `text`,
                  `language`,
                  `news_id`,
                  `refs`
               )
        VALUES (
              'Title {$i}',
              'Short Description {$i}',
              'News Content {$i} {$language}',
              '{$lang}',
              '{$i}',
              'google.{$lang}'
        );
        ";
        $result =query($sql);
        confirm($result);
    }
}