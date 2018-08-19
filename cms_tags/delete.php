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


$filename="../data/tags/tags.json";
$json=file_get_contents($filename);
$tags=json_decode($json,true);

if(isset($_GET["id"]))
{
	$id_to_delete=preg_replace("/[^a-zA-Z0-9]/", "", $_GET["id"]); // superclean!
}

$found=false;
for($i=0;$i<count($tags);$i++)
{
	if($tags[$i]['id']==$id_to_delete)
	{
		unset($tags[$i]);
	}
}
file_put_contents ($filename,json_encode($tags)); // trying to write to ../data/data_strs is failing because of rights.
	
echo("<hr>");
echo("Succesvol verwijderd: ".$id_to_delete."<br>");
echo("<a href='index.php'>Terug naar de lijst</a>");
echo("<hr>");
?>
</body>
</html>