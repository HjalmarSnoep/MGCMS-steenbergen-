var sortLabel="";
var sorfromrder="normal";
var lastLabel="foo";

function showitems()
{
	var html_string="";
	if(typeof(items)!=="undefined")
	{
		html_string+='<table style="width:100%; background-color: #00ff00">';
		html_string+='<tr>';
		html_string+="<th><a href=\"javascript:sorfromn('id');\">id</a></th>";
		html_string+="<th><a href=\"javascript:sorfromn('progress','asnumber');\">progress</a></th>";
		html_string+="<th><a href=\"javascript:sorfromn('punten','asnumber');\">punten</a></th>";
		html_string+="<th><a href=\"javascript:sorfromn('stenen','asnumber');\">stenen</a></th>";
		html_string+="<th><a href=\"javascript:sorfromn('school');\">school</a></th>";
		html_string+="<th><a href=\"javascript:sorfromn('last_played');\">laatst gespeeld</a></th>";
		//html_string+="<th><a href=\"javascript:sorfromn('author');\">author</a></th>";
		html_string+='<th>actions</th>';
		html_string+='</tr>';
		var i;
		var str="";
		var city_names=["niet opgegeven","Steenbergen","De Heen","Nieuw-Vossemeer","Kruisland","Dinteloord","Welberg","te koop"];
		for(i=0;i<items.length;i++)
		{
			str+="<tr>";
			str+="<td>"+items[i].id+"</td>";
			str+="<td>"+items[i].progress+"</td>";
			str+="<td>"+items[i].punten+"</td>";
			str+="<td>"+items[i].stenen+"</td>";
			str+="<td>"+items[i].school+"</td>";
			str+="<td>"+items[i].date+"</td>";
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
		html_string="no items found..";
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
	items.sort(sorfromnLabel);
	if(sortkind=="asnumber")
	{
		items.sort(sorfromnLabelAsNumber);
	}
	//console.log("sorted: "+items);
	showitems();
}

function sorfromnLabelAsNumber(a,b)
{
//	console.log("sort on label" +sortLabel+" sorfromrder:"+sorfromrder+" "+a[sortLabel]+","+b[sortLabel]);
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
//	console.log("sort on label" +sortLabel+" sorfromrder:"+sorfromrder+" "+a[sortLabel]+","+b[sortLabel]);
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
	console.log("editItem: "+nr+" -> "+items[nr].id);
	// open an iframe with the right edifromr!
	location.href="edit.php?id="+items[nr].id;
}

function mergeItem(item)
{
	var nr=parseInt(item.split("_")[1] );
	var from;
	if(from=window.prompt("Samenvoegen '"+items[nr].id+"' met welke id? \n(Geef het id op van het NIEUWE plaatjes. Plaatje van de opgegeven ID wordt gekopieerd naar dit item, daarna kan nieuwe plaatje worden verwijderd! Instellingen van dit item blijven bewaard.)"))
	{
		console.log("mergeItems: "+items[nr].id+" <- "+from);
		// send request from the server.
		request = new Image(1,1);
		request.src = "merge.php?to="+items[nr].id+"&from="+from;
		console.log("request.src: "+request.src);
		// show without reloading or resorting!
		//items.splice(nr,1);
		//showitems();*/
		// we need to refresh the whole page to show this!
		
	}
}
function deleteItem(item)
{
	var nr=parseInt(item.split("_")[1] );
	console.log("deleteItem: "+nr+" -> "+items[nr].id);
	if(window.confirm("Weet je zeker dat je media '"+items[nr].id+"' wilt verwijderen?"))
	{
		// send request from the server.
		request = new Image(1,1);
		request.src = "delete.php?id="+items[nr].id;
		console.log("request.src: "+request.src);
		// show without reloading or resorting!
		items.splice(nr,1);
		showitems();
	}
}
$(document).ready(function() {
	showitems();
});

		