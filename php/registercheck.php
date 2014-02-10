<?php
$username = $_GET['username'];
$mysqli = new mysqli("localhost", "SKRA", "PASSWORD", "LOGINDATA");

if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}

if ($result = $mysqli->query("SELECT USERNAME FROM LOGIN WHERE USERNAME ='" . $username ."'")) 
{
    $row = mysqli_fetch_row($result);
    if ($row[0] == $username)
    {
		echo "0"; //need a new user
	}
	
	else 
	{
		echo "1"; //good to add to the database
	}
    $result->close();
}
$mysqli->close();

?>
