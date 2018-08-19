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
// to get the list, we must travel into the dir data/images
$
// to get the list, we must travel into the dir data/images
$path_to_games="D:/xampp/htdocs/projects/HTML5/hybridGames/wwjw/data/games/"; // this is my test environment right now.
$whitelist = array(
    '127.0.0.1',
    '::1'
);

if(!in_array($_SERVER['REMOTE_ADDR'], $whitelist)){
   $path_to_games="../../game/data/games"; // this is probably what it should be online..
}

$path_to_data="../data"; // for trash!

if(isset($_GET["id"]))
{
	$id_to_delete=preg_replace("/[^a-zA-Z0-9]/", "", $_GET["id"]); // superclean!
}

// move the img file to the trash!

// move the txt file to the trash if it's there at all.
$filename=$path_to_games.$id_to_delete.".txt";
if (file_exists($filename)) 
{
	$filename_trash=$path_to_data."/trash/games_".$id_to_delete.".txt";
	rename ($filename,$filename_trash); // deleted..
}else
{
	echo("<hr>");
	echo("Item bestaat niet: ".$id_to_delete."<br>");
	echo("<a href='index.php'>Terug naar de lijst</a>");
	echo("<hr>");
	exit(1);
}

echo("<hr>");
echo("Succesvol verwijderd: ".$id_to_delete."<br>");
echo("<a href='index.php'>Terug naar de lijst</a>");
echo("<hr>");

?>
</body>
</html>