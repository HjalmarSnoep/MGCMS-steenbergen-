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
	echo("<html>");
	echo("<head>");
	echo("<style>");
	echo("body{font-family: sans-serif;}");
	echo("</style>");
	echo("</head>");
	echo("<body>");
	echo("<img src='getSingleImage.php?id=huizen&img=".$clean['img']."'>");
	echo('<form action="merge.php" method="post" enctype="multipart/form-data">');
	echo('    Vervangen?<br>');
	echo('    <input type="hidden" name="id" id="id" value="'.$clean['id'].'"></input> ');
	echo('    <input type="hidden" name="img" id="img"  value="'.$clean['img'].'"></input> ');
	echo('    <input type="file" name="file" id="fileToUpload"></input> ');
	echo('    <input type="submit" value="Vervangen door nieuwe bestand" name="submit"><br>');
	echo('</form>');
}else
{
	echo("sorry, no such file ".$name.", we need an id and valid image...");
}
?>