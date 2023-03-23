<?php

$dbhost = "localhost";
$dbhuser = "root";
$dbpass = "";
$dbname = "login_db";

if(!$con=mysqli_connect($dbhost,$dbhuser,$dbpass,$dbname))
{

	    die("failed to connect!");
}