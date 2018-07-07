<?php
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
$path_to_data="../data";
$path_to_uploads="../data/huizen/";
/*
Array
(
    [file] => Array
        (
            [name] => 
            [type] => 
            [tmp_name] => 
            [error] => 4
            [size] => 0
        )

)
*/
//print_r($_POST);
//print_r($_FILES);
function generateRandomId($length = 10) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, strlen($characters) - 1)];
    }
    return $randomString;
}
if( isset($_FILES["file"]) )
{
	echo("<hr>");
	echo("UPLOAD");
	echo("<hr>");
	if ($_FILES["file"]["error"] > 0) 
	{
		if($_FILES["file"]["error"]==4)
		{
			// nothing uploaded.
		}else
		{
		   $cleaned_input["file_error"]="Error: " . $_FILES["file"]["error"] . "<br>";
		   $cleaned_input[$f]="";
		   echo("<hr>");
			echo("ERROR UPLOADING FILE: "+$cleaned_input["file_error"]);
			echo("<hr>");
		   // there is no (internal) media what so ever..
		}
	} else {
		$r="";
		$r.="Upload: " . $_FILES["file"]["name"] . "<br>";
		$r.= "Type: " . $_FILES["file"]["type"] . "<br>";
		$r.= "Size: " . ($_FILES["file"]["size"] / 1024) . " kB<br>";
		$r.= "Stored in: " . $_FILES["file"]["tmp_name"];
		$cleaned_input["media"]=$r;
		// new_name for asset:
		
		$file_might_be_there=true;
		$type=$_FILES["file"]["type"];
		 
		 // Get the image info from the tmp_image_name
		 $tmp_image_name=$_FILES["file"]["tmp_name"];
		 if(function_exists('getimagesize'))
		 {
			$image_info = getimagesize($tmp_image_name);
			$width = $image_info[0];
			$height =$image_info[1];
			$type = $image_info[2];
			echo("Uploaded media analysed by GD seem to be:".$width."x".$height." and of type ".$type);
			switch ($type)
			{
				case IMAGETYPE_JPEG:
					$image = imagecreatefromjpeg($tmp_image_name);
					break;
				case IMAGETYPE_GIF:
					$image = imagecreatefromgif($tmp_image_name);
					break;
				case IMAGETYPE_PNG:
					$image = imagecreatefrompng($tmp_image_name);
					break;
				default:
					die('Error loading '.$tmp_image_name.' - File type '.$type.' not supported');
			}
			// Create a new, resized image if too big in either dimension.
			$f=1;
			// no scaling just save as PNG!
				
			while($file_might_be_there)
			{
				$asset_id=generateRandomId(10); // length of id == 6
				// make random letters Uppercase!
				$filename=$path_to_uploads.$asset_id.".png";
				if(!file_exists($filename)) // not an existing file, then output blank!.
					$file_might_be_there=false;
			}
			$asset_name=$asset_id;
			imagealphablending( $image, false );
			imagesavealpha( $image, true );
			imagepng($image, $filename); // this is safe!
			
			// now we ALSO have to create a standard textfile!
			//"published","city","ly","naam","prijs","lx","rx","ry","w","h"
			$filename=$path_to_uploads.$asset_id.".txt";
			$nl="\n";
			$data_str="";
			$data_str.="id: ".$cleaned_input["id"].$nl;
			$data_str.="published: ".$cleaned_input["published"].$nl;
			$data_str.="rx: 0".$nl;
			$data_str.="ry: 0".$cleaned_input["y"].$nl;
			$data_str.="lx: 0".$cleaned_input["x"].$nl;
			$data_str.="ly: 0".$cleaned_input["y"].$nl;
			$data_str.="w: ".$width.$nl;
			$data_str.="h: ".$height.$nl;
			$data_str.="naam: ".$_FILES["file"]["name"].$nl;
			$data_str.="prijs: 250".$nl;
			$data_str.="city: 0".$nl;
			file_put_contents ($filename,$data_str); // trying to write to ../data/data_strs is failing because of rights.

		 }else
		 {
			echo("<hr>WARNING: GD has NOT been installed!<hr>");
		 }
	}
}



echo("<hr>");
echo("Upload succesvol opgeslagen..<br>");
echo("<a href='index.php'>Terug naar de lijst</a>");
echo("<hr>");
?>
<script>
	setInterval(goBack,500);
	function goBack()
	{
		location.href="index.php";
	}
</script>
</body>
</html>