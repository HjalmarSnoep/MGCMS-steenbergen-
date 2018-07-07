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
$id_to_free="";
if(isset($_GET["id"]))
{
	$id_to_free=preg_replace("/[^a-zA-Z0-9]/", "", $_GET["id"]); // superclean!
}
$lock_name=$path_to_data."/locks/".$id_to_free.".txt";
if(file_exists($lock_name))
{
// there is still a lock on this file.. remove it!
	unlink($lock_name);
}
echo "canceled editing";

?>
<script>
	setTimeout(goBack,500);
	function goBack()
	{
		location.href="index.php";
	}
</script>
</body>
</html>