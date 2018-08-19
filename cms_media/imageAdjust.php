<?php
header('Content-Type: text/json; charset=utf-8'); // this is needed to get special characters right.
?>
<?php
// clean these fields!
$path_to_data="../data";
$path_to_uploads="../cms_images/";
$path_to_original_uploads="../cms_images_originals/";
/*
Array
(
    {"id":"05gzLBzB7J"}

)
*/
$id="";
if(isset($_GET["id"])) $id= preg_replace("/[^a-zA-Z0-9]+/", "", $_GET["id"]);
if(isset($_POST["id"])) $id= preg_replace("/[^a-zA-Z0-9]+/", "", $_POST["id"]);

function exitWithError($msg)
{
	global $result;
	$result["error"]=$msg;
	$result["succes"]=false;
	echo json_encode($result);
	exit(0);
}

if($id=="")
{
	exitWithError("geen id");
}
$result=[];
$result["id"]=$id;

// decide what to do with it!
$tmp_image_name=$path_to_original_uploads.$id."_original.png";
if(!is_file($tmp_image_name))
{
	exitWithError("geen origineel aanwezig");
}
$image_info = getimagesize($tmp_image_name);
$width = $new_width = $image_info[0];
$height = $new_height = $image_info[1];
$image = imagecreatefrompng($tmp_image_name);
imagealphablending( $image, true );
imagesavealpha( $image, true );
$box_w=854;
$box_h=557;
$f=1;

// ALWAYS SCALE IT TO THE RIGHT SIZE, USING CONTAIN!
// Bottom left = leading..
	$fx= $box_w /$width ;
	$fy= $box_h /$height ;
	$f=$fy;
	if($fx<$f)$f=$fx; // choose the smallest so that we have whitespace.
	$new_width = $width*$f;
	$new_height = $height*$f;
	$ox=0; // always LEFT corner!
	$oy=(int)(($box_h-$new_height)); // total height of margin at top!

$new_image = imagecreatetruecolor($box_w, $box_h);
imagealphablending( $new_image, true ); // make it transparant.. (which is a bit too bad in the case of a jpeg!)
imagesavealpha( $new_image, true );
$tlo = imagecolorallocatealpha($image, 220, 220, 220, 127);
imagefill($new_image, 0, 0, $tlo);

imagecopyresampled($new_image, $image, $ox, $oy, 0, 0, $new_width, $new_height, $width, $height);

$filename=$path_to_uploads.$id.".png";
imagepng($new_image, $filename); // this is safe!

$result["original_image_size"]=getimagesize($tmp_image_name);
$result["width"]=$width;
$result["height"]=$height;
$result["new_width"]=$new_width;
$result["new_height"]=$new_height;
$result["box_width"]=$box_w;
$result["box_height"]=$box_h;
 
 // easy debugging :)
//file_put_contents("output_imageAdjust.txt",json_encode($result));
$result["succes"]=true;
echo json_encode($result);
exit(0);
//print_r($_POST);
//print_r($_FILES);
exit(1);
?>
