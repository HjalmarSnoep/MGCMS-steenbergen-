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
if($_POST['id']!='huizen') exit(1); // this is an error!
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
Array ( [id] => huizen [img] => 1MSRWzG2Ny.png [submit] => Vervangen door nieuwe bestand )
Array ( [file] => Array ( [name] => new_huis.png [type] => image/png [tmp_name] => D:\xampp\tmp\php957A.tmp [error] => 0 [size] => 21166 ) )
*/
//echo("<hr>");
//print_r($_POST);
//echo("<hr>");
//print_r($_FILES);
//echo("<hr>");
//exit();

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
				
			$asset_id=$_POST['img'];
			$filename=$path_to_uploads.$asset_id;
			if(file_exists($filename))
			{
				$asset_name=$asset_id;
				imagealphablending( $image, false );
				imagesavealpha( $image, true );
				imagepng($image, $filename); // this is safe!
			}else
			{
				echo("<hr>WARNING: NO SUCH FILE:".$asset_id."<hr>");
			}
			
		 }else
		 {
			echo("<hr>WARNING: GD has NOT been installed!<hr>");
		 }
	}
}

echo("<hr>");
echo("Upload succesvol opgeslagen onder ".$asset_id."<br>");
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