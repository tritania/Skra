<?php
$username = $_GET['username'];
$password = $_GET['pass'];
$email = $_GET['email'];
$name = $_GET['name'];
$weight = $_GET['weight'];
$height = $_GET['height'];
$age = $_GET['age'];

$newpass = password_hash($password, PASSWORD_DEFAULT); 

$mysqli = new mysqli("localhost", "SKRA", "PASSWORD", "LOGINDATA");

if ($mysqli->connect_errno) 
{
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}

if ($result = $mysqli->query("INSERT INTO USERINFO VALUES ('". $email ."' , '". $name ."' , '". $weight ."' , '". $height ."' , '". $age . "')"));
if ($result = $mysqli->query("INSERT INTO LOGIN VALUES ('". $username ."' , '". $newpass ."')"));
$mysqli->close();

?>
