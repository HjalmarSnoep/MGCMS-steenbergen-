	// all pages in objects , this way we avoid getting duplicates, also we can easily remember states.
	
	//SPLASH-----------------------------------
	var layout={};
	var itf={}; // interface!!
	itf.url="../cms_disclaimer/index.php";
	itf.selected_tool="disclaimer"; // unless you have a cookie to prove other wise!
	// check if there is a cookie:
	if(typeof(Storage)!=="undefined")
	{
		// Code for localStorage/sessionStorage.
		// Store
		val=localStorage.getItem("cms_disclaimer");
		if(val=="agree")
		{
			var agree_time=parseInt(localStorage.getItem("cms_disclaimer_date"));
			var dt=new Date().getTime()-agree_time;
			var day=1000*60*60*24;
			if(dt<31*day)
			{
				itf.url="../cms_questions/index.php";
				itf.selected_tool="vragen"; // unless you have a cookie to prove other wise!
			}else
			{
				//window.alert("It's been more than a month since you agreed with the disclaimer");
			}
		}
	}	
	
	function initApp()
	{
		Hybrid.debugmessage("init InTerFace (initApp) called!");
		Hybrid.makePageSelectable(); // SELECTABLE else textboxes WON't work properly, don't know why!
		// get info to create all split panes..
		Hybrid.resizeFunction=resizePage;
		Hybrid.debugmessage("resizeFunction set TO: "+Hybrid.resizeFunction);
		// call the initialisations, order counts for something here
		//initFrame(); // creates the default first frame
		//initEdit(); // copies this first frame to the work-buffer
		getLayout(); // this builds the page AND redraws the stage with the initial puppet!
		createPage(); // create all elements for the first time..
		// we are going to be resizing stuff after this!
	}
	function getLayout()
	{
		layout.scrollwidth=Hybrid.getScrollbarWidth(); // get's the scrollbar width by experimenting!
		Hybrid.debugmessage("Layout processing..");
		layout.top_bar={};
		layout.top_bar.x=0;
		layout.top_bar.y=0;
		layout.top_bar.w=Hybrid.width;
		layout.top_bar.h=32;
		// the look of the timeline..
		layout.previewframesize=80;
		layout.previewframemargin=2;
	
		layout.toolbox=['vragen','media','kaart','huizen','extra1','extra2','statistieken','bugs','disclaimer'];
		layout.tools={};
		layout.tools.x=0;
		layout.tools.y=layout.top_bar.h;
		layout.tools.w=200;
		layout.tools.h=Hybrid.height-layout.tools.y;

		layout.stage={};
		layout.stage.x=layout.tools.w;
		layout.stage.y=layout.top_bar.h;
		layout.stage.w=Hybrid.width-(layout.tools.w);
		layout.stage.h=Hybrid.height-(layout.top_bar.h);		
		layout.stage.mx=layout.stage.w/2; // mid x is where we start drawing on the canvas!!
		layout.stage.my=layout.stage.h/2;// mid y is where we start drawing on the canvas!!
	
	}
	function resizePage()
	{
		Hybrid.debugmessage("resizePage called...");
		getLayout();

		// now resize necessary panes, leave the rest alone!
		Hybrid.sizeBox(itf.back, Hybrid.width,Hybrid.height);
		Hybrid.sizeBox(itf.bar, layout.top_bar.w,layout.top_bar.h);
		Hybrid.sizeBox(itf.tools, layout.tools.w,layout.tools.h);
		Hybrid.sizeBox(itf.tools.behind, 20,layout.tools.h);
		Hybrid.moveBox(layout.welcome,Hybrid.width-170,10);
		Hybrid.moveBox(layout.welcome_user,Hybrid.width-100,10);
		Hybrid.sizeBox(itf.stagebox, layout.stage.w,layout.stage.h);
		Hybrid.sizeBox(itf.webview, layout.stage.w,layout.stage.h);
	}
	function createPage()
	{
		getLayout();
		Hybrid.debugmessage("createPage!");
		Hybrid.erasePage();
		
		// now create and set the panes.
		itf.back=Hybrid.createLayer();
		
		itf.bar=Hybrid.createBox(itf.back,layout.top_bar.x,layout.top_bar.y,layout.top_bar.w,layout.top_bar.h);
		Hybrid.setBoxColor(itf.bar,"#da832e");

		itf.tools=Hybrid.createBox(itf.back,layout.tools.x,layout.tools.y,layout.tools.w,layout.tools.h);
		Hybrid.setBoxColor(itf.tools,"#cbcbcb");

		itf.tools.behind=Hybrid.createBox(itf.tools,0,0,20,layout.tools.h);
		Hybrid.setBoxColor(itf.tools.behind,"#d7d7d7"); 
		// create all tool buttons!
		var i,h=8;
		itf.tools.buttons=[];
		for(i=0;i<layout.toolbox.length;i++)
		{
			if(layout.toolbox[i]=='-')
			{
				// skip a bit!
				h+=8;
			}else
			{
				//Hybrid.debugmessage("create button: "+layout.toolbox[i]);
				itf.tools.buttons[i]=Hybrid.createSpriteButton(itf.tools,0,h,layout.tools.w,32,'tools',layout.toolbox[i],"tool|"+layout.toolbox[i],handleButtons);
				h+=32;
			}
		}
		itf.stagebox=Hybrid.createBox(itf.back,layout.stage.x,layout.stage.y,layout.stage.w,layout.stage.h);
		Hybrid.setBoxColor(itf.stagebox,"#e6e6e6");
		
		// create an transparent iframe.
		// create the webview only one time!
		itf.webview=Hybrid.createWebview(itf.stagebox,0,0,layout.stage.w,layout.stage.h,itf.url); // inital url can be empty
	
		// now set the default texts and some of the innards:
		itf.title=Hybrid.createTextBox(itf.bar,15,5,315,itf.bar.h-5,"sans-serif","#e9b582","left",20,"Making Games - CMS");
		Hybrid.createTextBox(itf.bar,230,10,600,itf.bar.h-5,"sans-serif","#e9b582","left",15,"- editie Steenbergen v1.0 - © copyright Hjalmar Snoep (www.snoep.at) ");
		layout.welcome=Hybrid.createTextBox(itf.bar,Hybrid.width-170,10,100,itf.bar.h-5,"sans-serif","#e9b582","left",15,"Welcome ");
		layout.welcome_user=Hybrid.createTextBox(itf.bar,Hybrid.width-100,10,100,itf.bar.h-5,"sans-serif","#fff","left",15,remote_user);
	}
	
	function handleButtons(label)
	{
	//	Hybrid.debugmessage("shortcut hint: "+label);
		if(label.indexOf("tool|")!=-1)
		{
//			Hybrid.debugmessage("you hit tool!: "+label);
			itf.selected_tool=label.substr(5,200);
			// find the tool, use the extra menu state on the sprite_button!
			var tool_nr,i;
			for(i=0;i<layout.toolbox.length;i++)
			{
				if(layout.toolbox[i]==itf.selected_tool)
				{
					//for(var all in itf.tools.buttons[i])
					//	Hybrid.debugmessage("all: "+all+"="+itf.tools.buttons[i][all]);
					Hybrid.spriteButtonSelected(itf.tools.buttons[i],true);
				}else
				{
					if(layout.toolbox[i]!="-")
					{
						Hybrid.spriteButtonSelected(itf.tools.buttons[i],false);
					}
				}
			}
			switch(itf.selected_tool)
			{
				case "vragen":
					Hybrid.debugmessage("we are going to do move..");
					Hybrid.setWebviewURL(itf.webview,"../cms_questions/index.php");
					Hybrid.styleWebview(itf.webview, {transparant:false} );
				break;
				case "media":
					Hybrid.setWebviewURL(itf.webview,"../cms_media/index.php");
					Hybrid.styleWebview(itf.webview, {transparant:false} );
				break;
				case "kaart":
					Hybrid.setWebviewURL(itf.webview,"../cms_map/index.php");
					Hybrid.styleWebview(itf.webview, {transparant:false} );
				break;
				case "huizen":
					Hybrid.setWebviewURL(itf.webview,"../cms_buildings/index.php");
					Hybrid.styleWebview(itf.webview, {transparant:false} );
				break;
				case "extra1": // games
					Hybrid.setWebviewURL(itf.webview,"../cms_games/index.php");
					Hybrid.styleWebview(itf.webview, {transparant:false} );
				break;
				case "extra2": // tags
					Hybrid.setWebviewURL(itf.webview,"../cms_tags/index.php");
					Hybrid.styleWebview(itf.webview, {transparant:false} );
				break;
				case "statistieken":
					Hybrid.setWebviewURL(itf.webview,"../cms_stats/index.php");
					Hybrid.styleWebview(itf.webview, {transparant:false} );
				break;
				case "bugs":
				// set top to mg!
					//http://www.makinggames.org/nl/support/index.php?game_id=mgcms
					Hybrid.setWebviewURL(itf.webview,"../cms_bugs/index.php");
					Hybrid.styleWebview(itf.webview, {transparant:false} );
				break;
				case "disclaimer":
					Hybrid.setWebviewURL(itf.webview,"../cms_disclaimer/index.php");
					Hybrid.styleWebview(itf.webview, {transparant:false} );
				break;
				default:
					Hybrid.debugmessage("select unknown tool: "+itf.selected_tool);
			}
			return;
		}
	}
	
	
	
	

