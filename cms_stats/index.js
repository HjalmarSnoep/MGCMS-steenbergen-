function showTab(id)
{
	console.log("showTab"+id);
	current_tab=id;
	$("li").removeClass("tabActiveHeader");
	$("#"+id).addClass("tabActiveHeader");
	$('fieldset legend').eq(2).text(current_tab);// this	
	
	var url = "get_stats.php";
	var data = {};
	data.start=$('#start').val();
	data.end=$('#end').val();
	data.stat=id;
	data.ck=new Date().getTime();
	var str=url+"?";
	for(all in data) str+=all+"="+data[all]+"&";
	console.log(str);
	$.getJSON( url, data,loadStatsSucces,loadStatsFail);	
	
}
function getMinMax(data,labels)
{
	var mm={};
	var i,l;
	mm.min_y=10000000000;
	mm.max_y=-10000000000;
	for(l=0;l<labels.length;l++)
	{
		for(i=0;i<data[labels[l]].length;i++)
		{
			if(data[labels[l]][i]<mm.min_y)mm.min_y=data[labels[l]][i];
			if(data[labels[l]][i]>mm.max_y)mm.max_y=data[labels[l]][i];
		}
	}
	return mm;
}

function drawStats(c,data,mm,obj,color,grid,after_number)
{
	var i;
	// first find out the scale!
	var min_y=mm.min_y
	var max_y=mm.max_y;
	if(mm==null)
	{ // this is so you can combine stats!
		min_y=1000000000;
		max_y=-1000000000;
		for(i=0;i<data[obj].length;i++)
		{
			if(data[obj][i]<min_y)min_y=data[obj][i];
			if(data[obj][i]>max_y)max_y=data[obj][i];
		}
	}
	var range=max_y-min_y;// this is too complex, min_y is always 0.. but ok...
	var max_h=c.h-40;
	var shift_y=-25;
	var shift_x=50;
	var scale_x=(c.w-100);
	var scale_y=max_h/range;
	var max_w=data[obj].length-1;
	
	if(grid)
	{
		// draw grid horizontal
		c.ctx.lineWidth=1;
		div=1;
		if(range>10)div=10;
		if(range>100)div=100;
		if(range>1000)div=1000;
		ctx.font="10px Verdana";
		var min_height_of_vertical=500;
		for(i=min_y;i<(max_y+div);i++)
		{
			if(i%div==0)
			{
				c.ctx.strokeStyle="#ddd";	
				if(Math.floor(i%(div*5))==0)  c.ctx.strokeStyle="#aaa";	
				c.ctx.beginPath();
				c.ctx.moveTo(45,shift_y+c.h-i*scale_y);	
				c.ctx.lineTo(c.w-45,shift_y+c.h-i*scale_y);
				
				if(min_height_of_vertical>shift_y+c.h-i*scale_y)
					min_height_of_vertical=shift_y+c.h-i*scale_y;
	//			console.log("label at "+i);
	//			// also show the label!
				ctx.textAlign="right"; 
				ctx.fillStyle="#ccc";
				if(Math.floor(i%(div*5))==0)
						ctx.fillStyle="#888";
				ctx.fillText(i+after_number,40,shift_y+c.h-i*scale_y+2);
				ctx.textAlign="left"; 
				ctx.fillText(i+after_number,c.w-40,shift_y+c.h-i*scale_y+2);
			}
			c.ctx.stroke();
		}	
		
		// draw grid vertical
		c.ctx.lineWidth=1;
		var number_of_labels=data[obj].length;
		var div=1;
		while(number_of_labels>10)
		{
			number_of_labels=Math.floor(data[obj].length/div);
			div++;
		}
		
		ctx.font="10px Verdana";
		for(i=0;i<data[obj].length;i++)
		{
			if(i%div==0)
			{
				c.ctx.strokeStyle="#ddd";	
				c.ctx.beginPath();
				c.ctx.moveTo(shift_x+scale_x*(i/max_w),min_height_of_vertical);	
				c.ctx.lineTo(shift_x+scale_x*(i/max_w),c.h);
				// also show the label!
				ctx.fillStyle="#888";
				ctx.fillText(data.dates[i],shift_x+scale_x*(i/max_w)+5,c.h-10);
			}
			c.ctx.stroke();
		}
	}


	// now draw graph
	c.ctx.beginPath();
	var w=c.w/data[obj].length;
	c.ctx.strokeStyle=color;
	c.ctx.lineWidth=2;
	for(i=0;i<data[obj].length;i++)
	{
		if(i==0)
			c.ctx.moveTo(shift_x+scale_x*(i/max_w),shift_y+c.h-data[obj][i]*scale_y);
		else
			c.ctx.lineTo(shift_x+scale_x*(i/max_w),shift_y+c.h-data[obj][i]*scale_y);
	}
	c.ctx.stroke();
	// put a little dot on a measure point
	for(i=0;i<data[obj].length;i++)
	{
		ctx.fillStyle="#eee";// erase the dot
		ctx.beginPath();
		ctx.arc(shift_x+scale_x*(i/max_w),shift_y+c.h-data[obj][i]*scale_y,6,0,2*Math.PI);
		ctx.fill();
		ctx.fillStyle=color;// set the dot
		ctx.beginPath();
		ctx.arc(shift_x+scale_x*(i/max_w),shift_y+c.h-data[obj][i]*scale_y,4,0,2*Math.PI);
		ctx.fill();
	}
	
}
function showUsageDetails(data)
{
	console.log("showUsageDetails");
	ctx=usage.ctx
	ctx.fillStyle="#eee";
	ctx.fillRect(0,0,usage.w,usage.h);
	var mm=getMinMax(data,["visits","unique"])
	drawStats(usage,data,mm,"unique","#ff0",true," vis");// only grid on first!
	drawStats(usage,data,mm,"visits","#f00",false," vis");
	
	// total the values
	var i;
	var visits=0,unique=0;
	var login_attempt=0,login_succes=0;
	var new_attempt=0,new_succes=0;
	for(i=0;i<data.visits.length;i++)
	{
		visits+=data.visits[i];
		unique+=data.unique[i];
		login_attempt+=data.login_attempt[i];
		login_succes+=data.login_succes[i];
		new_attempt+=data.new_attempt[i];
		new_succes+=data.new_succes[i];
	}

	
	// textual usage
	var str="";
	str+="<table>";
	str+="<tr>";
	str+="<td class='number'>"+visits+"</td>";
	str+="<td class='light'><div class='colortab' style='background: #f00;'></div>visits</td>";
	str+="<td class='number'>"+unique+"</td>";
	str+="<td class='light'><div class='colortab' style='background: #ff0;'></div>unique visitors</td>";
	str+="<td> &#8658; "+Math.floor(100*unique/visits)+"%</td>";
	str+="</tr>";
	str+="<tr>";
	str+="<td class='number'>"+new_attempt+"</td>";
	str+="<td class='light'><div class='colortab' style='background: rgba(0,0,0,0.2);'></div>attempted new users</td>";
	str+="<td class='number'>"+new_succes+"</td>";
	str+="<td class='light'><div class='colortab' style='background: rgba(0,0,0,0.2);'></div>succesfull new users</td>";
	str+="<td> &#8658; "+Math.floor(100*new_succes/new_attempt)+"%</td>";
	str+="</tr>";
	str+="<tr>";
	str+="<td class='number'>"+login_attempt+"</td>";
	str+="<td class='light'><div class='colortab' style='background: rgba(0,0,0,0.2);'></div>attempted logins</td>";
	str+="<td class='number'>"+login_succes+"</td>";
	str+="<td class='light'><div class='colortab' style='background: rgba(0,0,0,0.2);'></div>succesfull logins</td>";
	str+="<td> &#8658; "+Math.floor(100*login_succes/login_attempt)+"%</td>";
	str+="</tr>";
	str+="</table>";
	usage.stats.html(str);
}
function showQuestionsDetails(data)
{
	console.log("showQuestionsDetails");
	// now other than the other things, we'll have to re work the data a bit.
	
	// -we want to show a graph of right % per day!
	// and a second graph of hint % per day.
	
	// first the graph!
	var i,all;
	var questions={};
	questions.dates=data.dates;
	questions.r=[];
	questions.w=[];
	questions.h=[];
	for(i=0;i<data.dates.length;i++)
	{
		questions.r[i]=0;
		questions.w[i]=0;
		questions.h[i]=0;
	}
	for(i=0;i<data.dates.length;i++)
	{
		for(all in data.right)
		{
			questions.r[i]+=data.right[all][i];
		}
		for(all in data.hint)
		{
			questions.h[i]+=data.hint[all][i];
		}
		for(all in data.wrong)
		{
			questions.w[i]+=data.wrong[all][i];
		}
	}
	console.log("rt"+questions.r);// checked out!
	console.log("wt"+questions.w);
	console.log("ht"+questions.h);
	// now we calculate the percentages.
	questions.pr=[];
	questions.ph=[];
	for(i=0;i<data.dates.length;i++)
	{
		var total_questions_that_day=(questions.r[i]+questions.w[i]);
		console.log("total answers: "+total_questions_that_day);
		if(total_questions_that_day!=0)
		{
			questions.pr[i]=100*questions.r[i]/total_questions_that_day; // percentage right!
			questions.ph[i]=100*questions.h[i]/total_questions_that_day; // percentage hint!
		}else
		{
			questions.pr[i]=0;
			questions.ph[i]=0;
		}
	}
	console.log("pr"+questions.pr)
	console.log("ph"+questions.ph)
	ctx=current.ctx
	ctx.fillStyle="#eee";
	ctx.fillRect(0,0,current.w,current.h);
	var mm=getMinMax(questions,["pr","ph"])
	drawStats(current,questions,mm,"pr","#ff0",true,"%");// only grid on first!
	drawStats(current,questions,mm,"ph","#f00",false,"%");
	
	// we have a right, wrong and hint, containing every qid with a dataset.
	// -we want to show the totals of right and wrong in a percentage per question.
	// -we want to show hints per question.

	var qids={};
	for(all in data.right)
	{
		if(typeof(qids[all])==="undefined")
			qids[all]={r:0,h:0,w:0};
	}
	for(all in data.wrong)
	{
		if(typeof(qids[all])==="undefined")
			qids[all]={r:0,h:0,w:0};
	}
	for(all in data.hint)
	{
		if(typeof(qids[all])==="undefined")
			qids[all]={r:0,h:0,w:0};
	}
	// now count all!
	for(all in data.right)
	{
		for(i=0;i<data.right[all].length;i++)
			qids[all].r+=data.right[all][i];
	}
	for(all in data.wrong)
	{
		for(i=0;i<data.wrong[all].length;i++)
			qids[all].w+=data.wrong[all][i];
	}
	for(all in data.hint)
	{
		for(i=0;i<data.hint[all].length;i++)
			qids[all].h+=data.hint[all][i];
	}
	// now we have totals for each question, let's show them!
	var str="";
	str+="<table>";
	// first write a legend for the graph!
	str+="<tr>";
	str+="<td class='light'><div class='colortab' style='background: #f00;'></div> percentage used a hint of all questions answered</td>";
	str+="</tr>";
	str+="<tr>";
	str+="<td class='light'><div class='colortab' style='background: #ff0;'></div> percentage right of all questions answered</td>";
	str+="</tr>";
	str+="</table>";
	str+="<hr>";
	str+="<table>";
	str+="<thead>";
	str+="<tr>";
	str+="<th>Question Id</th>";
	str+="<th>Answers right</th>";
	str+="<th>Answers wrong</th>";
	str+="<th>Answers with hint</th>";
	str+="<th>Answers right %</th>";
	str+="<th>Answers hint %</th>";
	str+="</tr>";
	str+="</thead>";
      
	for(all in qids)
	{
		str+="<tr>";
		str+="<td class='number'><a href='../cms_questions/editQuestion.php?id="+all+"' target='_blank'>"+all+"</a></td>";
		str+="<td class='light'>"+qids[all].r+"</td>";
		str+="<td class='light'>"+qids[all].w+"</td>";
		str+="<td class='light'>"+qids[all].h+"</td>";
		var tta=qids[all].r+qids[all].w;
		if(tta==0)
		{
			str+="<td> &#8658; 0%</td>";
			str+="<td> &#8658; 0%</td>";
		}
		else
		{
			str+="<td> &#8658; "+Math.floor(100*qids[all].r/(tta))+"%</td>";
			str+="<td> &#8658; "+Math.floor(100*qids[all].h/(tta))+"%</td>";
		}
		str+="</tr>";
	}
	str+="</table>";
	current.stats.html(str);

}
function showHousesDetails(data)
{
	console.log("showHousesDetails");
	ctx=current.ctx; // clear the canvas!
	ctx.fillStyle="#eee";
	ctx.fillRect(0,0,current.w,current.h);
	var all;
	var houses=[];
	for(all in data.houses) houses.push(all);
	console.log("found houses:"+houses);
	var mm=getMinMax(data.houses,houses);
	// format  the data for drawing..
	data.houses.dates=data.dates;
	var colors=[];
	for(i=0;i<houses.length;i++) // generate colors that are different
	{
		r=(7*i*16)%256;
		g=(9*i*16)%256;
		b=(13*i*16)%256;
		colors.push("rgb("+r+","+g+","+b+")");
	}
	var str="";
	var grand_total=0;
	for(i=0;i<houses.length;i++)
	{
		for(t=0;t<data.houses[houses[i]].length;t++)
		{
			grand_total+=data.houses[houses[i]][t];
		}
	}
	str+="<table>";
	for(i=0;i<houses.length;i++)
	{
		if(i==0)
		{
			drawStats(current,data.houses,mm,houses[i],colors[i],true," buy");// only grid on first!
		}else
		{
			drawStats(current,data.houses,mm,houses[i],colors[i],false," buy");// only grid on first!
		}
		// optellen:
		var t=0;
		var totals=0;
		for(t=0;t<data.houses[houses[i]].length;t++)
		{
			totals+=data.houses[houses[i]][t];
		}
		// write some stuff per page!
		str+="<tr>";
		str+="<td class='number'>"+totals+" x gekocht</td>";
		str+="<td class='light'><div class='colortab' style='background: "+colors[i]+";'></div><img src='show_huizen_preview.php?id="+houses[i]+"' height='40px' alt='"+houses[i]+"'> id: "+houses[i]+"</td>";
		str+="<td> &#8658; "+Math.floor(100*totals/grand_total)+"% van de totale huizen gekocht in deze periode</td>";
		str+="</tr>";
	}
	str+="</table>";
	current.stats.html(str);
}
function showGamesDetails(data)
{
	console.log("showGamesDetails");
	ctx=current.ctx; // clear the canvas!
	ctx.fillStyle="#eee";
	ctx.fillRect(0,0,current.w,current.h);
	var all;
	var mm=getMinMax(data,["started","finished"]);
	// format  the data for drawing..
	drawStats(current,data,mm,"finished","#0ff",false," gms");// only grid on first!
	drawStats(current,data,mm,"started","#00f",true," gms");// only grid on first!

	var i;
	var total_finished=0;
	var total_started=0;
	var total_durations=0;
	var total_time=0;
	for(i=0;i<data.started.length;i++)
	{
		total_finished+=data.finished[i];
		total_started+=data.started[i];
		total_durations+=data.durations[i];
		total_time+=data.time[i];
	}
	// write some stuff about these stats!
	var str="";
	str+="<table>";
	str+="<tr>";
	str+="<td class='number'>"+total_started+" x </td>";
	str+="<td class='light'><div class='colortab' style='background: #00f;'></div>games started</td>";
	str+="<td></td>";
	str+="</tr>";
	str+="<tr>";
	str+="<td class='number'>"+total_finished+" x </td>";
	str+="<td class='light'><div class='colortab' style='background: #0ff;'></div>games finished</td>";
	str+="<td> &#8658; "+Math.floor(100*total_finished/total_started)+"% of total started</td>";
	str+="</tr>";
	str+="<tr>";
	str+="<td class='number'>"+(total_time/total_durations)+" s </td>";
	str+="<td class='light'>averaged game time</td>";
	str+="<td> &#8658; "+(Math.floor(total_time/(60*60)*10)/10)+" uren totaal gespeeld </td>";
	str+="</tr>";
	str+="</table>";
	current.stats.html(str);
}
function showPagesDetails(data)
{
	console.log("showPagesDetails");
	ctx=current.ctx; // clear the canvas!
	ctx.fillStyle="#eee";
	ctx.fillRect(0,0,current.w,current.h);
	var all;
	var pages=[];
	for(all in data.pages) pages.push(all);
	console.log("found pages:"+pages);
	var mm=getMinMax(data.pages,pages);
	// format  the data for drawing..
	data.pages.dates=data.dates;
	var colors=[];
	for(i=0;i<pages.length;i++) // generate colors that are different
	{
		r=(7*i*16)%256;
		g=(9*i*16)%256;
		b=(13*i*16)%256;
		colors.push("rgb("+r+","+g+","+b+")");
	}
	var str="";
	var grand_total=0;
	for(i=0;i<pages.length;i++)
	{
		for(t=0;t<data.pages[pages[i]].length;t++)
		{
			grand_total+=data.pages[pages[i]][t];
		}
	}
	str+="<table>";
	str+="<head>";
	str+="<tr>";
	str+="<th>Visits</th>";
	str+="<th>Page and color in graph</th>";
	str+="<th>Percentage of this page in total of pages</th>";
	str+="</tr>";
	str+="</head>";
	for(i=0;i<pages.length;i++)
	{
		if(i==0)
		{
			drawStats(current,data.pages,mm,pages[i],colors[i],true," pg");// only grid on first!
		}else
		{
			drawStats(current,data.pages,mm,pages[i],colors[i],false," pg");// only grid on first!
		}
		// optellen:
		var t=0;
		var totals=0;
		for(t=0;t<data.pages[pages[i]].length;t++)
		{
			totals+=data.pages[pages[i]][t];
		}
		// write some stuff per page!
		str+="<tr>";
		str+="<td class='number'>"+totals+" visits to </td>";
		str+="<td class='light'><div class='colortab' style='background: "+colors[i]+";'></div>"+pages[i]+"</td>";
		str+="<td> &#8658; "+Math.floor(100*totals/grand_total)+"%</td>";
		str+="</tr>";
	}
	str+="</table>";
	current.stats.html(str);
}
function loadUsageStats()
{
	//getJSON();
	var url = "get_stats.php";
	var data = {};
	data.start=$('#start').val();
	data.end=$('#end').val();
	data.stat="usage";
	data.ck=new Date().getTime();
	var str=url+"?";
	for(all in data) str+=all+"="+data[all]+"&";
	console.log(str);
	$.getJSON( url, data,loadStatsSucces,loadStatsFail);
}
function loadStatsSucces(data)
{
	if(parseInt(data.succes)==1)
	{
		console.log("succes loading "+data.stat);
		for(var all in data)
			console.log(all+"="+data[all]);
		switch(data.stat)
		{
			case "usage":
				showUsageDetails(data);
			break;
			case "houses":
				showHousesDetails(data);
			break;
			case "pages":
				showPagesDetails(data);
			break;
			case "questions":
				showQuestionsDetails(data);
			break;
			case "games":
				showGamesDetails(data);
			break;
			default:
				console.log("new stats loaded, no show method: "+data.stat);
		}
	}else
	{
		window.alert("error loading "+data);
		console.log("error loading "+data);
		for(var all in data)
			console.log(all+"="+data[all]);
	}
}
function loadStatsFail()
{
	window.alert("error loading couldn't reach server (or not valid json)");
	console.log("error loading couldn't reach server (or not valid json)");
}
function showStats()
{
	// fill everything
	loadUsageStats();
	
}
var current_graph;
var usage;
var current_stat;
var current_tab;
$(document).ready(function() {
	// initially set dates
	var now = new Date();
	var day = ("0" + now.getDate()).slice(-2);
	var month = ("0" + (now.getMonth() + 1)).slice(-2);
	var theday = now.getFullYear()+"-"+(month)+"-"+(day) ;
	$('#end').val(theday);
	var week_ago=new Date();
	week_ago.setDate(now.getDate() - 7);
	day = ("0" + week_ago.getDate()).slice(-2);
	month = ("0" + (week_ago.getMonth() + 1)).slice(-2);
	theday = week_ago.getFullYear()+"-"+(month)+"-"+(day) ;
	$('#start').val(theday);
	
	// create usagegraph object.
	usage={};
	var c=document.getElementById("myCanvas");
	
	usage.canvas=document.getElementById("usage_graph");
	usage.w=$("#usage").innerWidth()-50;
	usage.canvas.width=usage.w;
	usage.h=$("#usage_graph").innerHeight();
	console.log("w+h="+usage.w+"x"+usage.h);
	usage.ctx=usage.canvas.getContext("2d");
	usage.ctx.fillStyle="#eee";
	usage.ctx.fillRect(0,0,usage.w,usage.h);
	usage.stats=$("#usage_stats");
	
	current.canvas=document.getElementById("current_graph");
	current.w=$("#current").innerWidth()-50;
	current.canvas.width=usage.w;
	current.h=$("#current_graph").innerHeight();
	console.log("w+h="+current.w+"x"+current.h);
	current.ctx=current.canvas.getContext("2d");
	current.ctx.fillStyle="#eee";
	current.ctx.fillRect(0,0,current.w,current.h);
	current.stats=$("#current_stats");
	$('fieldset legend').eq(2).text("Loading");// this

	loadUsageStats();
	showTab("pages");
	// load Stats
});

		