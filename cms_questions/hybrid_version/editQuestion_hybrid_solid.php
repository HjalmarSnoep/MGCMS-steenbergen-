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
	prerendered puppet_editor demo
	HTML5 GAME  - Hybrid Platform
	by Hjalmar Snoep
	http://www.snoepgames.nl 
	
	Copyright:
	Audio (c) 2013 Hjalmar Snoep, All rights reserved. For licenses: http://www.snoep.at/music
	Graphics (c) 2013 http://www.snoep.at. All rights reserved.
	Javascript
	Jquery 
	/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
	
	All other code (c) 2013, 2014 Hjalmar Snoep, Snoepgames. 	http://www.snoep.at
																http://www.makinggames.org/nl/user/hjalmarsnoep
																http://www.youtube.com/user/hjalmarsnoep
	All rights reserved.
	
	// we should look into but it's not supported well enough right now..:
	https://developer.mozilla.org/en-US/docs/Web/HTTP/X-Frame-Options
-->
<html lang="nl">
<head>

	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<meta name="viewport" content="user-scalable=no,width=device-width">
	<link rel="stylesheet" href="/static/css/hybrid.css" type="text/css">
	<link rel="stylesheet" href="editQuestion.css" type="text/css">
	<meta charset="utf-8">
		
	<meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
	<link rel="apple-touch-icon" href="img/touch-icon-standard.png">
	<link rel="apple-touch-icon" sizes="76x76" href="img/touch-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="120x120" href="img/touch-icon-iphone-120x120.png">
	<link rel="apple-touch-icon" sizes="152x152" href="img/touch-icon-ipad-152x152.png">		
	<link rel="apple-touch-startup-image" href="img/offline_startup.jpg">
	
	<title>Weet waar je woont</title>
  	 <script src="<?php 
	 $whitelist = array(
    '127.0.0.1',
    '::1'
	);

	if(!in_array($_SERVER['REMOTE_ADDR'], $whitelist)){
		echo "release_";
	}
	 ?>editQuestion.js" type="text/javascript"></script>
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
