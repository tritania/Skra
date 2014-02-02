<?php
$username = $_GET['username'];
$password = $_GET['pass'];
$email = $_GET['email'];
$name = $_GET['name'];
$weight = $_GET['weight'];
$height = $_GET['height'];
$age = $_GET['age'];

$key = 'PHP_SUCKS';
$cipher = "MCRYPT_SERPENT_256";
$mode = "MCRYPT_MODE_CBC";

function m_encrypt($password, $key, $cipher, $mode){
 return (string) 
  base64_encode(
   mcrypt_encrypt(
    $cipher,
    substr(md5($key),0,mcrypt_get_key_size($cipher, $mode)),
    $data,
    $mode,
    substr(md5($key),0,mcrypt_get_block_size($cipher, $mode))
   )
  );
}
$newpass = m_encrypt($password, $key, $cipher, $mode);
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
