var sortLabel="";
var sortOrder="normal";
var lastLabel="foo";

function showimages()
{
	var html_string="";
	if(typeof(images)!=="undefined")
	{
		html_string+='<table style="width:100%; background-color: #00ff00">';
		html_string+='<tr>';
		html_string+="<th><a href=\"javascript:sortOn('id');\">id</a></th>";
		html_string+="<th><a href=\"javascript:sortOn('preview');\">preview</a></th>";
		html_string+="<th><a href=\"javascript:sortOn('date');\">date</a></th>";
		//html_string+="<th><a href=\"javascript:sortOn('author');\">author</a></th>";
		html_string+='<th>actions</th>';
		html_string+='</tr>';
		var i;
		var str="";
		for(i=0;i<images.length;i++)
		{
			str+="<tr>";
			str+="<td>"+images[i].id+"</td>";
			str+="<td><a href='../cms_images/"+images[i].id+".png'><img src='../cms_images/"+images[i].id+".png' height='60px'></a></td>";
			str+="<td>"+images[i].date+"</td>";
			str+="<td>";
			str+="<a href='javascript:deleteItem(\"item_"+i+"\");'><img alt='verwijderen' label='verwijderen' border='0' src='img/delete.png'></a> ";
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
function sortOn(id)
{
	console.log("SortOn "+id);
	if(lastLabel==sortLabel)
	{
		console.log("you clicked twice");
		// reverse sort Order!
		if(sortOrder=="normal")
		{
			sortOrder="reverse";
		}else
		{
			sortOrder="normal";
		}
		sortLabel=id;
	}
	lastLabel=sortLabel;
	console.log("sort order is now:"+sortOrder+ " sortLabel: "+sortLabel);
	console.log("start sorting on " +sortLabel+" sortOrder:"+sortOrder);
	images.sort(sortOnLabel);
	//console.log("sorted: "+images);
	showimages();
}
function sortOnLabel(a,b)
{
	console.log("sort on label" +sortLabel+" sortOrder:"+sortOrder+" "+a[sortLabel]+","+b[sortLabel]);
	if(typeof(a[sortLabel])==="undefined") return 1; // undefined ALWAY on bottom!
	if(typeof(b[sortLabel])==="undefined") return -1;
	if(sortOrder=="reverse")
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
	// open an iframe with the right editor!
	location.href="editQuestion.php?id="+images[nr].id;
}
function newItem()
{
	console.log("newItem Clicked");
	// open an iframe with the right editor!
	location.href="editQuestion.php?id="; // no id means new question!
}
function deleteItem(item)
{
	var nr=parseInt(item.split("_")[1] );
	console.log("deleteItem: "+nr+" -> "+images[nr].id);
	if(window.confirm("Weet je zeker dat je media '"+images[nr].id+"' wilt verwijderen?"))
	{
		// send request to the server.
		 request = new Image(1,1);
		request.src = "imageDelete.php?id="+images[nr].id;
		
		// show without reloading or resorting!
		images.splice(nr,1);
		showimages();
	}
}
$(document).ready(function() {
	showimages();
});

		