<?php
$password = $_GET['password'];
$username = $_GET['username'];
$mysqli = new mysqli("localhost", "SKRA", "PASSWORD", "LOGINDATA");

$key = 'PHP_SUCKS';
$cipher = "MCRYPT_SERPENT_256";
$mode = "MCRYPT_MODE_CBC";


if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}

if ($result = $mysqli->query("SELECT PASSWORD FROM LOGIN WHERE USERNAME ='" . $username ."'")) 
{
    $row = mysqli_fetch_row($result);
    $decrypted_password = m_decrypt($row[0], $key, $cipher, $mode);
    if ($decrypted_password == $row[0]) 
    {
		echo '1'; //valid
	} 
	else 
	{
		echo '2'; //invalid
		echo $decrypted_password;
	}

    $result->close();
}
$mysqli->close();
function m_decrypt($data, $key, $cipher, $mode){
 return (string)
   mcrypt_decrypt(
    $cipher,
    substr(md5($key),0,mcrypt_get_key_size($cipher, $mode)),
    base64_decode($data),
    $mode,
    substr(md5($key),0,mcrypt_get_block_size($cipher, $mode))
   );
}
?>
