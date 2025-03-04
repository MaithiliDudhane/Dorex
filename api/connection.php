<?php
//file path - E:\XAMPP\htdocs\api

//$link=mysqli_connect("mysoftway.com","dkte","Dkte#87","dbdkteapp");
//test
// $clientid='1f1a2d77-666c-4032-bf9b-feb3f9868ad1';
// $secret='96664f04-8f39-4016-8f37-7714906527a2';
// $dunzolink="https://apis-staging.dunzo.in";

//production
// $clientid='7d002ba1-1384-4747-8bbc-33bb05c8cd84';
// $secret='5c090d9c-2272-464b-a0d4-1f115182ff3e';
// $dunzolink="https://api.dunzo.in";

$link=mysqli_connect("localhost","root","","dbsplitscreenapplication");

// Check connection

if (mysqli_connect_errno())

  {

  echo "Failed to connect to MySQL: " . mysqli_connect_error();

  }




mysqli_select_db($link,"dbsplitscreenapplication");
	

?>