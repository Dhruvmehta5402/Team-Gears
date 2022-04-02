<?php

$connect = mysql_connect('localhost', 'Dhruvmehta5402', 'Gears2022', 'mysql');
 
if (!$connect) {
   die('Connection Failed: ' . mysql_error());
}
mysql_select_db("Dhruvmehta5402/ScopeSubside", $connect);
 
 
 
$location_info = "INSERT INTO location VALUES ('$_POST[name]', '$_POST[address]', '$_POST[purpose]')";
 
if (!mysql_query($location_info, $connect)) { die('Error: ' . mysql_error()); }
 
echo "Your location information was added to the database.";
 
mysql_close($connect);


?>