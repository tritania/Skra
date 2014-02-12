<?php
$password = $_GET['password'];
$username = $_GET['username'];
$mysqli = new mysqli("localhost", "SKRA", "PASSWORD", "LOGINDATA");



if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}

if ($result = $mysqli->query("SELECT PASSWORD FROM LOGIN WHERE USERNAME ='" . $username ."'")) 
{
    $row = mysqli_fetch_row($result);
    if ($password == $row[0]) 
    {
		echo '1'; //valid
	} 
	else 
	{
		echo '2'; //invalid
	}

    $result->close();
}
$mysqli->close();
?>
