<?php

// we need to get and strip the id.
// if id="" we generate an empty file!

$id="";
if(isset($_GET["id"])) $id=preg_replace("/[^a-zA-Z0-9]/", "", $_GET["id"]); // clean id in ONLY alphanumeric
//echo("id=".$id);

$current_user="nobody";
if(isset($_SERVER['PHP_AUTH_USER'])) $current_user=$_SERVER['PHP_AUTH_USER'];

$path_to_data="../data";

$new_lock=false;
$filename=$path_to_data."/questions/".$id.".txt";
if(!file_exists($filename))$id=""; // not an existing file, then output blank!.
else
{
	// it's an existing file, what we do is:
	// add a lock to it, with a time and othername.
	$lock_name=$path_to_data."/locks/".$id.".txt";
	if(!file_exists($lock_name))
	{
		// create a lock NOW
		$new_lock=true;
	}else
	{
		// open the lock file and look at the date and author.
		// look at the date of the lock!
		$dt=time()-filemtime($lock_name);
		if($dt>5*60)
		{
			// longer than five minutes...
			$new_lock=true;
		}
		// else, look at the lock itself, it only contains a string with the owner!
		$owner=file_get_contents($lock_name);
		if(strpos($owner, $current_user) !== FALSE)
		{
			// it's the same owner.
			$new_lock=true;
		}
	}
}

if($new_lock==true)
{
	// create a new lock file containing this owner!
	// or just touch the lock..
	$lock_name=$path_to_data."/locks/".$id.".txt";
	file_put_contents ($lock_name,$current_user); 
}

if($id=="")
{
	$new_lock=true;
	// ALWAYS GIVE A NEW LOCK TO A NEW PAGE< DUH
	// but it would have been nonsene to create one for blank!
}
$fields=array("id","date","published","title","body","points","bricks","hintcost","cat","city","media","hint","right","wrong","author","answer","A","B","C","D"); // [] only php 5.4!


if($id=="")
{
	// output an empty file!
	$out_str="";
	$out_str.='question_details = {';
	foreach($fields as $f)
	{
		$out_str.=$f.': "",';
	}
	if($new_lock==false)
		$out_str.='locked: true,';
	$out_str = substr_replace($out_str ,"",-1); // remove last comma!
	$out_str.="};";
	echo($out_str);
}else
{
	/*// output!
				question_detals = {
					id: "id - kopie",
					date: "2014-26-June 15:16:17",
					title: "Twee zeemeerminnen",
					body: "Twee zeemeerminnen tekst",
					A: "Een antwoord, gewoon, zoals iedereen dat kan geven.",
					B: "Een antwoord, gewoon, zoals iedereen dat kan B.",
					C: "Een antwoord, gewoon, zoals iedereen dat kan C.",
					D: "Een antwoord, gewoon, zoals iedereen dat kan D."
					hint: "Een antwoord, gewoon, zoals iedereen dat kan A.",
					right: "Een antwoord, gewoon, zoals iedereen dat kan B.",
					cat: "Een antwoord, gewoon, zoals iedereen dat kan C.",
					author: "admin.",
					wrong: "Een antwoord, gewoon, zoals iedereen dat kan D.",
					answer: "D",
					media: "",
				};
	*/
	$lb="\n";

	$out_str="question_details={".$lb;
	// try and open the file and read the contents..
	$out_str.='id:"'.$id.'",'.$lb;// also put in the timestamp!
	$formatted_date=date ("Y-m-d H:i:s", filemtime($filename));
	$out_str.='date:"'. $formatted_date.'",'.$lb;// also put in the timestamp author comes from the file itself!
	
	$content=file($filename, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
	for($line=0;$line<count($content);$line++)
	{
		$label=explode(":",$content[$line],2);
		// if valid label!
		if(in_array($label[0],$fields))
		{
			$text=trim($label[1]);
			
			$text = str_replace(
					 array("\xe2\x80\x98", "\xe2\x80\x99", "\xe2\x80\x9c", "\xe2\x80\x9d", "\xe2\x80\x93", "\xe2\x80\x94", "\xe2\x80\xa6"),
					 array("'", "'", '"', '"', '-', '--', '...'),
					 $text);
					// Next, replace their Windows-1252 equivalents.
					 $text = str_replace(
					 array(chr(145), chr(146), chr(147), chr(148), chr(150), chr(151), chr(133)),
					 array("'", "'", '"', '"', '-', '--', '...'),
					 $text);
			$text=str_replace("\"", "'", $text); // because we serve it as JSON, a double quotes could cause a lot of havok!
			$text=str_replace("\\", "", $text); // because we serve it as JSON, a backslash could cause a lot of havok!

		
			$out_str.=$label[0].":\"".$text."\",".$lb; // here we hard convert double quotes to single quotes!
		}
	}
	$out_str = substr_replace($out_str ,"",-1); // remove last comma!
	$out_str.="};".$lb;
	echo($out_str);
}
?>
