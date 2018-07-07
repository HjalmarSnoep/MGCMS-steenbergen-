	//quiz----------------------------------
	var quiz={};
	quiz.init=initquiz;
	quiz.framecounter=0;
	quiz.bar_height=80;
	quiz.selected_answer=-1;// right now nothing is selected
	quiz.button_height=194;
	
	// these should be loaded, I think.. Or pushed as extrenal javascript??
	
	// question can have:
	// question title
	// question body
	// question media
	// answer body
	// answer right body
	// answer wrong body
	// hint body
	// hint title
	// user used hint
	// user answer time!
	
	quiz.questions=[{qt:"Twee zeemeerminnen",qb:"Dit is de vraag",ab:["a1","a2","a3","a4"],qm:"img:test.jpg",ar: 0, us:false, ht:"hint title",hb:"hint body",uh:false, uat:0}, 
	{qt:"Twee zeemeerminnen",qb:"Dit is de vraag",ab:["a1","a2","a3","a4"],qm:"img:test.jpg",ar: 0, us:false, ht:"hint title",hb:"hint body",uh:false, uat:0}, 
	{qt:"Twee zeemeerminnen",qb:"Dit is de vraag",ab:["a1","a2","a3","a4"],qm:"img:test.jpg",ar: 0, us:false, ht:"hint title",hb:"hint body",uh:false, uat:0}, 
	{qt:"Twee zeemeerminnen",qb:"Dit is de vraag",ab:["a1","a2","a3","a4"],qm:"img:test.jpg",ar: 0, us:false, ht:"hint title",hb:"hint body",uh:false, uat:0}];
	quiz.current_question=0;
	quiz.state="just_started";
	
	function initquiz()
	{
		Hybrid.debugmessage("START Quiz called!");
		Hybrid.setCookie("lastpage","quiz");

		Hybrid.resizeFunction=handleResizeQuiz;
		handleResizeQuiz(); // this builds the page 
		
	}
	

	
	function handleResizeQuiz()
	{
		Hybrid.debugmessage("page Quiz build up:"+Hybrid.width+"x"+Hybrid.height);
		Hybrid.erasePage();
		layout={}; // erase any old layout!
		layout.back=Hybrid.createLayer();
		Hybrid.setBoxColor(layout.back,palet.pale_green); // this should be set to cover all, but that's for later!
		
		var w,h,x,y,f,tx,ty,string;
		w=Hybrid.width;
		h=quiz.bar_height;
		x=0;
		y=0;
		layout.bar=Hybrid.createBox(layout.back,x,y,w,h);
		Hybrid.setBoxColor(layout.bar,palet.pale_blue); // this should be set to cover all, but that's for later!

		// create the extra (standard) buttons and controls
		Hybrid.createTextButton(layout.bar,100,0,200,h,"Opslaan","button_save",handleButtonsQuiz,40); // we need a huge font size because of the Hybrid size.
		Hybrid.createTextButton(layout.bar,300,0,200,h,"Annuleren","button_cancel",handleButtonsQuiz,40); // we need a huge font size because of the Hybrid size.
		Hybrid.createTextButton(layout.bar,500,0,200,h,"Hint","button_hint",handleButtonsQuiz,40); // we need a huge font size because of the Hybrid size.
		Hybrid.createTextButton(layout.bar,700,0,400,h,"Antwoord Goed","button_right",handleButtonsQuiz,40); // we need a huge font size because of the Hybrid size.
		Hybrid.createTextButton(layout.bar,1100,0,400,h,"Antwoord Fout","button_wrong",handleButtonsQuiz,40); // we need a huge font size because of the Hybrid size.
		
		Hybrid.createTextButton(layout.back,1100,0,400,h,"Antwoord Fout","button_wrong",handleButtonsQuiz,40); // we need a huge font size because of the Hybrid size.
		
	
		// it's imperative that layout stays the same, so apart from the bar, we need to set a box in the middle of exactly 2048..
		// UNLESS it's smaller, than we need to scale it down... but smaller than 4x3?? I think not.
		
		w=2048;
		h=1361;
		x=(Hybrid.width-2048)/2;
		y=0;
		layout.quiz=Hybrid.createBox(layout.back,x,y,w,h);

		// set the snap to aim for!
		//Hybrid.setBoxColor(layout.quiz,"rgba(255,255,255,0.1)"); // this should be set to cover all, but that's for later!
		//Hybrid.setBoxImage(layout.quiz,"snap"); // this should be set to cover all, but that's for later!


		// stuff in the bar
//		layout.user_name=Hybrid.createTextBox(layout.quiz,60,20,450,100,fonts.head,"#fff","left",fontsz.head,"Erik-Jan Pullens");
//		layout.vraag_nr=Hybrid.createTextBox(layout.quiz,440,25,350,100,fonts.body,"#fff","right",fontsz.menu,"Vraag 12/30");
//		layout.score_label=Hybrid.createTextBox(layout.quiz,1340,25,600,100,fonts.body,"#fff","right",fontsz.menu,"Score <em>1200</em> punten / <em>600</em> stenen");

/*		// Question Progress
		w=412;
		h=30;
		x=(2048-w)/2;
		y=(quiz.bar_height-h)/2+5;
		layout.progress_total=Hybrid.createBox(layout.quiz,x,y,w,h);
		Hybrid.setBoxColor(layout.progress_total,"#fff"); 
		layout.progress=Hybrid.createBox(layout.quiz,x,y,w*(12/30),h);
		Hybrid.setBoxColor(layout.progress,palet.pale_yellow); */

		
		// Question Title
		w=854;
		h=86;
		x=104;
		y=264;
		string="Twee meerminnen";
		layout.title=Hybrid.createTextBox(layout.quiz,x,y,w,h,fonts.head,palet.head,"left",fontsz.head,string);
		Hybrid.setTextEditable(layout.title,true); 
		// TIP: make sure it's big enough, to handle <br> efficiently.
		
		// Question Body
		w=854;
		h=174;
		x=104;
		y=310;
		string="Naast het gemeentewapen van Steenbergen staan twee meerminnen. Deze herinneren aan een Middeleeuwse legende (een soort sprookje). Volgens die legende:";
		layout.question_body=Hybrid.createTextBox(layout.quiz,x,y,w,h,fonts.body,palet.body,"left",fontsz.body,string);
		// if this is the editor, make it selectable!
		Hybrid.setTextEditable(layout.question_body,true);
		
		// create media box
		w=854;
		h=557;
		x=104;
		y=488;
		layout.media=Hybrid.createBox(layout.quiz,x,y,w,h);
		Hybrid.setBoxColor(layout.media,"#fff"); 
		Hybrid.makeButton(layout.media,"add_media",handleButtonsQuiz);
		
		// create answers buttons!
		var i,letter=["A","B","C","D"];
		var answers=["Beschermden de meerminnen Steenbergen tegen vijanden.","Brachten de meerminnen vis naar Steenbergen.","Legden de meerminnen half Steenbergen in de as.","Redden de meerminnen een Steenbergse visser van de verdrinkingsdood"]
		
		for(i=0;i<4;i++)
		{
			w=900;
			h=quiz.button_height;
			x=1046;
			y=315+(quiz.button_height-16)*i; // 172 is inner, so  thickness =8
			// create the outer box (rounded)
			layout["a"+i]=Hybrid.createBox(layout.quiz,x,y,w,h);
			//Hybrid.setBoxColor(layout["a"+i],"#fff"); 
			
			// because the sprite way is not very handy in this case!!!
			// THIS IS THE WAY TO DO IT WITH A CANVAS!
			layout["a"+i+"_canvas"]=Hybrid.createCanvas(layout["a"+i],0,0,w,h);
			layout["a"+i+"_canvas"].over=false; // this is false.
			
			// now create the texts
			layout["a"+i+"_letter"]=Hybrid.createTextBox(layout["a"+i],-5,60,150,150,fonts.head,palet.head,"center",60,letter[i]);
			string="";
			layout["a"+i+"_text"]=Hybrid.createTextBox(layout["a"+i],128,10,720,h-30,fonts.body,palet.body,"left",fontsz.body,answers[i]);
			//var th=Hybrid.getTextboxHeight(layout["a"+i+"_text"]);
			//Hybrid.debugmessage(h +" answer "+(i+1)+" height");
			//Hybrid.moveBox(layout["a"+i+"_text"],124,90-th/2);
			Hybrid.setTextEditable(layout["a"+i+"_text"],true);  // ,checkLayout optional blur function!
			
			// set a button box over this all.
//			layout["a"+i+"hit"]=Hybrid.createBox(layout["a"+i],0,0,w,h);
			//Hybrid.makeButton(layout["a"+i+"hit"],"answer|"+i,handleButtonsQuiz,handleOverButtonsQuiz);
			
		}
		quizHelperDrawAnswerCanvasses();
		
				/*
		// create button answer
		w=Hybrid.graphics_manifest['buttons'].ss['answer'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['answer'][0][3];
		x=2048-60-755;
		y=Hybrid.height-h-60;
		Hybrid.createSpriteButton(layout.quiz,x,y,w,h,'buttons',"answer","button_answer",handleButtonsQuiz);
	
		// create button hint
		w=Hybrid.graphics_manifest['buttons'].ss['hint'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['hint'][0][3];
		x=2048-60-192;
		y=Hybrid.height-h-80;
		Hybrid.createSpriteButton(layout.quiz,x,y,w,h,'buttons',"hint","button_hint",handleButtonsQuiz);
		
		// overlay snap!

		{
			w=2048;
			h=1361;
			x=(Hybrid.width-2048)/2;
			y=0;
			layout.snap=Hybrid.createBox(layout.back,x,y,w,h);
	//		Hybrid.setBoxColor(layout.quiz,"rgba(255,255,255,0.1)"); // this should be set to cover all, but that's for later!
			Hybrid.setBoxImage(layout.snap,"snap"); // this should be set to cover all, but that's for later!
			Hybrid.setBoxAlpha(layout.snap,0.5); // this should be set to cover all, but that's for later!
		*/
	
	}
	
	//Hybrid._userKeyHandler(ev.keyCode,down);
	//function quiz_EditListener(keyCode,down_up)
	function checkLayout()
	{
		Hybrid.debugmessage("checkLayout");
//		Hybrid.debugmessage("quiz_EditListener: "+keyCode+","+down_up);

		/*if(keyCode==13 && down_up==true)
		{
			Hybrid.debugmessage("Check edits.. and relayout for convenience.");
			
			var i;
			for(i=0;i<4;i++)
			{
				// now create the texts
				var th=Hybrid.getTextboxHeight(layout["a"+i+"_text"]);
				Hybrid.debugmessage(h +" answer "+(i+1)+" height");
				Hybrid.moveBox(layout["a"+i+"_text"],124,90-th/2);
				// we should stop and restart editing!
				//Hybrid.setTextEditable(layout["a"+i+"_text"],false);
				//Hybrid.setTextEditable(layout["a"+i+"_text"],true);
			}
		}*/
	}	
	function quizHelperDrawAnswerCanvasses()
	{
		var i;
		for(i=0;i<4;i++)
		{
			w=900;
			h=quiz.button_height;
			var rounding=8;
			var ctx=layout["a"+i+"_canvas"].context;
			var grd=ctx.createLinearGradient(0,0,0,h);
			if(i==quiz.selected_answer)
			{
				//rounding=20;
				Hybrid.setTextBoxColor(layout["a"+i+"_text"],"#fff");
				Hybrid.setTextBoxColor(layout["a"+i+"_letter"],"#9cd2f7");
				grd.addColorStop(0,"#255192");
				grd.addColorStop(1,"#3a75bc");
			}else
			{
				//rounding=8;
				Hybrid.setTextBoxColor(layout["a"+i+"_text"],palet.body);
				Hybrid.setTextBoxColor(layout["a"+i+"_letter"],palet.head);
				if(layout["a"+i+"_canvas"].over===false)
				{
					grd.addColorStop(0,"#9cd2f7");
					grd.addColorStop(1,"#88bfe8");
				}else
				{
					grd.addColorStop(0,"#6cbcff");
					grd.addColorStop(1,"#5aaaf2");
				}
			}
			ctx.fillStyle=grd;
			ctx.strokeStyle="#FFF";
			ctx.lineWidth=rounding;
			ctx.beginPath();
			Hybrid.drawRoundedRect(ctx,4,4,w-8,h-8,rounding);
			ctx.fill();
			ctx.stroke();
		}
	}
	
	function handleOverButtonsQuiz(label,overout)
	{
		Hybrid.debugmessage("handleButtonsQuiz: "+label+","+overout);
		if(label.indexOf("answer|")!=-1)
		{
			var nr=parseInt(label.substr(7,15));
			Hybrid.debugmessage("button nummer: "+nr);
			if(overout=="out")
			{
				// restore
				layout["a"+nr+"_canvas"].over=false;
			}else
			{
				// show over!
				layout["a"+nr+"_canvas"].over=true;
			}
			quizHelperDrawAnswerCanvasses();
		}
		
		
	}
	function handleButtonsQuiz(label)
	{
		//window.alert("We zijn bezig met de ontwikkeling van dit educatieve spel.");
		if(label.indexOf("answer|")!=-1)
		{
			var nr=parseInt(label.substr(7,15));
			quiz.selected_answer=nr;
			quizHelperDrawAnswerCanvasses();
			
		}
		switch(label)
		{
			case "button_answer":
				//start.init();
				// show popup
				// layer zwart 60%
				// grijs #dddddd
				// succes!
			break;				
			case "button_stop":
				start.init();
			break;				
			default:
				Hybrid.debugmessage("handleButtonsQuiz: "+label);
		}
	}
	

