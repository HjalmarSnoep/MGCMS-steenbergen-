<?php
//header('Access-Control-Allow-Origin: snoep.at');
//header('Access-Control-Allow-Origin: makinggames.org');
header('Content-Type: text/html; charset=utf-8'); // this is needed to get special characters right.
ini_set('memory_limit', '512M'); // this is to allow GD to process really LARGE files when exploded!
// we are going to split them into 1024x1024 files here!

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
$path_to_data="../data"; // this is the protected data-directory..
$path_to_uploads=$path_to_data."/kaart/";
$path_to_original_uploads=$path_to_data."/kaart_originals/";
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
print_r($_POST);
print_r($_FILES);
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
		 //move_uploaded_file($_FILES["file"]["tmp_name"],$filename);
		 //$cleaned_input["media"]="somephp.php?".$asset_name;
		 // we don't MOVE it, we use GD!
		 
		 // Get the image info from the tmp_image_name
		 $tmp_image_name=$_FILES["file"]["tmp_name"];
		 if(function_exists('getimagesize'))
		 {
			$image_info = getimagesize($tmp_image_name);
			$width = $new_width = $image_info[0];
			$height = $new_height = $image_info[1];
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
			// now create as many tiles as needed for this image..
			// save this image as PNG in originals and as JPG too..
			for($x=0;$x<$width;$x+=1024)
			{
				for($y=0;$y<$height;$y+=1024)
				{
					// create and image of 1024x1024 and save it.
					$box_w=1024;
					$box_h=1024;
					$new_image = imagecreatetruecolor($box_w, $box_h);
					imagecopyresampled($new_image, $image, 0, 0, $x, $y, $box_w, $box_h, $box_w, $box_h);
					// Save the new image in the uploads dir as a PNG!
					$filename=$path_to_uploads."slot_".intval($x/1024)."_".intval($y/1024).".jpg";
					imagejpeg($new_image, $filename,50); //quality 0-100
					imagedestroy($new_image); // Free up memory
				}
			}
			// always keep the original as png!
			//imagepng($image,$path_to_original_uploads.$asset_id."_original.png"); // this is safe?
			
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
	//setInterval(goBack,500);
	function goBack()
	{
		location.href="index.php";
	}
</script>
</body>
</html>