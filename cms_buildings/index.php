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
			a{
				color: rgba(0,0,0,0.75);
			}
			/* dropzone.js stuff */
			
			#snoep-dropzone{
			border: 1px solid rgba(0,0,0,0.03);
			min-height: 60px;
			width:80%;
			margin-left: auto;
			margin-right: auto;
			border-radius: 3px;
			background: rgba(0,0,0,0.03);
			padding: 20px;
			text-align: center;
			}
			.dz-error-mark, .dz-succes-mark{
			visibility:hidden;
				
			}
			
		</style>
		<script src="/static/js/jquery.min.js"></script>
		<script src="getList.php"></script>
		<script src="index.js"></script>
		<script src="dropzone.js"></script>
	</head>
<body>
<h3>Huizen</h3>
<form action="add.php"
      class="dropzone"
      id="snoep-dropzone">
 <div class="fallback">
    <input name="file" type="file" multiple />
  </div>
</form>
<br>
<div id="list"></div>
</body>
</html>
