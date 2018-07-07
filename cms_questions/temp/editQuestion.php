<?php
header('Access-Control-Allow-Origin: snoep.at');
header('Access-Control-Allow-Origin: makinggames.org');
header('Content-Type: text/html; charset=utf-8'); // this is needed to get special characters right.
?>
<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
		<meta charset="utf-8">	
		<link rel="stylesheet" href="../wwjw.css" type="text/css">
		<style>
			
			body{	
				font-family: sans-serif;
			}
		</style>
		<script src="http://code.jquery.com/jquery-latest.js"></script>
		<script src="editQuestion.js"></script>
	</head>
<body>
<div id="interface"><button type="button"><img src="img/ok.png"  height="10px"> Wijzigingen opslaan</button> <button type="button"><img src="img/delete.png" height="10px"> Annuleren</button></div>
<div id="list"></div>
</body>
</html>
