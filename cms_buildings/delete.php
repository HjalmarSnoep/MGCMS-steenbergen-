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
$path_to_uploads="../data/huizen/";
if(isset($_GET["id"]))
{
	$id_to_delete=preg_replace("/[^a-zA-Z0-9]/", "", $_GET["id"]); // superclean!
}

// move the img file to the trash!
$filename=$path_to_uploads.$id_to_delete.".png";
$filename_trash=$path_to_data."/trash/huizen_".$id_to_delete.".png";
rename ($filename,$filename_trash); // deleted..

// move the txt file to the trash if it's there at all.
$filename=$path_to_uploads.$id_to_delete.".txt";
if (file_exists($filename)) 
{
	$filename_trash=$path_to_data."/trash/huizen_".$id_to_delete.".txt";
	rename ($filename,$filename_trash); // deleted..
}



echo("<hr>");
echo("Succesvol verwijderd: ".$id_to_delete."<br>");
echo("<a href='index.php'>Terug naar de lijst</a>");
echo("<hr>");

?>
</body>
</html>