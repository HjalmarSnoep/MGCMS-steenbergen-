/*
	init.js (inits all hybrid settings)
*/
	/*---------------------Overriding basic things like manifests etc!----------------------------------------------*/
	Hybrid.stageScale="responsive-width"; // this could also be lineair...?
	Hybrid.mustBeLandscape=true;
	Hybrid.portraitModeCatchImage; // we can put a picture here, telling the user to reorient..
	//Hybrid.width=2048; // 1024 
	Hybrid.height=1360; // 691  // aim width for interface elements, width will be set by mode responsive-width!
	// experiments with size
	// we have to put the headers on index.php, as THIS has the browsers attention.
	// for good measure we also put the headers on the game.php!
	// // <meta name="viewport" content="user-scalable=no,width=device-width"> 768x519 
	//<meta name="viewport" content="user-scalable=no,width=device-width, initial-scale=1">  1024 x 691
	// via home screen: 1024x748!

	Hybrid.aatd.push("687474703a2f2f7777772e736e6f65702e6174"); //http://www.snoep.at
	//Hybrid.debugmessage("new domain: "+Hybrid.encodeString("http://spel.kijkopsteenbergen.nl"));
	Hybrid.aatd.push("687474703a2f2f7370656c2e6b696a6b6f70737465656e62657267656e2e6e6c");//http://spel.kijkopsteenbergen.nl
	
	//Hybrid.stageColor="#ff0000"; // transparent if you don't set this.
	Hybrid.initPageFunction=initPage;
	Hybrid.loadingProgressFunction=showLoadingProgress;
	
	var colorPalet=[];
	colorPalet.loading_bar="#22aaee";

	var custom_switches=["selectable"]; 
	// these will be gotten in loadInitPage from the url, you can set the to a default, but they WILL be overridden!!

	// AUDIO MANIFEST
	
	// GRAPHICS MANIFEST
	var a;
	Hybrid.graphics_manifest['loading_anim']={src:"loading_anim.gif",w:265,h:200,preload: false}; // we don't preload the loading anim, that would be dumb!
	Hybrid.graphics_manifest['buttons']={src:"buttons.png",w:2048,h:2048,preload: true,kind:"sprite",ss:{}}; // we don't preload the loading anim, that would be dumb!
	a=[[0,0,398,72,0,0,0],[398,0,398,72,0,0,0],[0,72,287,72,0,0,0],[287,72,287,72,0,0,0],[574,72,236,72,0,0,0],[0,144,236,72,0,0,0],[236,144,236,72,0,0,0],[472,144,236,72,0,0,0],[0,216,645,182,0,0,0],[0,398,645,182,0,0,0],[0,580,855,182,0,0,0],[0,762,855,182,0,0,0],[0,944,435,182,0,0,0],[435,944,435,182,0,0,0],[870,944,146,145,0,0,0],[0,1126,146,145,0,0,0],[146,1126,515,182,0,0,0],[0,1308,515,182,0,0,0],[515,1308,435,182,0,0,0],[0,1490,435,182,0,0,0],[435,1490,435,182,0,0,0],[0,1672,435,182,0,0,0],[435,1672,103,95,0,0,0],[538,1672,103,95,0,0,0],[641,1672,8,25,0,0,0]];
		Hybrid.graphics_manifest['buttons'].ss['city']=[a[0],a[1]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['high']=[a[2],a[3]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['stop']=[a[4],a[5]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['contact']=[a[6],a[7]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['new_game']=[a[8],a[9]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['continue_game']=[a[10],a[11]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['back']=[a[12],a[13]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['hint']=[a[14],a[15]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['answer']=[a[16],a[17]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['continue']=[a[18],a[19]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['play']=[a[20],a[21]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['dropdown']=[a[22],a[23]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['dropdown_back']=[a[24]];// reg x and y =0 for buttons!

	
	// TEXT/Language MANIFEST
	//Hybrid.disablePageScrolling(); // as a default, we want this to act as a webapp on iPad and other tablets!
	
	/*-------------------------------------------------------------------------------------
	// Show loading page here.
	----------------------------------------------------------------------------------------*/	
	var loading_bar;
	function showLoadingProgress(perc,first_time)
	{
		Hybrid.debugmessage("loading progress is being called.!");
		if(first_time)
		{
			// build up the loading graphics
			Hybrid.erasePage();
			var bg=Hybrid.createLayer();
			
			// set Content
			var loading_anim=Hybrid.createBox(bg,Hybrid.width/2-265/2,Hybrid.height/2-200/2,265,200);
			Hybrid.setBoxImage(loading_anim, "loading_anim"); // index, you get it from the graphics manifest!
			Hybrid.createTextBox(bg,0,Hybrid.height/2-30,Hybrid.width,75,'Luckiest Guy',colorPalet.loading_bar,"center",50,"Laden..");
			var loading_back=Hybrid.createBox(bg,Hybrid.width/2-200,Hybrid.height-100,400,25);
			Hybrid.debugmessage("loading_back: "+loading_back);
			Hybrid.setBoxColor(loading_back,"#ffffff");
			Hybrid.createTextBox(bg,0,Hybrid.height-130,Hybrid.width,75,'Luckiest Guy',"#999999","center",20,"<a href='"+Hybrid.helplink+"'>(Meld een probleem)</a>");
			loading_bar=Hybrid.createBox(loading_back,1,1,10,10); // initial size doesn't matter
			Hybrid.setBoxColor(loading_bar,colorPalet.loading_bar);
		}
		// always:	
		Hybrid.sizeBox(loading_bar,perc*(400-2),23);
	}

	/*-------------------------------------------------------------------------------------
	// Splash Functions
	----------------------------------------------------------------------------------------*/	
	function initPage(str)
	{
		Hybrid.debugmessage("all is loaded, initPage function called."+Hybrid.width+"x"+Hybrid.height);
		// we could check if we are in landscape mode really easy:
		if(Hybrid.width>Hybrid.height)
		{
			// work out where to go!
			// we have ONLY one place to go right now.. Multipage editing might be a bit much right now.!
			var goto_what="quiz";
/*			if(Hybrid.getCookie("lastpage")!=null)
			{
				goto_what=Hybrid.getCookie("lastpage");
				
				user.last_visit=new Date().getTime()-parseInt(Hybrid.getCookie("lastvisittime"));
				Hybrid.setCookie("lastvisittime",new Date().getTime());
				Hybrid.debugmessage("last visit was: "+user.last_visit+" ago");
				if(user.last_visit>(30*60*1000)) // 30 minutes then you have to start again.
				{
					goto_what="start";
					Hybrid.debugmessage("last visit was: "+user.last_visit+" ago, so we override the start page.");
				}
			}*/
			// and go there
			switch(goto_what)
			{
				case "quiz":
					quiz.init();
				break;
//				case "contact":
//					contact.init();
//				break;
				default:
					start.init();
			}

			
		}
		else
		{
			Hybrid.debugmessage("apparently w x h="+Hybrid.width+","+Hybrid.height+" you need to rotate your device");
			ori_mm.init();
		}
	}
	

	
