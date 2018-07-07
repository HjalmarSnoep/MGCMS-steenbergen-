<?php
/**
 * HTML 5 game snoepGames template.
 */
// header("Access-Control-Allow-Origin: *"); // unsafe, allows cross site scripting for everybody!
header('Access-Control-Allow-Origin: snoep.at');
header('Access-Control-Allow-Origin: makinggames.org');
header('Content-Type: text/html; charset=utf-8'); // this is needed to get special characters right.
 
$outputformat="html";
if(isset($_REQUEST['output']))
{
	if($_REQUEST['output'] === 'xml')  $outputformat="xml";
	if($_REQUEST['output'] === 'js')  $outputformat="js";
	if($_REQUEST['output'] === 'flash')  $outputformat="flash";
}
if($outputformat=="html")
{
?>
<!DOCTYPE html>
<!-- 
	Copyright (c) 2013, 2014 Hjalmar Snoep, Snoepgames. 	http://www.snoep.at
	All rights reserved.
-->
<html lang="nl">
<head>

	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<meta name="viewport" content="user-scalable=no,width=device-width">
	<link rel="stylesheet" href="../static/css/hybrid.css" type="text/css">
	<link rel="stylesheet" href="../static/css/mgmenu.css" type="text/css">
	<meta charset="utf-8">
		
	<meta name="apple-mobile-web-app-capable" content="yes" />
	
  	 <script src="<?php 
	 $whitelist = array(
    '127.0.0.1',
    '::1'
	);

	if(!in_array($_SERVER['REMOTE_ADDR'], $whitelist)){
		echo "release_";
	}
	 ?>menu.js" type="text/javascript"></script>
</head>
<body>
<script>
	document.write("<div id='hybridDiv' >Javascript wordt geladen...</div>");
</script>
<noscript>Als je deze melding ziet, staat Javascript waarschijnlijk uit! Hierdoor kun je dit spel niet zien. <a href="http://www.makinggames.org/nl/enable_javascript">Zet javascript aan</a> en ga dan terug naar deze pagina!</noscript>
</body>
</html>
<?php 
}
?>
