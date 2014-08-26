<!DOCTYPE html>
<html>
<body>

<h1>My first PHP page</h1>

<?php
// Create connection
$link = mysqli_connect('localhost', 'root', 'root', 'astrology');

// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$result = mysqli_query($link,"SELECT first_sign,second_sign,report FROM reports");

while($row = mysqli_fetch_array($result)) {
  echo $row['first_sign'] . " and " . $['second_sign'] . " " . $row['report'];
  echo "<br>";
}

mysqli_close($link);

?>

</body>
</html>