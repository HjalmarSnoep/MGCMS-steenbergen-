	//HELPER FUNCTIONS AND GLOBALS----------------------------------
	var layout={}; // will be set by each page.
	var palet={};
	palet.dark_blue="#01286f";
	palet.pale_blue="#5594bf";
	palet.pale_green="#c9e5b6";
	palet.body="#2f2f2f";
	palet.head=palet.dark_blue
	palet.pale_yellow="#ffec96";
	palet.back_green="#98c475";
	
	var fonts={body:"Tahoma, Verdana, Segoe, sans-serif", head: "Luckiest Guy"};
	var fontsz={};
	fontsz.head=42;
	fontsz.menu=30;
	fontsz.body=26.5;
	function helpers_createStartSchermBack()
	{
		// must be the first function you call.
		// positions the background, work OVER it on a new layer.
		// now create and set the layer
		layout.back=Hybrid.createLayer();
		var w,h,x,y,f;
		f=2048/w;
		w=2048*f;
		h=1536*f;
		x=0;
		y=h-Hybrid.width;
		layout.back_image=Hybrid.createBox(layout.back,x,y,w,h);
		Hybrid.setBoxColor(layout.back,"#98c475"); // this should be set to cover all, but that's for later!
		
		Hybrid.setBoxImage(layout.back_image,"start_background"); // this should be set to cover all, but that's for later!
	}

	
