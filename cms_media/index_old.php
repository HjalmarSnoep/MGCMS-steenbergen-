<?php
//header('Access-Control-Allow-Origin: snoep.at');
//header('Access-Control-Allow-Origin: makinggames.org');
//INDEX OF CMS MEDIA

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
			table,th,td
			{
				border: none;
				border-collapse:collapse;
			}
			th,td
			{
				padding:5px;
			}
			th
			{
				text-align:left;
				background-color: rgba(241, 232, 206, 0.8); /* light, yellowish */
			}
			tbody tr:nth-child(odd) 
			{
				background-color: rgba(199, 195, 180, 0.8); /* white */
			}
			tbody tr:nth-child(even) 
			{
				background-color: rgba(150, 148, 140, 0.8); /* black */
			}
		</style>
		<script src="/static/js/jquery.min.js"></script>
		<script src="imagesListGet.php"></script>
		<script src="index.js"></script>
	</head>
<body>
<form id="frm" action="imageAdd.php"  method="post" enctype="multipart/form-data">
	<div id="interface">
	<input type="file" name="media_upload" id="media_upload" accept="image/*">
	<input type="submit" value="Bestand uploaden">
	</div>
</form>
<h3>Media (uploaded images)</h3>
<div id="list"></div>
</body>
</html>
