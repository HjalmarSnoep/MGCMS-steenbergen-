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
		<script src="getDetails.php?id=<?php
		$id=''; // this SHOULD REMAIN A _GET parameter!
		if(isset($_GET["id"]))
		{
			$id=preg_replace("/[^a-zA-Z0-9]/", "", $_GET["id"]);
		}
		echo $id;
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
			$("#naam").val(item_details.naam);
			$("#prijs").val(item_details.prijs);
			
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
<td>Published:</td><td></td>
<td>
<script>
	if(item_details.published=="1" || item_details.published=="") item_details.published=1;
	if(item_details.published=="0") item_details.published=0;
	if(item_details.published)
	{
		document.write('<input type="checkbox" id="published" name="published" checked>');
	}else
	{
		document.write('<input type="checkbox" id="published" name="published">');
	}
</script>
</select></td>
<td><div class="help" id="pub_help">Als published niet aan staat, is het huis niet te selecteren door de gebruikers van de quiz!</div></td>
</tr>

<tr>
<td>Plaatsnaam:</td><td></td>
<td><select name="city" id="city">
<script>
var i;
var city_names=["","Steenbergen","De Heen","Nieuw-Vossemeer","Kruisland","Dinteloord","Welberg","te koop"];

for(i=0;i<city_names.length;i++)
{
	if(item_details.city=="" || item_details.city===undefined) item_details.city=0;
	else
		item_details.city=parseInt(item_details.city);
	var sel="";
	if(i==item_details.city) sel=" selected ";
	if(i==0)
	{
		document.write('<option value="'+i+'"'+sel+'>geef een plaatsnaam aan</option>');
	}else
	{
		document.write('<option value="'+i+'"'+sel+'>'+city_names[i]+'</option>');
	}
}
</script>
</select></td>
<td><div class="help" id="city_help">Kies een plaatsnaam bij de vraag: Steenbergen, De Heen, Nieuw-Vossemeer, Kruisland, Dinteloord of Welberg</div></td>
</tr>



<tr>
<td>Huis naam:</td><td></td>
<td>
 <input type="text" name="naam" id="naam">
</td>
<td><div class="help" id="info_help">De naam die bij het huis moet komen (niet nodig voor vaste huizen, alleen voor huizen die te koop zijn)</div></td>
</tr>

<tr>
<td>Prijs</td><td></td>
<td>
<input type="number" name="prijs" min="0" max="5000" id="prijs">
</td>
<td><div class="help" id="info_help">De naam die bij het huis moet komen (niet nodig voor vaste huizen, alleen voor huizen die te koop zijn)</div></td>
</tr>


<tr>
<td>Huis informatie:</td><td></td>
<td>
<div id="info" rel="info about the house" >
Source Image: ----<br>
Width: ----<br>
Height: ----<br>
ReferencePoint: (0,0)<br>
</div>
</td>
<td><div class="help" id="info_help">Informatie over huis.<BR><input type="button" onClick="javascript: eraseLocation();" value="Locatie op kaart wissen"><BR> Klik hier en zet de plaatsnaam op een gemeente om via de kaart het huis in te stellen op een bepaalde locatie op die kaart.</div></td>
</tr>

<tr>
<td>Huis:</td><td></td>
<td id="has_image">
<script>
		document.write("<div id='container'><img src='getSingleImage.php?id=huizen&img="+item_details.id+".png' style='position: absolute; z-index:1;'><img src='img/ref.png' id='ref' style='position: absolute; z-index:2;'></div>");
</script>
</div>
</div>
</td>
<td><div class="help" id="img_help">Klik in het plaatje om het ref-point te zetten (<img src="img/ref.png">).<BR>Dit moet staan op de onderste gedeelte van het gebouw (dat boven de grond uitsteekt) en wordt gebruikt als sorteerpunt voor gebouwen die voor of achter elkaar moeten vallen.</div></td>
</tr>




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
