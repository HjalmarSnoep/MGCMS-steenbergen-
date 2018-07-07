<?php
//header('Access-Control-Allow-Origin: snoep.at');
//header('Access-Control-Allow-Origin: makinggames.org');
//INDEX OF CMS QUESTIONS

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
				background: #e8e8e8;
				
			}
			table{
				width: 100%;
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
			th.light,td.light
			{
				background-color: rgba(255,255,255,0.5); // page color!
			}
			th.number,td.number
			{
				text-align:right;
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
			
		.colortab{
			margin:0 8px 0 0;
			width:8px;
			height:8px;
			padding:1px 1px;
			display:inline-block;
			-webkit-border-radius: 4px;
			-moz-border-radius: 4px;
			border-radius: 4px;
		}

		#tabs{
			height:40px;
			overflow:hidden;
			border-style: none;
			border-bottom: solid 2px #888;
		}

		#tabs > ul{
			font: 1em;
			list-style:none;
		}

		#tabs > ul > li{
			margin:0 2px 0 0;
			padding:7px 20px;
			display:block;
			float:left;
			-webkit-user-select: none;
			-moz-user-select: none;
			user-select: none;
			-moz-border-radius-topleft: 4px;
			-moz-border-radius-topright: 4px;
			-moz-border-radius-bottomright: 0px;
			-moz-border-radius-bottomleft: 0px;
			border-top-left-radius:4px;
			border-top-right-radius: 4px;
			border-bottom-right-radius: 0px;
			border-bottom-left-radius: 0px; 
			
			color: #333;
		}

		#tabs > ul > li:hover{
			background: #F8F8F8; /* old browsers */
			cursor:pointer;
			color: #222;
		}

		#tabs > ul > li.tabActiveHeader{
			background: #FFFFFF; /* old browsers */
			background: -moz-linear-gradient(top, #0C91EC 0%, #257AB6 100%); /* firefox */
			background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#0C91EC), color-stop(100%,#257AB6)); /* webkit */
			cursor:pointer;
			color:#FFF;
		}

		
		</style>
		<script src="/static/js/jquery.min.js"></script>
		<script src="index.js?ck=<?php echo (filemtime("index.js"));?>"></script>
	</head>
<body>
<h3>Statistics </h3>
<fieldset> <legend>Bereik</legend>
Start date 
	<input type="date" id="start"> &#8614; &#8612;
    <input type="date" id="end">
<button type="button" onclick="showStats();"><img src="img/range.png" height="10px"> Change Period</button>
</fieldset>
<fieldset id="usage" style="margin-top:15px;"> <legend>Usage</legend>
<canvas id="usage_graph" width="100%" height="160px"></canvas>
<div id="usage_stats"></div>
</fieldset>

<div id="tabs">
  <ul>
      <li id="pages" onclick="showTab('pages');">Pages</li>
      <li id="questions" onclick="showTab('questions');">Questions</li>
      <li id="houses" onclick="showTab('houses');">Houses</li>
      <li id="games" onclick="showTab('games');">Games</li>
   </ul>
</div>
<fieldset id="current" style="margin-top:15px;"> <legend>--</legend>
<canvas id="current_graph" width="100%" height="160px"></canvas>
<div id="current_stats"></div>
</fieldset>
</body>
</html>
