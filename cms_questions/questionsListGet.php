<?php

// to get the list, we must travel into the dir data/questions
$path_to_data="../data";
$dir_content=array();

// get the directory and save all entries in an array!
$dir=$path_to_data.'/questions';
if ($handle = opendir($dir)) {
    while (false !== ($entry = readdir($handle))) {
        if ($entry != "." && $entry != "..") 
		{
			array_push ($dir_content ,$entry );
        }
    }
    closedir($handle);
}
//echo("found ".count($dir_content));


// format the out str!
//$out_str.='{date: "2014-12-03 14:05",id:"vraag01",title:"Vraag1",body:"Dit is vraag 1",cat: "cat1",answers:[{id:"a",body:"antwoord1"},{id:"b",body:"antwoord1"},{id:"c",body:"antwoord1"},{id:"d",body:"antwoord1"}],right_answer:"a"},';
// before posting we will strip all styles from the edited text!
// JAVASCRIPT 
// var wrapper = document.createElement('div');
// wrapper.innerHTML= '<div>Standaard pakt de hybrid alle divs als </div><div>position absolute, </div><div>t<span style="font-size: 16px;">hat needs to change!</span></div>';
// walk_the_DOM(wrapper, function(el) {
    // if(el.removeAttribute) {
        //el.removeAttribute('id');
        //el.removeAttribute('style');
        //el.removeAttribute('class');
    // }
// });
// result = wrapper.innerHTML;
// NOW you can easily exchange ALL " " and '' for: &quote;

/*
questions = [{
            id: "id - kopie",
            {
                date: "2014-26-June 15:16:17",
                title: "[div]Twee zeemeerminnen[[div]",
                A: "Een antwoord, gewoon, zoals iedereen dat kan A.",
                B: "Een antwoord, gewoon, zoals iedereen dat kan B.",
                C: "Een antwoord, gewoon, zoals iedereen dat kan C.",
                D: "Een antwoord, gewoon, zoals iedereen dat kan D."
            },
            {
                id: "id",
                {
                    date: "2014-26-June 15:39:31",
                    title: "<div>Twee zeemeerminnen</div>",
                    A: "Een antwoord, gewoon, zoals iedereen dat kan A.",
                    B: "Een antwoord, gewoon, zoals iedereen dat kan B.",
                    C: "Een antwoord, gewoon, zoals iedereen dat kan C.",
                    D: "Een antwoord, gewoon, zoals iedereen dat kan D."
                },
            }];
*/
$nr_of_questions=count($dir_content);
$lb="\n";
$out_str="questions=[".$lb;
$locked=false;

for($i=0;$i<$nr_of_questions;$i++)
{
	// try and open the lock file
	$lock_name=$path_to_data."/locks/".$dir_content[$i];
//	echo();
	if(file_exists($lock_name))
	{
		$dt=time()-filemtime($lock_name);
		//echo($dt."<".(5*60));
		if($dt<5*60)
		{
			// if I'm not the owner..
			$owner=file_get_contents($lock_name);
			if(strpos($owner, $_SERVER['PHP_AUTH_USER']) !== FALSE)
			{
				// it's the same owner.
				//$locked=true;
			}else
			{
				$locked=true;
			}
			
		}
	}

	// try and open the file and read the contents..
	$temp = explode( '.', $dir_content[$i] );
	$ext = array_pop( $temp );
	$id = implode( '.', $temp );
	$out_str.='{id:"'.$id.'",'.$lb;// also put in the timestamp!
	$formatted_date=date ("Y-m-d H:i:s", filemtime($dir."/".$dir_content[$i]));
	$out_str.='date:"'. $formatted_date.'",'.$lb;// also put in the timestamp author comes from the file itself!
	
	$content=file($dir."/".$dir_content[$i], FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
	for($line=0;$line<count($content);$line++)
	{
//		echo($content[$line] ."<br>");
		$label=explode(":",$content[$line]);
//		echo($content[$line] ."<br>");
		switch($label[0])
		{
			case "title":
//			case "hint":
//			case "right":
//			case "wrong": // this is NOT important for the preview
			case "media":
			case "author":
			case "published":
			case "city":
			case "cat":
			case "A":
			case "B":
			case "C":
			case "D":
				$out_str.=$label[0].":\"".str_replace('"',"'",trim($label[1]))."\",".$lb;
			break;
			case "body":
				// we only want an excerpt
				$excerpt=strip_tags(trim($label[1])); // if you don't do this, it might actually break your code, if you end in the middle of a <
				
				$excerpt = str_replace(
					 array("\xe2\x80\x98", "\xe2\x80\x99", "\xe2\x80\x9c", "\xe2\x80\x9d", "\xe2\x80\x93", "\xe2\x80\x94", "\xe2\x80\xa6"),
					 array("'", "'", '"', '"', '-', '--', '...'),
					 $excerpt);
					// Next, replace their Windows-1252 equivalents.
					 $excerpt = str_replace(
					 array(chr(145), chr(146), chr(147), chr(148), chr(150), chr(151), chr(133)),
					 array("'", "'", '"', '"', '-', '--', '...'),
					 $excerpt);
				$excerpt=str_replace("\"", "'", $excerpt); // because we serve it as JSON, a backslash could cause a lot of havok!
				$excerpt=str_replace("\\", "", $excerpt); // because we serve it as JSON, a backslash could cause a lot of havok!
				$excerpt=substr($excerpt, 0, 50); // max 50 characters!
				
				if(!ctype_alnum (substr($excerpt,49,1))) 
				{
					//strip ALL non alpha numerical stuff from the end of the string as it might interfere with javascript!
					// this is an exception when you type SINGLE_QUOTE or DOUBLE_QUOTE as a safety precaution it gets to be BACKSLASH/SINGLE QUOTE or BACKSLASH DOUBLE QUOTE
					$excerpt=substr($excerpt, 0, 48);
				}
				
				
				$out_str.=$label[0].":\"".$excerpt."\",".$lb;
			break;
		}
	}
	$out_str = substr_replace($out_str ,"",-1); // remove last comma!
	if($locked==true)
	{
		// show it locked!
		$out_str .= 'locked:"'.$owner.'"';
	}else
	{
		$out_str .= 'locked:""';
	}
	
	$out_str.="},".$lb;
}
$out_str = substr_replace($out_str ,"",-1); // remove last comma!

$out_str.="];".$lb;
echo($out_str);
?>
