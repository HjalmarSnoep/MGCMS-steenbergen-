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
		
			}
			
		</style>
		<script src="/static/js/jquery.min.js"></script>
		<script src="getList.php"></script>
		<script src="index.js"></script>

	</head>
<body>
<h3>Games</h3>
<?php
$whitelist = array(
    '127.0.0.1',
    '::1'
);

if(!in_array($_SERVER['REMOTE_ADDR'], $whitelist)){
    // not valid
	echo '<a href="http://localhost/projects/HTML5/hybridGames/wwjw/restore_highscores.php"><button>Reset Highscores</button></a>';
}else
{
	echo '<a href="http://spel.kijkopsteenbergen.nl/game/restore_highscores.php"><button>Reset Highscores</button></a>';
}
?>

<br>
<div id="list"></div>
</body>
</html>
