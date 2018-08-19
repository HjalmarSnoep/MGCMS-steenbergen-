<?php

// Please echo what you get for inspection.
//GET!
// set a standard HTML header.
//header('Access-Control-Allow-Origin: snoep.at');
//header('Access-Control-Allow-Origin: makinggames.org');
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
// clean these fields!
$fields=array("id","label");

$id="";
if(isset($_GET["id"])) $id=preg_replace("/[^a-zA-Z0-9]/", "", $_GET["id"]); // clean id in ONLY alphanumeric
//echo("id=".$id);

$filename="../data/tags/tags.json";
$json=file_get_contents($filename);
$tags=json_decode($json,true);


$cleaned_input=array(); // [] only from php 5.4
function generateRandomId($length = 10) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, strlen($characters) - 1)];
    }
    return $randomString;
}
foreach($fields as $f)
{
	if( isset($_POST[$f]) && $_POST[$f]!="")
	{
		
		switch($f)
		{
			case "id":
				$cleaned_input[$f]=preg_replace("/[^a-zA-Z0-9]/", "", $_POST[$f]); // superclean!
			break;
			default:
				// allow for " to be turned into &quot;
				$str=$_POST[$f];
				$cleaned_input[$f]=strip_tags($str,'<br><b><i><a><img>'); // cleaned HTML output.
			break;
		}
	}else
	{
		// fill in missing stuff!
		switch($f)
		{
			case "id": // no id given ok, new data_str!
				$cleaned_input["id"]=uniqid();
			break;
			default:
				$cleaned_input[$f]="";
		}
	}
}
// now test if there is files with this upload!

echo("<hr>");
foreach($cleaned_input as $key => $value)
{
	echo($key." => ".$value."<br>");
}
$found=false;
for($i=0;$i<count($tags);$i++)
{
	if($tags[$i]['id']==$cleaned_input["id"])
	{
		$tags[$i]['label']=$cleaned_input["label"];
		$found=true;
	}
}
if($found==false)
{
	// make a NEW one
	$tag=[];
	$tag['id']=preg_replace("/[^a-zA-Z0-9]/", "", strtolower($cleaned_input["label"]));// cleaner!
	$tag['label']=$cleaned_input["label"];
	array_push($tags,$tag);
}
file_put_contents ($filename,json_encode($tags)); // trying to write to ../data/data_strs is failing because of rights.

echo("<hr>");
echo("Succesvol opgeslagen als: ".$cleaned_input["id"]."<br>");
echo("<a href='index.php'>Terug naar de lijst</a>");
echo("<hr>");
?>
<script>
	setTimeout(goBack,50);
	function goBack()
	{
		//location.href="index.php";
	}
</script>
</body>
</html>