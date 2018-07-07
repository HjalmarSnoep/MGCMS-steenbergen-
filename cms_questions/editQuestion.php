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
		<script src="../cms_media/imagesListGet.php"></script>

		
		<script src="questionGetDetails.php?id=<?php
		$id=''; // this SHOULD REMAIN A _GET parameter!
		if(isset($_GET["id"]))
		{
			$id=preg_replace("/[^a-zA-Z0-9]/", "", $_GET["id"]);
		}
		echo $id;
		// this creates an object : question_details  with a minimum of id=""; if empty!
		/*// normal output!
				question_details = {
					id: "id - kopie",
					date: "2014-26-June 15:16:17",
					title: "Twee zeemeerminnen",
					body: "Twee zeemeerminnen tekst",
					A: "Een antwoord, gewoon, zoals iedereen dat kan geven.",
					B: "Een antwoord, gewoon, zoals iedereen dat kan B.",
					C: "Een antwoord, gewoon, zoals iedereen dat kan C.",
					D: "Een antwoord, gewoon, zoals iedereen dat kan D."
					hint: "Een antwoord, gewoon, zoals iedereen dat kan A.",
					right: "Een antwoord, gewoon, zoals iedereen dat kan B.",
					cat: "Een antwoord, gewoon, zoals iedereen dat kan C.",
					author: "admin.",
					wrong: "Een antwoord, gewoon, zoals iedereen dat kan D.",
					answer: "D",
					media: "",
					bricks: "",
					points: ""
				};
		*/
	
		?>"></script>
		<script>
		
		// make wysiwyg editor
		function setTextTools(textfield,buttons_container){
			// tf holds the textfield,
			// ctrl holds the controls.
			var tf=document.getElementById(textfield);
			var ctrl=document.getElementById(buttons_container);
			if(tf && ctrl)
			{
				//We create the buttons container
			
				//We define some properties to it...
				ctrl.style.textAlign='center';
				ctrl.style.marginTop='5px';
				ctrl.className='makeWYSIWYG_buttons_container';
		
				//We create the buttons inside the container
				ctrl.innerHTML=''+
					"<div class='help'>Speciale karakters maak je op de normale wijze. <br>(Windows: ' + e = é <br>Mac: option + ' + e = é ) <BR>HTML TAGS, DOUBLE QUOTES (\") en BACKSLASH (\\) zijn niet toegestaan.</div>"+
					'<button data-id="b" data-option="'+textfield+'" type="button" onClick="handleButtons(this);"><b>b</b></button>'+
					'<button data-id="em" data-option="'+textfield+'" type="button" onClick="handleButtons(this);"><em>i</em></button>'+
					'<br>'+
					//'<button data-id="ins" data-option="'+textfield+'" type="button" onClick="handleButtons(this);"><ins>u</ins></button>'+ // not necessary yet
					//'<button data-id="del" data-option="'+textfield+'" type="button" onClick="handleButtons(this);"><del>s</del></button>'+ // not necessary yet
					//'<button data-id="ul" data-option="'+textfield+'" type="button" onClick="handleButtons(this);">•</button>'+ // not supported by Firefox yet..
					//'<button data-id="ol" data-option="'+textfield+'" type="button" onClick="handleButtons(this);">1.</button>'+
					'<button data-id="intimg" data-option="'+textfield+'" type="button" onClick="handleButtons(this);">Internal Image</button>'+
					'<button data-id="extimg" data-option="'+textfield+'" type="button" onClick="handleButtons(this);">External Image</button>'+
					'<button data-id="a" data-option="'+textfield+'" type="button" onClick="handleButtons(this);">link</button>'+
					'<button data-id="clr" data-option="'+textfield+'" type="button" onClick="handleButtons(this);">clear</button>';
			}else
			{
				if(!tf)console.log("WARNING: can't set texttools-> textfield: "+textfield+"="+tf);
				if(!ctrl)console.log("WARNING: can't set texttools-> buttons_container: "+buttons_container+"="+ctrl);
			}
		};
		function setMediaTools(media_field,buttons_container){
			// tf holds the textfield,
			// ctrl holds the controls.
			var mf=document.getElementById(media_field);
			var ctrl=document.getElementById(buttons_container);
			if(mf && ctrl)
			{
				//We create the buttons container
			
				//We define some properties to it...
				ctrl.style.textAlign='center';
				ctrl.style.marginTop='5px';
				//ctrl.className='makeWYSIWYG_buttons_container';
		
				set_url="";
				if(question_details.media!="")set_url=question_details.media;
				//We create the buttons inside the container
				ctrl.innerHTML=''+
					'Nieuw bestand uploaden:<br><div style="background-color: rgba(0,0,0,0.5);"><input type="file" name="media_upload" id="media_upload" accept="image/*"></div><br>'+
					'of<br><br>'+
					'<a href="javascript:open_search_window();">Bestaande Media</a> of youtube-url:<br><input size="50" id="media_url" type="url" name="media-url" value="'+set_url+'"><br>'+
					'<button data-id="update_media"  data-option="'+media_field+'" type="button" onClick="handleButtons(this);">Show media</button>'; // not supported yet!
			}else
			{
				if(!tf)console.log("WARNING: can't set mediatools-> media_field: "+media_field+"="+mf);
				if(!ctrl)console.log("WARNING: can't set mediatools-> buttons_container: "+buttons_container+"="+ctrl);
			}
		};
		
		// functions for search window!
		function open_search_window()
		{
			if(document.getElementById('searchImgPopup')!=null) return;
			var div = document.createElement('div');
			div.setAttribute('id',"searchImgPopup");
			var i=0,html_string="<a href='javascript:closePop();'><div id='closePopup' style='position: absolute; right: 2px; top: 2px;'>&#10006;</div></a>";
			// set the images!
			// these were loaded at runtime!
			if(typeof(images)!=="undefined")
			{
				var i;
				var str="";
				for(i=0;i<images.length;i++)
				{
					html_string+="<img id='"+images[i].id+"' src='../cms_images/"+images[i].id+".png' height='60px' onClick='chooseImage(this);'>";
				}
				//console.log("generated list:"+str);
				html_string+=str;
				html_string+='</table>';
			}else
			{
				html_string="no images found..";
			}
			
			div.innerHTML = html_string;
			div.style.position = "fixed";
			div.style.zIndex = 2;
			div.style.top = 50 + 'px';
			div.style.left = 50 + 'px';
			div.style.padding = 15 + 'px';
			div.style.width = 400 + 'px';
			div.style.height = 150 + 'px';
			div.style.overflowY="scroll";
			div.style.overflowX="hidden";
			div.style.backgroundColor="#e6e6e6";
			div.style.border="thick solid #66655f";
			document.body.appendChild(div);	
		}
		function chooseImage(img)
		{
			// set img.id as chosen one!
			if(image_search_target)
			{
				image_search_target=false;
				var src = "http://www.snoep.at/graphics/marisuka.png";
				src = "/mgcms/cms_images/"+img.id+".png";
				if(src)
				{
					var html="<img src='"+src+"' align='right' height='40'>"; // javascript definitions already uses double "
					document.execCommand('insertHTML', false, html);
				}
			}else
			{
				document.getElementById("media_url").value=img.id;
			}
			// set the preview AGAIN!
			// just RECREATE the entire iframe!
			closePop();
		}
		function updateMedia(field)
		{
			var html="";
			// dit is afhankelijk van het media type!
			// voor nu doen we gewoon een iframe ernaartoe.
			var url=document.getElementById("media_url").value;
			// recreate the iframe, to get control over it!
			document.getElementById("media").innerHTML='<iframe id="media_preview" width="427px" height="278px" src=""></iframe>';
			
			if(url!="")
			{
				if(url.indexOf("www")==-1 && url.indexOf("http")==-1)
				{
					// guess it's internal, so re write!
					var src="<html><body style='padding:0px; margin:0px;'>";
					src+="<img src='../cms_images/"+url+".png' height='100%'>";
					src+="</body></html>";
					var temp = document.getElementById('media_preview');
					temp.contentDocument.write(src);
					temp.contentDocument.close(); // close the connection, or body onload WON't fire!
				}else
				{
					var video_code=getYoutubeVideoCode(url);
					var iframe_url="https://www.youtube.com/embed/"+video_code+"?autoplay=0&showinfo=0&controls=0&rel=0&modestbranding=1";
					document.getElementById('media_preview').src=iframe_url;
				}
			}
		}
		
		function closePop()
		{
			var div = document.getElementById('searchImgPopup');
			document.body.removeChild(div);
		}
		var image_search_target=false;
		function handleButtons(d){
			var cmd=d.getAttribute("data-id");
			var tgt=d.getAttribute("data-option");
			console.log("you clicked a button! cmd: "+cmd + ", tgt: "+tgt);
			switch(cmd)
			{
				case "update_media":
//					window.alert("you clicked update Preview!");
					updateMedia(tgt);
				break;
				case "clr":
					//empty a text field!
					if(tgt=="q_body")
					{
						document.getElementById("q_title").innerHTML="";
					}
					document.getElementById(tgt).innerHTML="";
				break;
				case "submit":
					// save all changes (or create new)
					if(checkForm())submit();
				break;
				case "submit_new":
					// save as new question changes!
					if(checkForm())
					{
						question_details.id=""; // erase id!
						submit();
					}
					
				break;
				case "cancel":
					// go back to list of questions
					// free the question!
					location.href="questionFree.php?id="+question_details.id;
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

			setTextTools("q_body","body_help");
			setTextTools("antw_A","antw_A_help");
			setTextTools("antw_B","antw_B_help");
			setTextTools("antw_C","antw_C_help");
			setTextTools("antw_D","antw_D_help");
			setTextTools("hint","hint_help");
			setTextTools("right","right_help");
			setTextTools("wrong","wrong_help");
			setMediaTools("media","media_help");
			
			documentPrepopulate();
		};
		function documentPrepopulate()
		{
			//prepopulate fields that need default values (using rel attribute) 
			$('.prepopulate').each(function()
			{
				switch( $(this).get(0).tagName )
				{
					case "DIV":	
						if( stripScriptsToCheckEmpty($(this).html()) =='' )
						{					
							$(this).html($(this).attr("rel")).addClass('empty');  //.attr('rel',prepop_array[i].v));
						}
					break;
					default:
						console.log("don't know how to prepopulate input of type: "+$(this).get(0).tagName );
					break;

				
				}

				$(this).focus(handleFocus);
				$(this).blur(handleBlur);
			});
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
		function handleBlur()
		{
			switch( $(this).get(0).tagName )
			{
				case "DIV":		
					if( stripScriptsToCheckEmpty($(this).html()) =='' )
					{
						$(this).html( $(this).attr('rel') ).addClass('empty'); 
					}
					//jQuery(this).val( jQuery(this).attr('rel') ).removeClass('not-empty'); 
				break;
				default:
					console.log("don't know how to prepopulate input of type: "+$(this).get(0).tagName);
				break;
			}
		}
		function handleFocus()
		{
//			console.log("FOCUS people"+$(this).val());
			switch( $(this).get(0).tagName )
			{
					case "DIV":		
						if( $(this).html() == $(this).attr('rel') )
							$(this).html('').removeClass('empty'); 
					break;
					case "":
						//if( $(this).val() == $(this).attr('rel') )
						//	$(this).val('').addClass('not-empty'); 
					break;
					default:
						console.log("don't know how to prepopulate input of type: "+$(this).get(0).tagName);
					break;
			}
		}

		var walk_the_DOM = function walk(node, func) 
		{
			func(node);
			node = node.firstChild;
			while (node) {
				walk(node, func);
				node = node.nextSibling;
			}
		};
		function addHidden(theForm, key, value) 
		{
			// Create a hidden input element, and append it to the form:
			var input = document.createElement('input');
			input.type = 'hidden';
			input.name = key; 
			// strip all styles, classes and id's, using DOM
			var wrapper = document.createElement('div');
			wrapper.innerHTML= value;
			walk_the_DOM(wrapper, function(el) {
				if(el.removeAttribute) {
					el.removeAttribute('id');
					el.removeAttribute('style');
					el.removeAttribute('class');
				}
			});
			var cleaned_result = wrapper.innerHTML;
			cleaned_result=cleaned_result.replace(/<\/div>/ig,"<br>"); 
			cleaned_result=cleaned_result.replace(/<div>/ig,"");  // replace divs with <br> tags!
			// clean spans to normal
			cleaned_result=cleaned_result.replace(/<\/span>/ig,""); 
			cleaned_result=cleaned_result.replace(/<span>/ig,""); 
			var scriptloos=cleaned_result.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, " ").trim();
			var getrimd=  scriptloos.replace(/^\&nbsp\;|<br?\>*/gi, "").replace(/\&nbsp\;|<br?\>$/gi, "").trim(); // geen br " " of nbsp  aan begin of eind.
			
			getrimd=getrimd.replace(/(\r\n|\n|\r)/gm,""); // geen linebreaks in deze input (gaan via br of div!).
			input.value = getrimd;
			theForm.appendChild(input);
		}
		
		function getCheckedRadioId(name) {
			var elements = document.getElementsByName(name);

			for (var i=0, len=elements.length; i<len; ++i)
				if (elements[i].selected) return elements[i].value;
		}
		function checkForm()
		{
			// If the script gets this far through all of your fields
			// without problems, it's ok and you can submit the form
			
			//$("#published").val( $("#published").is(':checked') ? $("#published").val() : null );
			
			// remove all automatic values, prepopulated fields!
			$('.prepopulate').each(function()
			{
				switch( $(this).get(0).tagName )
				{
					case "DIV":	
						if($(this).html() ==$(this).attr("rel"))
						{					
							$(this).html("");
						}
						console.log("cancel prepopulation of div: " +$(this).attr("id"));
					break;
					default:
						console.log("don't know cancel prepopulation input of type: "+$(this).get(0).tagName );
					break;
				}

			});
			
			
			// did user give an answer?
			var selectedValue="";
			var radios = document.getElementsByName("answer");
			for(var i = 0; i < radios.length; i++) {
				if(radios[i].checked) selectedValue = radios[i].value;   
			}
			if(selectedValue=="")
			{
				window.alert("Er is geen goed antwoord geselecteerd.");
				return false;
			}
			
			// is there a cat?
			var e = document.getElementById("cat");
			selectedValue = e.options[e.selectedIndex].value;
			if(selectedValue=="0")
			{
				window.alert("Er is geen categorie geselecteerd. Dit is goed, maar de vraag zal niet worden weergegeven.");
			}
			return true;
		}
		function submit()
		{
			// we need to create a few dummy inputs for the form to be handled correctly.
			// then we call form.submit
			var frm=document.getElementById("frm");
			addHidden(frm,"id",question_details.id);
			addHidden(frm,"hintcost",60);// points hintcost, bricks, now automatic.
			addHidden(frm,"bricks",25);
			addHidden(frm,"points",120);
			addHidden(frm,"body",document.getElementById("q_body").innerHTML);
			addHidden(frm,"title",document.getElementById("q_title").innerHTML);
			addHidden(frm,"right",document.getElementById("right").innerHTML);
			addHidden(frm,"wrong",document.getElementById("wrong").innerHTML);
			addHidden(frm,"A",document.getElementById("antw_A").innerHTML);
			addHidden(frm,"B",document.getElementById("antw_B").innerHTML);
			addHidden(frm,"C",document.getElementById("antw_C").innerHTML);
			addHidden(frm,"D",document.getElementById("antw_D").innerHTML);
			addHidden(frm,"hint",document.getElementById("hint").innerHTML);
			var selectedValue="";
			var radios = document.getElementsByName("answer");
			for(var i = 0; i < radios.length; i++) {
				if(radios[i].checked) selectedValue = radios[i].value;   
			}
			//addHidden(frm,"answer",selectedValue);
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
		
		</script>

	</head>
<body>
<form id="frm" action="questionSetDetails.php"  method="post" enctype="multipart/form-data">
<div id="interface">
<button type="button" data-id="submit" onClick="handleButtons(this);"><img src="img/ok.png"  height="10px"> Opslaan</button> 
<!-- <button type="button" data-id="preview" onClick="handleButtons(this);">Preview</button> -->
<button type="button" data-id="cancel" onClick="handleButtons(this);"><img src="img/delete.png" height="10px"> Annuleren</button>
<button type="button" data-id="submit_new" onClick="handleButtons(this);"><img src="img/add.png"  height="10px"> Opslaan als kopie</button> 
<script>
	document.write('<span class="soft">blob-id:'+question_details.id+'</span>');
</script>

</div>
<table>
<tr>
<td>Published:</td><td></td>
<td>
<script>
	if(question_details.published=="1" || question_details.published=="") question_details.published=1;
	if(question_details.published=="0") question_details.published=0;
	if(question_details.published)
	{
		document.write('<input type="checkbox" id="published" name="published" checked>');
	}else
	{
		document.write('<input type="checkbox" id="published" name="published">');
	}
</script>
</select></td>
<td><div class="help" id="pub_help">Als published niet aan staat, zit de vraag tijdelijk niet in de quiz!</div></td>
</tr>

<tr>
<td>Categorie:</td><td></td>
<td><select name="cat" id="cat">
<script>
var i;
var category_names=["none","Historie","Bedrijven","Maatschappij","Natuur"];

for(i=0;i<category_names.length;i++)
{
	if(question_details.cat=="" || question_details.cat===undefined) question_details.cat=0;
	else
		question_details.cat=parseInt(question_details.cat);
	var sel="";
	if(i==question_details.cat) sel=" selected ";
	if(i==0)
	{
		document.write('<option value="'+i+'"'+sel+'>geef een categorie aan</option>');
	}else
	{
		document.write('<option value="'+i+'"'+sel+'>'+category_names[i]+'</option>');
	}
}

// LOCKING
if(question_details.locked==true)
{
	// sorry, something went wrong, to prevent you from saving over others, I
	// will return you to the list, which will surely show the lock!
	window.alert("sorry, this question is locked..");
	location.href="index.php";
}

</script>
</select></td>
<td><div class="help" id="cat_help">Kies een categorie: Historie
- Bedrijven
- Maatschappij
- Natuur
</div></td>
</tr>


<tr>
<td>Plaatsnaam:</td><td></td>
<td><select name="city" id="city">
<script>
var i;
var city_names=["none","Steenbergen","De Heen","Nieuw-Vossemeer","Kruisland","Dinteloord","Welberg"];

for(i=0;i<city_names.length;i++)
{
	if(question_details.city=="" || question_details.city===undefined) question_details.city=0;
	else
		question_details.city=parseInt(question_details.city);
	var sel="";
	if(i==question_details.city) sel=" selected ";
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
<td><div class="help" id="city_help">Kies een plaatsnaam bij de vraag: Steenbergen, De Heen, Nieuw-Vossemeer, Kruisland, Dinteloord of Welberg


</div></td>
</tr>
<!--- temporarily deleted from edit!
<tr>
<td>Punten:</td><td></td>
<td>
	<script>
/*		var nr=0;
		console.log(question_details.points);
		if(question_details.points!=="") nr=parseInt(question_details.points);
		var html_string='<input type="number" value="'+nr+'" name="points" id="points" min="0" max="1000">';
		document.write(html_string);
    </script>*/
</td>
<td><div class="help" id="points_help">Het aantal punten dat je krijgt als je de vraag goed hebt.</div></td>
</tr>

<tr>
<td>Stenen:</td><td></td>
<td>

	<script>
/*		var nr=0;
		console.log(question_details.bricks);
		if(question_details.bricks!=="") nr=parseInt(question_details.bricks);
		var html_string='<input type="number" value="'+nr+'" name="bricks" id="points" min="0" max="1000">';
		document.write(html_string);*/
    </script>

</td>
<td><div class="help" id="cat_help">Met stenen koop je huizen.</div></td>
</tr>
-->

<tr>
<td>Vraag:</td><td></td>
<td>
<!-- question title+body, original dimensions 854x223 in design-->
<div style="background-color: #98c475; width:427px; height: 112px; overflow: hidden;">
<div id="q_title" contenteditable="true" class="prepopulate" rel="Type hier de titel van de vraag" style="color: #01286f; text-align: left; font-size: 21px; font-family: 'Luckiest Guy';">
<script>

		if(question_details.title=="")question_details.title="";
		document.write(question_details.title);
</script>
</div>
<div id="q_body" contenteditable="true" class="prepopulate" rel="Type hier de vraag" style="color: #2f2f2f; text-align: left; font-size: 13.25px; font-family: Tahoma, Verdana, Segoe, sans-serif;">
<script>
		if(question_details.body=="")question_details.body="";
		document.write(question_details.body);
</script>
</div>
</div>
</td>
<td><div class="help" id="body_help"></div></td>
</tr>


<tr>
<td>Plaatje of video bij de vraag:</td><td></td>
<td>
<!-- question title+body, original dimensions 854x557 in design-->
<div style="background-color: #fff; width:427px; height: 278px; overflow: hidden;">
	<div id="media">
		<script>
			// dit is afhankelijk van het media type!
			// voor nu doen we gewoon een iframe ernaartoe.
			var url=question_details.media;
			console.log("question_details.media="+question_details.media);
			document.write('<iframe id="media_preview" width="427px" height="278px" src="'+url+'"></iframe>');
			
			if(question_details.media!="")
			{
				if(question_details.media.indexOf("www")==-1 && question_details.media.indexOf("http")==-1)
				{
					// guess it's internal, so re write!
					var src="<html><body style='padding:0px; margin:0px;'>";
					src+="<img src='../cms_images/"+question_details.media+".png' height='100%'>";
					src+="</body></html>";
					var temp = document.getElementById('media_preview');
					temp.contentDocument.write(src);
					temp.contentDocument.close(); // close the connection, or body onload WON't fire!
				}else
				{
					var video_code=getYoutubeVideoCode(question_details.media);
					var iframe_url="https://www.youtube.com/embed/"+video_code+"?autoplay=0&showinfo=0&controls=0&rel=0&modestbranding=1";
					document.getElementById('media_preview').src=iframe_url;
				}
			}

			/*
			https://www.youtube.com/watch?v=8PaUDD_kYpQ ->
			OR
			http://youtu.be/8PaUDD_kYpQ
			//www.youtube.com/embed/8PaUDD_kYpQ
			
			// we need playsinline for playing right on an ipad!
			// NO CONTROLS:
			https://www.youtube.com/embed/s3M5zfSF54g?autoplay=1&showinfo=0&controls=0&rel=0&modestbranding=1
			// With controls.
			https://www.youtube.com/embed/s3M5zfSF54g?autoplay=1&showinfo=0&controls=1&rel=0&modestbranding=1&color=white&theme=light
			// dark is the NORMAL theme! Light is light grey. Color is the color of the loading bar red or white.
			
			
			
			https://www.youtube.com/embed/s3M5zfSF54g?autoplay=1&showinfo=0&controls=0&rel=0&playsinline=1&enablejsapi=1&origin=www.snoep.at&playerapiid=diixoubkOUHD
			*/
			
		</script>
	</div>
</div>
</td>
<td><div class="help" id="media_help">Image tools. Video tools.</div></td>
</tr>

<tr></tr>
<script>
	var i;
	for(i=0;i<4;i++)
	{
		var letter=String.fromCharCode(i+65);
		if(question_details[letter]=="")question_details[letter]="";
		var s="";
		s+="<tr>";
		 s+="<td>";
			s+='<div style="color: #01286f; text-align: right; font-size: 21px; font-family: \'Luckiest Guy\';">'+letter+'</div>';
		 s+="</td>";
		 s+="<td>";
			if(letter==question_details["answer"])
			{
				s+='<input type="radio" name="answer" value="'+letter+'" checked>';
			}else
			{
				s+='<input type="radio" name="answer" value="'+letter+'">';
			}
		 s+="</td>";
		 s+="<td>";
			//  <!-- question title+body, original dimensions 854x168 in design-->
			
			s+='<div contenteditable="true" id="antw_'+letter+'" style="width: 427px; height: 84px; background-color: #9cd2f7; color: #2f2f2f; text-align: left; font-size: 13.25px; font-family: Tahoma, Verdana, Segoe, sans-serif;">'+question_details[letter]+'</div>';
		 s+="</td>";
		 s+='<td><div class="help" id="antw_'+letter+'_help">Text tools.</div></td>';
		s+="</tr>";
		document.write(s);
	}
</script>



<tr>
<td>Hint:</td><td></td>
<td>
<!-- hint body, original dimensions 809x140 in design-->

<div style="background-color: #dddddd; width:404px;  height: 276px; overflow: hidden;">
<div id="hint" contenteditable="true" style="color: #2f2f2f; text-align: left; font-size: 13.25px; font-family: Tahoma, Verdana, Segoe, sans-serif;">
<script>
	if(question_details.hint=="")question_details.hint="";
	document.write(question_details.hint);
</script>
</div>
</div>
</td>
<td><div class="help" id="hint_help">Text Tools</div></td>
</tr>

<tr>
<td>Antwoord goed:</td><td></td>
<td>
<!-- question title+body, original dimensions 809x552 in design-->
<div style="background-color: #dddddd; width:404px; height: 276px; overflow: hidden;">
<div id="right" contenteditable="true" style="color: #2f2f2f; text-align: left; font-size: 13.25px; font-family: Tahoma, Verdana, Segoe, sans-serif;">
<script>
	if(question_details.right=="")question_details.right="";
	document.write(question_details.right);
</script>
</div>
</div>
</td>
<td><div class="help" id="right_help">Text Tools</div></td>
</tr>


<tr>
<td>Antwoord fout:<br> <span class="help">(leeg laten als niet gewenst)</span></td><td></td>
<td>
<!-- question title+body, original dimensions 809x552 in design-->
<div style="background-color: #dddddd; width:404px;  height: 276px; overflow: hidden;">
<div id="wrong" contenteditable="true" style="color: #2f2f2f; text-align: left; font-size: 13.25px; font-family: Tahoma, Verdana, Segoe, sans-serif;">
<script>
	if(question_details.wrong=="")question_details.right="Tekst die verschijnt als de vraag goed beantwoord is.";
	document.write(question_details.wrong);
</script>
</div>
</div>
</td>
<td><div class="help" id="wrong_help">Text Tools</div></td>
</tr>


</table>
<div id="interface">
<button type="button" data-id="submit" onClick="handleButtons(this);"><img src="img/ok.png"  height="10px"> Opslaan</button> 
<!-- <button type="button" data-id="preview" onClick="handleButtons(this);">Preview</button> -->
<button type="button" data-id="cancel" onClick="handleButtons(this);"><img src="img/delete.png" height="10px"> Annuleren</button>
<button type="button" data-id="submit_new" onClick="handleButtons(this);"><img src="img/add.png"  height="10px"> Opslaan als kopie</button> 
</div>

</form>


<div id="list"></div>
</body>
</html>
