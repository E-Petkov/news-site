<?php
$conn = mysqli_connect('localhost', 'root', '', 'news-site');
mysqli_query($conn, "SET NAMES UTF8");

function row_count($result)
{
    return mysqli_num_rows($result);
}

function escape($string)
{
    global $conn;
    return mysqli_real_escape_string($conn, $string);
}

function query($query)
{
    global $conn;
    return mysqli_query($conn, $query);
}

function confirm($result)
{
    global $conn;
    if (!$result) {
        die('Query failed: ' . mysqli_error($conn));
    }
}

function fetch_array($result)
{
//    global $conn;
    return mysqli_fetch_array($result);
}

function fetch_assoc($result)
{
//    global $conn;
    return mysqli_fetch_assoc($result);
}

function clean($string)
{
    return htmlentities($string);
}