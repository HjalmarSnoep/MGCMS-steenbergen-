<?php
header('Content-Type: text/html; charset=utf-8'); // this is needed to get special characters right.
?>
<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
		<meta charset="utf-8">	
		<style>
			body{	
				font-family: sans-serif;
			}
		</style>
	</head>
	<body>
	
<?php
$path_to_data="../data";
if(isset($_GET["id"]))
{
	$id_to_delete=preg_replace("/[^a-zA-Z0-9]/", "", $_GET["id"]); // superclean!
}

// move the question file to the trash!
$filename=$path_to_data."/questions/".$id_to_delete.".txt";
$filename_trash=$path_to_data."/trash/questions_".$id_to_delete.".txt";
rename ($filename,$filename_trash); // deleted..


$lock_name=$path_to_data."/locks/".$id_to_delete.".txt";
if(file_exists($lock_name))
{
// there is still a lock on this file.. remove it!
	unlink($lock_name);
}

echo("<hr>");
echo("Succesvol verwijderd: ".$id_to_delete."<br>");
echo("<a href='index.php'>Terug naar de lijst</a>");
echo("<hr>");

?>
</body>
</html>