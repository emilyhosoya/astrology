<?php
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "root";
$dbname = "astrology";
	//Connect to MySQL Server
mysql_connect($dbhost, $dbuser, $dbpass);
	//Select Database
mysql_select_db($dbname) or die(mysql_error());
	// Retrieve data from Query String
$first_sign = $_GET['first_sign'];
$second_sign = $_GET['second_sign'];
	// Escape User Input to help prevent SQL Injection
$first_sign = mysql_real_escape_string($first_sign);
$second_sign = mysql_real_escape_string($second_sign);
	//build query
$sql = "SELECT * FROM 'reports' WHERE 
	first_sign = '$first_sign' AND
	second_sign = '$second_sign'";
	//Execute query
$qry_result = mysql_query($query) or die(mysql_error());

	//Build Result String
$display_string = "<table>";
$display_string .= "<tr>";
$display_string .= "<th>first_sign</th>";
$display_string .= "<th>second_sign</th>";
$display_string .= "<th>report</th>";
$display_string .= "</tr>";

	// Insert a new row in the table for each person returned
while($row = mysql_fetch_array($qry_result)){
	$display_string .= "<tr>";
	$display_string .= "<td>$row[first_sign]</td>";
	$display_string .= "<td>$row[second_sign]</td>";
	$display_string .= "<td>$row[report]</td>";
	$display_string .= "</tr>";
	
}
echo "Query: " . $query . "<br />";
$display_string .= "</table>";
echo $display_string;
?>