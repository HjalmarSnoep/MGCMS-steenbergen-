<?php

// to get the list, we must travel into the dir data/images
$path_to_uploads="";
$dir_content=array();

$out_str="images=[";
$lb="\n";
// check the slots.txt and return them as images!
$content=file("slots.txt", FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
for($line=0;$line<count($content);$line++)
{
	$content[$line]= preg_replace("/[^a-zA-Z0-9]+/", "", $content[$line]); //clean alphanumeric
	$out_str.='{id:"'.$content[$line].'",'.$lb;// also put in the timestamp!
	if(file_exists($path_to_uploads.$content[$line].".jpg"))
	{
		$formatted_date=date ("Y-m-d H:i:s", @filemtime($path_to_uploads.$content[$line].".jpg"));
		$out_str.='date:"'. $formatted_date.'",'.$lb;// also put in the timestamp author comes from the file itself!
		$out_str = substr_replace($out_str ,"",-1); // remove last comma!
		$out_str.="},".$lb;
	}else
	{
		$out_str.='date:"---"},'.$lb;// no filetime if no file...
	}
}
$out_str=trim($out_str); // there is an extra space, don't know who puts it there and just can't be bothere
$out_str = substr_replace($out_str ,"",-1); // remove last comma! 
$out_str.="];".$lb;
echo($out_str);
?>
