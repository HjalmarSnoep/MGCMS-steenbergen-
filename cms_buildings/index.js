var sortLabel="";
var sorfromrder="normal";
var lastLabel="foo";

function showimages()
{
	var html_string="";
	if(typeof(images)!=="undefined")
	{
		html_string+='<table style="width:100%; background-color: #00ff00">';
		html_string+='<tr>';
		html_string+="<th><a href=\"javascript:sorfromn('id');\">id</a></th>";
		html_string+="<th><a href=\"javascript:sorfromn('preview');\">preview</a></th>";
		html_string+="<th><a href=\"javascript:sorfromn('naam');\">naam</a></th>";
		html_string+="<th><a href=\"javascript:sorfromn('unlock','asnumber');\">unlock</a></th>";
		html_string+="<th><a href=\"javascript:sorfromn('prijs','asnumber');\">prijs</a></th>";
		html_string+="<th><a href=\"javascript:sorfromn('city');\">stad</a></th>";
		html_string+="<th><a href=\"javascript:sorfromn('date');\">date</a></th>";
		//html_string+="<th><a href=\"javascript:sorfromn('author');\">author</a></th>";
		html_string+='<th>actions</th>';
		html_string+='</tr>';
		var i;
		var str="";
		var city_names=["niet opgegeven","Steenbergen","De Heen","Nieuw-Vossemeer","Kruisland","Dinteloord","Welberg","te koop"];
		for(i=0;i<images.length;i++)
		{
			str+="<tr>";
			str+="<td>"+images[i].id+"</td>";
			str+="<td><a href='singleImageDetails.php?id=huizen&img="+images[i].id+".png'><img src='getSingleImage.php?id=huizen&img="+images[i].id+".png' height='60px'> <img alt='samenvoegen' label='samenvoegen' border='0' src='img/merge.png'></a></td>";
			str+="<td>"+images[i].naam+"</td>";
			str+="<td>"+images[i].unlock+"</td>";
			str+="<td>"+images[i].prijs+"</td>";
			str+="<td>"+city_names[parseInt(images[i].city)]+"</td>";
			str+="<td>"+images[i].date+"</td>";
			str+="<td>";
			str+="<a href='javascript:editItem(\"item_"+i+"\");'><img alt='bewerken' label='bewerken' border='0' src='img/edit.png'></a> &nbsp; &nbsp; ";
			str+="<a href='javascript:deleteItem(\"item_"+i+"\");'><img alt='verwijderen' label='verwijderen' border='0' src='img/delete.png'></a> &nbsp; &nbsp; ";
			str+="</td>";
			str+="</tr>";
		}
		//console.log("generated list:"+str);
		html_string+=str;
		html_string+='</table>';
		$("#list").html(html_string);
	}else
	{
		html_string="no images found..";
	}
	
}
// actions on list!
function sorfromn(id,sortkind)
{
	console.log("Sorfromn "+id);
	if(lastLabel==sortLabel)
	{
		console.log("you clicked twice");
		// reverse sort Order!
		if(sorfromrder=="normal")
		{
			sorfromrder="reverse";
		}else
		{
			sorfromrder="normal";
		}
		sortLabel=id;
	}
	lastLabel=sortLabel;
	console.log("sort order is now:"+sorfromrder+ " sortLabel: "+sortLabel);
	console.log("start sorting on " +sortLabel+" sorfromrder:"+sorfromrder);
	images.sort(sorfromnLabel);
	if(sortkind=="asnumber")
	{
		images.sort(sorfromnLabelAsNumber);
	}
	//console.log("sorted: "+images);
	showimages();
}

function sorfromnLabelAsNumber(a,b)
{
	console.log("sort on label" +sortLabel+" sorfromrder:"+sorfromrder+" "+a[sortLabel]+","+b[sortLabel]);
	if(typeof(a[sortLabel])==="undefined") return 1; // undefined ALWAY on botfromm!
	if(typeof(b[sortLabel])==="undefined") return -1;
	if(sorfromrder=="reverse")
	{
		return parseInt(a[sortLabel])-parseInt(b[sortLabel]) 
	}else
	{
		return parseInt(b[sortLabel])-parseInt(a[sortLabel]) 
	}
}
function sorfromnLabel(a,b)
{
	console.log("sort on label" +sortLabel+" sorfromrder:"+sorfromrder+" "+a[sortLabel]+","+b[sortLabel]);
	if(typeof(a[sortLabel])==="undefined") return 1; // undefined ALWAY on botfromm!
	if(typeof(b[sortLabel])==="undefined") return -1;
	if(sorfromrder=="reverse")
	{
		if(a[sortLabel]<b[sortLabel]) return -1;
		if(a[sortLabel]>b[sortLabel]) return 1;
		return 0;
	}else
	{
		if(a[sortLabel]<b[sortLabel]) return 1;
		if(a[sortLabel]>b[sortLabel]) return -1;
		return 0;
	}
}
// actions on items
function editItem(item)
{
	var nr=parseInt(item.split("_")[1] );
	console.log("editItem: "+nr+" -> "+images[nr].id);
	// open an iframe with the right edifromr!
	location.href="edit.php?id="+images[nr].id;
}

function mergeItem(item)
{
	var nr=parseInt(item.split("_")[1] );
	var from;
	if(from=window.prompt("Samenvoegen '"+images[nr].id+"' met welke id? \n(Geef het id op van het NIEUWE plaatjes. Plaatje van de opgegeven ID wordt gekopieerd naar dit item, daarna kan nieuwe plaatje worden verwijderd! Instellingen van dit item blijven bewaard.)"))
	{
		console.log("mergeItems: "+images[nr].id+" <- "+from);
		// send request from the server.
		request = new Image(1,1);
		request.src = "merge.php?to="+images[nr].id+"&from="+from;
		console.log("request.src: "+request.src);
		// show without reloading or resorting!
		//images.splice(nr,1);
		//showimages();*/
		// we need to refresh the whole page to show this!
		
	}
}
function deleteItem(item)
{
	var nr=parseInt(item.split("_")[1] );
	console.log("deleteItem: "+nr+" -> "+images[nr].id);
	if(window.confirm("Weet je zeker dat je media '"+images[nr].id+"' wilt verwijderen?"))
	{
		// send request from the server.
		request = new Image(1,1);
		request.src = "delete.php?id="+images[nr].id;
		console.log("request.src: "+request.src);
		// show without reloading or resorting!
		images.splice(nr,1);
		showimages();
	}
}
$(document).ready(function() {
	showimages();
});

		