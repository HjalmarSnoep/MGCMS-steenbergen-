<?php
//header('Access-Control-Allow-Origin: snoep.at');
//header('Access-Control-Allow-Origin: makinggames.org');
header('Content-Type: text/html; charset=utf-8'); // this is needed to get special characters right.
//		<script src="http://code.jquery.com/jquery-latest.js"></script>

?>
<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
		<meta charset="utf-8">	
		<script src="/static/js/jquery-latest.js"></script>
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
			.empty{
				opacity:.25;
				filter: alpha(opacity=25); 
				-moz-opacity: 0.25;
			}
			.help{
				font-size: 0.8em;
				color: #fff;
			}
			a{
				color: rgba(0,0,0,0.75);
			}
			.soft{
				font-size: 0.8em;
				color: rgba(150, 148, 140, 0.8); 
			}
			/****** googles luckiest guy! *******/
			@font-face {
			  font-family: 'Luckiest Guy';
			  font-style: normal;
			  font-weight: 400;
			  src: local('Luckiest Guy'), local('LuckiestGuy-Regular'), url(http://themes.googleusercontent.com/static/fonts/luckiestguy/v4/5718gH8nDy3hFVihOpkY5HhCUOGz7vYGh680lGh-uXM.woff) format('woff');
			}
			
			
		</style>
		<!-- fixed it -->
		<script src="getDetails.php?id=<?php 
		echo $_GET["id"]; // this SHOULD REMAIN A _GET parameter!we are just passing it though here.. BUT if we want to fix this
		$id=''; //  for future reference, we do clean it :)
		if(isset($_GET["id"]))
		{
			$id=preg_replace("/[^a-zA-Z0-9?@À-ÿ\- _]/","",strip_tags($_GET["id"]));	// can contain accents, spaces and - but nothing else, so St.John doesn't work 
		}
		// this creates an object : item_details  with a minimum of id=""; if empty!
		/*// normal output!
				item_details = {
					id: "id - kopie", // is image name!
					published: "" // 0 or 1
					city: "" // alle cities OF "te koop"
					width: "" // width of image
					height: "" // width of image
					x: "" // ref point
					y: "" // ref point
				};
		*/
	
		?>"></script>
		<script>
		
		// make wysiwyg editor
	
		function handleButtons(d){
			var cmd=d.getAttribute("data-id");
			var tgt=d.getAttribute("data-option");
			console.log("you clicked a button! cmd: "+cmd + ", tgt: "+tgt);
			switch(cmd)
			{	case "submit":
					// save all changes (or create new)
					if(checkForm())submit();
				break;
				case "submit_new":
					// save as new question changes!
					if(checkForm())
					{
						item_details.id=""; // erase id!
						submit();
					}
					
				break;
				case "cancel":
					// go back to list of questions
					// free the question!
					location.href="index.php";
					// sends us on to index.php!
//					location.href="index.php";
				break;
				case "preview_media":
					// check if it is an url, or an upload.
					// if there is any thing in the upload box, that takes preference!
					
				break;
				case "b":
					document.execCommand('bold', false, null);
				break;
				case "em":
					document.execCommand('italic', false, null);
				break;
				case "intimg":
					image_search_target=true;
					open_search_window();
				break;
				case "extimg":
					 var src = window.prompt('Geef een link naar het plaatje.');
					 if(src)
					 {
						var html="<img src='"+src+"' align='right' height='40'>";
						document.execCommand('insertHTML', false, html);
					 }
				break;
//				case "col":
//					document.execCommand ('foreColor', false, "#ff0000");
//				break;
				case "a":
					 var src = window.prompt('Geef de link op..');
					 if(src)
					 {
						document.execCommand('createLink', false, src);
					 }
				break;
			}
		}
		// enable the tools on load!
		window.onload=function(){
				//window.alert("me thinks javascript just stopped working..");
				$("#container").click(function(e)
				{
			   var parentOffset = $(this).parent().offset(); 
			   //or $(this).offset(); if you really just want the current element's offset
			   var relX = e.pageX - parentOffset.left;
			   var relY = e.pageY - parentOffset.top;
			   console.log("you clicked the image at: "+relX+","+relY);
			   updateRef(relX,relY);
			});
			// bereid plaatsing voor:
			$("#container").css("background-color","#f00");
			$("#container").css("background-image","url('img/blocks.png')");
			$("#container").css("width","400px");
			$("#container").css("height","400px");
			$("#container").css("position","relative");
			$("#container").css("overflow","hidden");
			$("#container").css("margin","0px");
			$("#container").css("padding","0px");
			$("#has_image").css("margin","0px");
			$("#has_image").css("padding","0px");
			updateRef(item_details.rx,item_details.ry);
			// plaats op juiste punt en laat zien in info window:
			// set naam en prijs
			// en lx en ly??
			$("#label").val(item_details.label);
			
		};
		function updateRef(x,y)
		{
			$("#ref").css("left",(x-8)+"px");
			$("#ref").css("top",(y-8)+"px");
			var str="Source Image: "+item_details.id+"<br>";
			str+="Width: "+item_details.w+"<br>";
			str+="Height: "+item_details.h+"<br>";
			str+="ReferencePoint: ("+x+","+y+")<br>";
			str+="<small>Locatie op Kaart: ("+item_details.lx+","+item_details.ly+")</small><br>";
			item_details.rx=x;
			item_details.ry=y;
			$("#info").html(str);
		}
		function stripScriptsToCheckEmpty(s) 
		{
			var div = document.createElement('div');
			div.innerHTML = s;
			var scripts = div.getElementsByTagName('script');
			var i = scripts.length;
			while (i--) {
			  scripts[i].parentNode.removeChild(scripts[i]);
			}
			return div.innerHTML.replace(/\s+/g, ""); // also strip spaces!
		}
		
		function addHidden(theForm, key, value) 
		{
			// Create a hidden input element, and append it to the form:
			var input = document.createElement('input');
			input.type = 'hidden';
			input.name = key; 
			input.value = value;
			theForm.appendChild(input);
		}
		
		function getCheckedRadioId(name) {
			var elements = document.getElementsByName(name);

			for (var i=0, len=elements.length; i<len; ++i)
				if (elements[i].selected) return elements[i].value;
		}
		function checkForm()
		{
			// there is nothing that can go wrong here..
			return true;
		}
		function submit()
		{
			// we need to create a few dummy inputs for the form to be handled correctly.
			// then we call form.submit
			var frm=document.getElementById("frm");
			addHidden(frm,"id",item_details.id);
			addHidden(frm,"rx",item_details.rx);// points hintcost, bricks, now automatic.
			addHidden(frm,"ry",item_details.ry);
			addHidden(frm,"lx",item_details.lx);// points hintcost, bricks, now automatic.
			addHidden(frm,"ly",item_details.ly);
			addHidden(frm,"w",item_details.w);
			addHidden(frm,"h",item_details.h);
			frm.submit();
		}
		function getYoutubeVideoCode(media_url)
		{
				var video_code="";
				// werk url om naar geldige embed code!
				if(media_url.indexOf("youtu.be/")!=-1)
				{
					// looks like this:
					// "http://youtu.be/rht7mPaXgzU";
					 video_code=media_url.substr(media_url.indexOf("youtu.be/")+9,11);
					// window.alert("extracted video_code:"+video_code);
				}
				if(media_url.indexOf("v=")!=-1)
				{
					// looks like this:
					//"https://www.youtube.com/watch?v=uziVqnHhLDg";
					video_code=media_url.substr(media_url.indexOf("v=")+2,11);
					//window.alert("extracted video_code:"+video_code);
				}
				return video_code;
		}
		function eraseLocation()
		{
			// just put lx and ly on 0!
			item_details.lx=0;
			item_details.ly=0;
			updateRef(item_details.rx,item_details.ry);
		}
	
		
		</script>

	</head>
<body>
<form id="frm" action="setDetails.php"  method="post" enctype="multipart/form-data">
<div id="interface">
<button type="button" data-id="submit" onClick="handleButtons(this);"><img src="img/ok.png"  height="10px"> Opslaan</button> 
<button type="button" data-id="cancel" onClick="handleButtons(this);"><img src="img/delete.png" height="10px"> Annuleren</button>
<script>
	document.write('<span class="soft">blob-id:'+item_details.id+'</span>');
</script>

</div>
<table>


<tr>
<td>Label:</td><td></td>
<td>
 <input type="text" name="label" id="label">
</td>
	<td><div class="help" id="info_help">Label van de tag, items die met deze tag getagd zijn, blijven zo getagd!</div></td>
</tr>
<tr>


</table>
<div id="interface">
<button type="button" data-id="submit" onClick="handleButtons(this);"><img src="img/ok.png"  height="10px"> Opslaan</button> 
<!-- <button type="button" data-id="preview" onClick="handleButtons(this);">Preview</button> -->
<button type="button" data-id="cancel" onClick="handleButtons(this);"><img src="img/delete.png" height="10px"> Annuleren</button>
</div>

</form>


<div id="list"></div>
</body>
</html>
