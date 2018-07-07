<?php
// open the file in a binary mode
$path_to_root=$_SERVER['DOCUMENT_ROOT'];
// we set the name according to the stuff set in the variables (normally!)
// for this test, we just do it like this.


$clean=array();
foreach ($_GET as $key => $value) 
{
	$key=preg_replace('/\s+/', '', $key); // only alphanumeric
	$value=preg_replace('/\s+/', '', strip_tags($value)); // only alphanumeric and NO additional HTML!
	$clean[$key]=strip_tags($value);
}
$name="";
if($clean['id']=="map")
{
	$name = $path_to_root.'/mgcms/cms_map/'.$clean['img'].'.jpg'; // we need to add the jpg here!
}
if($clean['id']=="huizen")
{
	$name = $path_to_root.'/mgcms/data/huizen/'.$clean['img'];
}
if($name=="") $name= $path_to_root.'/mgcms/cms_map/'.$clean['img'].'.jpg';
if(file_exists($name))
{
	$fp = fopen($name, 'rb');
	// send the right headers
	header("Content-Type: image/jpg");
	header("Content-Length: " . filesize($name));
	// dump the picture and stop the script
	fpassthru($fp);
	exit;
}else
{
	echo("sorry, no such file ".$name.", we need an id and valid image...");
}
?>