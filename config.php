<?php

$dbHost = 'Localhost';
$dbUsername = 'root';
$dbPassword = '';
$dbName = 'fizzstore';

$connection = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

if($connection->connect_errno){
    echo 'Error';
} else{
    echo 'Success trying to connect';
}

?>