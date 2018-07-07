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
$fields=array("id","date","published","title","body","points","bricks","hintcost","cat","city","media","media-url","hint","right","wrong","author","answer","A","B","C","D");
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
//print_r($_POST);
//print_r($_FILES);
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
			case "author": 
			case "id":
				$cleaned_input[$f]=preg_replace("/[^a-zA-Z0-9]/", "", $_POST[$f]); // superclean!
			break;
			case "date": 
				$cleaned_input[$f]=preg_replace("/[^0-9:-\s]/", "", $_POST[$f]); // numbers space, : and -
			break;
			case "cat": 
			case "city": 
			case "bricks": 
			case "hintcost": 
			case "points": 
				$cleaned_input[$f]=preg_replace("/[^0-9]/", "", $_POST[$f]); // numbers
			break;
			case "answer": 
				$cleaned_input[$f]=preg_replace("/[^A-D]/", "", $_POST[$f]); // numbers
			break;
			case "media-url": //clean it
				$cleaned_input["media"]=preg_replace("/[^a-zA-Z0-9:_.\/\-\$\+\=\?\&]/", "", $_POST[$f]); // legal url stuff.

				// test specific urls that don't work here:
				// https://www.functions-online.com/preg_replace.html
				// ok, this is supposed to be a youtube url..
				// let's get to the source of it..
				
				
				
			break;		
			default:
				// allow for " to be turned into &quot;
				$str=$_POST[$f];
				//$str = str_replace(array("&lt;", "&gt;", "&amp;amp;"), array("<", ">", "&amp;"), htmlspecialchars($str)); // allow for special chars!
				//$str = str_replace(array("&lt;", "&gt;", "&amp;amp;"), array("<", ">", "&amp;"), htmlspecialchars($str)); // allow for special chars!
				// now this might screw up images, so:
				//$str = str_replace(array("src=&quot;", "png&quot;", "align=&quot;right&quot; height=&quot;40&quot;"), array("src='", "png'", "align='right' height='40'"), $str);
				// real dirty work around.
				//<img src=&quot;/mgcms/cms_images/images_cg4DyUX11Z.png&quot; align=&quot;right&quot; height=&quot;40&quot;>
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
			case "id": // no id given ok, new question!
				$file_might_be_there=true;
				while($file_might_be_there)
				{
					$id=generateRandomId(6); // length of id == 6
					// make random letters Uppercase!
					$filename=$path_to_data."/questions/".$id.".txt";
					if(!file_exists($filename)) // not an existing file, then output blank!.
						$file_might_be_there=false;
				}
				//echo("WE ARE GENERATING A NEW ID! ".$id);
				// we only leave the loop when we are SURE we have a unique filename
				 $cleaned_input["id"]=$id;
				 
			break;
			case "author":
				$cleaned_input[$f]=$_SERVER['PHP_AUTH_USER'];
			break;
			case "date":
				// that's ok, that's filemtime
				//$cleaned_input[$f]=$_SERVER['PHP_AUTH_USER'];
			break;
			default:
				$cleaned_input[$f]="";
		}
		
		//echo($f." -not set<br>");
	}
}
// now test if there is files with this upload!

if( isset($_FILES["media_upload"]) )
{
	echo("<hr>");
	echo("UPLOAD");
	echo("<hr>");
	if ($_FILES["media_upload"]["error"] > 0) 
	{
		if($_FILES["media_upload"]["error"]==4)
		{
			// nothing uploaded.
		}else
		{
		   $cleaned_input["media_upload_error"]="Error: " . $_FILES["media_upload"]["error"] . "<br>";
		   $cleaned_input[$f]="";
		   echo("<hr>");
			echo("ERROR UPLOADING FILE: "+$cleaned_input["media_upload_error"]);
			echo("<hr>");
		   // there is no (internal) media what so ever..
		}
	} else {
		$r="";
		$r.="Upload: " . $_FILES["media_upload"]["name"] . "<br>";
		$r.= "Type: " . $_FILES["media_upload"]["type"] . "<br>";
		$r.= "Size: " . ($_FILES["media_upload"]["size"] / 1024) . " kB<br>";
		$r.= "Stored in: " . $_FILES["media_upload"]["tmp_name"];
		$cleaned_input["media"]=$r;
		// new_name for asset:
		
		$file_might_be_there=true;
		$type=$_FILES["media_upload"]["type"];
		 //move_uploaded_file($_FILES["media_upload"]["tmp_name"],$filename);
		 //$cleaned_input["media"]="somephp.php?".$asset_name;
		 // we don't MOVE it, we use GD!
		 
		 // Get the image info from the tmp_image_name
		 $tmp_image_name=$_FILES["media_upload"]["tmp_name"];
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
			$cleaned_input["media"]=$asset_name; // no PNG!
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
foreach($cleaned_input as $key => $value)
{
	echo($key." => ".$value."<br>");
}
// create the question file!
$filename=$path_to_data."/questions/".$cleaned_input["id"].".txt";
// if file exists move to trash with datestamp!
if(file_exists($filename))
{
	$filename_trash=$path_to_data."/trash/questions_".$cleaned_input["id"]."_".time().".txt"; // use time as unique id, you can later use filemtime to check actual date of creation if you want to revert.
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
$question="";
$question.="title: ".$cleaned_input["title"].$nl;
$question.="published: ".$cleaned_input["published"].$nl;
$question.="body: ".$cleaned_input["body"].$nl;
$question.="points: ".$cleaned_input["points"].$nl;
$question.="bricks: ".$cleaned_input["bricks"].$nl;
$question.="hintcost: ".$cleaned_input["hintcost"].$nl;
$question.="cat: ".$cleaned_input["cat"].$nl;
$question.="city: ".$cleaned_input["city"].$nl;
$question.="media: ".$cleaned_input["media"].$nl;
$question.="A: ".$cleaned_input["A"].$nl;
$question.="B: ".$cleaned_input["B"].$nl;
$question.="C: ".$cleaned_input["C"].$nl;
$question.="D: ".$cleaned_input["D"].$nl;
$question.="hint: ".$cleaned_input["hint"].$nl;
$question.="right: ".$cleaned_input["right"].$nl;
$question.="wrong: ".$cleaned_input["wrong"].$nl;
$question.="author: ".$cleaned_input["author"].$nl;
$question.="answer: ".$cleaned_input["answer"].$nl;

file_put_contents ($filename,$question); // trying to write to ../data/questions is failing because of rights.

echo("<hr>");
echo("Succesvol opgeslagen als: ".$cleaned_input["id"]."<br>");
echo("<a href='index.php'>Terug naar de lijst</a>");
echo("<hr>");
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