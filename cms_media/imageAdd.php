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
$path_to_uploads="../cms_images/";
$path_to_original_uploads="../cms_images_originals/";
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
			// Create a new, resized image if too big in either dimension.
			$box_w=854;
			$box_h=557;
			$f=1;
			
			// ALWAYS SCALE IT TO THE RIGHT SIZE, USING COVER
//			if($width>$box_w && $height>$box_h) // if BOTH too big!
//			{
				$fx= $box_w /$width ;
				$fy= $box_h /$height ;
				$f=$fy;
				if($fx>$f)$f=$fx; // choose the largest so that we have NO whitespace.
				// picture is too big, scale it down
				$new_width = $width*$f;
				$new_height = $height*$f;
				$ox=(int)(($box_w-$new_width)/2);
				$oy=(int)(($box_h-$new_height)/2);
				// one of them is allready right..
				//$new_width  = $box_w; // I can't JUST do that, it would change aspect!
				//$new_height  = $box_h;
//			}else
//			{
//				
//			}

			$new_image = imagecreatetruecolor($box_w, $box_h);
			imagealphablending( $new_image, false ); // make it transparant.. (which is a bit too bad in the case of a jpeg!)
			imagesavealpha( $new_image, true );// make it transparant.. (which is a bit too bad in the case of a jpeg!)
			
//			imagecopyresampled($new_image, $image, $ox, $oy, 0, 0, $new_width, $new_height, $width, $height);
			imagecopyresampled($new_image, $image, $ox, $oy, 0, 0, $new_width, $new_height, $width, $height);
			// Save the new image in the uploads dir as a PNG!
				
			while($file_might_be_there)
			{
				$asset_id=generateRandomId(10); // length of id == 6
				// make random letters Uppercase!
				$filename=$path_to_uploads.$asset_id.".png";
				if(!file_exists($filename)) // not an existing file, then output blank!.
					$file_might_be_there=false;
			}
			$asset_name=$asset_id;
			imagepng($new_image, $filename); // this is safe!
			
			
			// always keep the original as png!
			
			imagepng($image,$path_to_original_uploads.$asset_id."_original.png"); // this is safe?
			
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