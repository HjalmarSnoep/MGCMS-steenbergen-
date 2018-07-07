var sortLabel="";
var sortOrder="normal";
var lastLabel="foo";

var category_names=["none","Historie","Bedrijven","Maatschappij","Natuur"];
var city_names=["none","Steenbergen","De Heen","Nieuw-Vossemeer","Kruisland","Dinteloord","Welberg"];
var filters={};
filters.city=0;
filters.category=0;
function showQuestions()
{
	var html_string="";
	if(typeof(questions)!=="undefined")
	{
		html_string+='<table style="width:100%; background-color: #00ff00">';
		html_string+='<tr>';
		html_string+="<th>nr</th>";
		html_string+="<th><a href=\"javascript:sortOn('id');\">id</a></th>";
		html_string+="<th><a href=\"javascript:sortOn('title');\">title</a></th>";
		html_string+="<th><a href=\"javascript:sortOn('preview');\">preview</a></th>";
		html_string+="<th><a href=\"javascript:sortOn('cat');\">category</a></th>";
		html_string+="<th><a href=\"javascript:sortOn('city');\">city</a></th>";
		html_string+="<th><a href=\"javascript:sortOn('date');\">date</a></th>";
		html_string+="<th><a href=\"javascript:sortOn('author');\">author</a></th>";
		html_string+='<th>actions</th>';
		html_string+='</tr>';
		var i;
		var str="";
		var result_count=0;
		for(i=0;i<questions.length;i++)
		{
			if((filters.city==0 || filters.city==questions[i].city) && (filters.category==0 || filters.category==questions[i].cat))
			{
				result_count++;
				str+="<tr>";
				str+="<td>"+(result_count)+"</td>";
				str+="<td>"+questions[i].id+"</td>";
				str+="<td>"+questions[i].title+"</td>";
				if(typeof(questions[i].body)!=="undefined")
					str+="<td>"+questions[i].body.substr(0,50)+"</td>";
				else
					str+="<td>...</td>";
					
				str+="<td>"+category_names[questions[i].cat]+"</td>";
				str+="<td>"+city_names[questions[i].city]+"</td>";
				str+="<td>"+questions[i].date+"</td>";
				str+="<td>"+questions[i].author+"</td>";
				str+="<td>";
				if(questions[i].locked!="")
				{
					str+="locked by<br>"+questions[i].locked;
				}else
				{
					str+="<a href='javascript:editItem(\"item_"+i+"\");'><img alt='bewerken' label='bewerken' border='0' src='img/edit.png'></a> &nbsp; &nbsp; ";
					str+="<a href='javascript:deleteItem(\"item_"+i+"\");'><img alt='verwijderen' label='verwijderen' border='0' src='img/delete.png'></a> ";
				}
				str+="</td>";
				str+="</tr>";
			}
		}
		if(result_count==0)
		{
			str+="<tr>";
				str+="<td colspan='9'>";
				str+="No results with these filters:<br>";
				for(all in filters)
				{
					str+=all+":"+filters[all]+"<br>";
				}
				str+"<br><br>Try changing filter settings and try again.";
				
				str+="</td>";
				str+="</tr>";
		}
		//console.log("generated list:"+str);
		html_string+=str;
		html_string+='</table>';
		$("#list").html(html_string);
	}else
	{
		html_string="no questions found..";
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
	questions.sort(sortOnLabel);
	//console.log("sorted: "+questions);
	showQuestions();
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
	console.log("editItem: "+nr+" -> "+questions[nr].id);
	// open an iframe with the right editor!
	location.href="editQuestion.php?id="+questions[nr].id;
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
	console.log("deleteItem: "+nr+" -> "+questions[nr].id);
	if(window.confirm("Weet je zeker dat je vraag '"+questions[nr].title+"' wilt verwijderen?"))
	{
		// send request to the server.
		 request = new Image(1,1);
		request.src = "questionDelete.php?id="+questions[nr].id;
		
		// show without reloading or resorting!
		questions.splice(nr,1);
		showQuestions();
	}
}
function setFilterCity()
{
  var myselect = document.getElementById("city");
  filters.city=myselect.options[myselect.selectedIndex].value;
  showQuestions();
}

function setFilterCategory()
{
  var myselect = document.getElementById("category");
  filters.category=myselect.options[myselect.selectedIndex].value;
  showQuestions();
}
function initInterface()
{
	var html='<button type="button" onclick="newItem();"><img src="img/add.png" height="10px"> Nieuwe vraag</button>';
	html+=' <a href="showQuestionsText.php">Tekst overzicht alle vragen</a>';
	html+='<span id="filters" style="float: right; padding: 5px; background-color: rgba(0,0,0,0.1);">';
	html+=' filter-city: <select id="city" onChange="setFilterCity()">';
	for(i=0;i<city_names.length;i++)
		html+='<option value="'+i+'">'+city_names[i]+'</option>';
	html+='</select>';
	html+=' &nbsp; ';
	html+=' filter-category: <select id="category" onChange="setFilterCategory()">';
	for(i=0;i<category_names.length;i++)
		html+='<option value="'+i+'">'+category_names[i]+'</option>';
	html+='</select>';
//	html+='search: <input type="search" name="search">';
	html+='</span>';
	
	$("#interface").html(html).css("background-color","rgba(0,0,0,0.1)").css("padding","5px").css("overflow","hidden"); // this last overflow makes it contain the filters. see http://pageaffairs.com/notebook/containing-floats
}

$(document).ready(function() {
	initInterface();
	showQuestions();
});

		