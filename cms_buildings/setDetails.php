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
$fields=array("id","rx","ry","lx","ly","prijs","naam","w","h","city","published");
$path_to_data="../data";
$path_to_uploads="../cms_images/";
$path_to_original_uploads="../cms_images_originals/";
/*
Array
(
    [cat] => 0
    [city] => 0
    [points] => 15
    [bricks] => 150
    [media-url] => 
    [answer] => A
    [body] => Standaard pakt de hybrid alle divs als position absolute, that needs to change!
    [title] => drie zeemeerminnen
    [right] => Gut wat goed.
    [wrong] => wrong text!
    [A] => Een antwoord, gewoon, zoals iedereen dat kan A.
    [B] => Een antwoord, gewoon, zoals iedereen dat kan B.
    [C] => Een antwoord, gewoon, zoals iedereen dat kan C.
    [D] => Een antwoord, gewoon, zoals iedereen dat kan D.
    [hint] => Wat ben jij dom!
)
Array
(
    [media_upload] => Array
        (
            [name] => 
            [type] => 
            [tmp_name] => 
            [error] => 4
            [size] => 0
        )

)
*/

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
			case "published": 
				$cleaned_input[$f]="0";
				if(strtolower($_POST[$f])=="on") $cleaned_input[$f]="1"; //all supported labels for checkboxes, we use 1 and 0
				if(strtolower($_POST[$f])=="true") $cleaned_input[$f]="1"; 
				if(strtolower($_POST[$f])=="1") $cleaned_input[$f]="1"; 
				if(strtolower($_POST[$f])=="yes") $cleaned_input[$f]="1"; 
				if(strtolower($_POST[$f])=="checked") $cleaned_input[$f]="1";
			break;
			case "id":
				$cleaned_input[$f]=preg_replace("/[^a-zA-Z0-9]/", "", $_POST[$f]); // superclean!
			break;
			case "lx": 
			case "ly": 
			case "rx": 
			case "ry": 
			case "prijs": 
			case "w": 
			case "h": 
			case "city": 
				$cleaned_input[$f]=preg_replace("/[^0-9]/", "", $_POST[$f]); // numbers
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
			case "published": 
				$cleaned_input[$f]="0"; // checkboxes don't show up on not set, so only ONE default possible..
			break;
			case "id": // no id given ok, new data_str!
				$id="no_id";
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
// create the huizen file!
$filename=$path_to_data."/huizen/".$cleaned_input["id"].".txt";
// if file exists move to trash with datestamp!
if(file_exists($filename))
{
	$filename_trash=$path_to_data."/trash/huizen_".$cleaned_input["id"]."_".time().".txt"; // use time as unique id, you can later use filemtime to check actual date of creation if you want to revert.
	rename ($filename,$filename_trash); // deleted..
	// also delete any locks, becvause user is done editing.
	$lock_name=$path_to_data."/locks/".$cleaned_input["id"].".txt";
	if(file_exists($lock_name))
	{
		// there is still a lock on this file.. remove it!
		unlink($lock_name);
	}
}


$nl="\n";
$data_str="";
$data_str.="id: ".$cleaned_input["id"].$nl;
$data_str.="published: ".$cleaned_input["published"].$nl;
$data_str.="naam: ".$cleaned_input["naam"].$nl;
$data_str.="prijs: ".$cleaned_input["prijs"].$nl;
$data_str.="rx: ".$cleaned_input["rx"].$nl;
$data_str.="ry: ".$cleaned_input["ry"].$nl;
$data_str.="lx: ".$cleaned_input["lx"].$nl;
$data_str.="ly: ".$cleaned_input["ly"].$nl;
$data_str.="w: ".$cleaned_input["w"].$nl;
$data_str.="h: ".$cleaned_input["h"].$nl;
$data_str.="city: ".$cleaned_input["city"].$nl;

file_put_contents ($filename,$data_str); // trying to write to ../data/data_strs is failing because of rights.

echo("<hr>");
echo("Succesvol opgeslagen als: ".$cleaned_input["id"]."<br>");
echo("<a href='index.php'>Terug naar de lijst</a>");
echo("<hr>");
?>
<script>
	setTimeout(goBack,500);
	function goBack()
	{
		//location.href="index.php";
	}
</script>
</body>
</html>