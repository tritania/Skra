<?php
$password = $_GET['password'];
$username = $_GET['username'];
$con=mysqli_connect("127.0.0.1","SKRA","PASSWORD","LOGINDATA");
$mysqli = new mysqli("localhost", "SKRA", "PASSWORD", "LOGINDATA");

if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}

if ($result = $mysqli->query("SELECT PASSWORD FROM LOGIN WHERE USERNAME ='" . $username ."'")) 
{
    $row = mysqli_fetch_row($result);
    if ($row[0] == $password)
    {
		echo "Logged In!";
	}
	
	else 
	{
		echo "Wrong Password";
	}

    $result->close();
}
$mysqli->close();

	 
/*
$passwordhash = password_hash($password, PASSWORD_DEFAULT); 
if (password_verify($password, $hash)) {
    echo 'Password is valid!';
} else {
    echo 'Invalid password.';
}
*/
?>
