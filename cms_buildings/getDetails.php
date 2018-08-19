<?php

// we get the information from the file
// if there is no file, we give the standard stuff back..
// we give back a json!

$id="";
if(isset($_GET["id"])) $id=preg_replace("/[^a-zA-Z0-9]/", "", $_GET["id"]); // clean id in ONLY alphanumeric
//echo("id=".$id);

$path_to_data="../data";

$new_lock=false;
$filename=$path_to_data."/huizen/".$id.".txt";
$lb="\n";
if(!file_exists($filename))
{
	// output standard file:
	$out_str="item_details={".$lb;
	$out_str.='id:"'.$id.'",'.$lb;// also put in the timestamp!
	$out_str.='city:"7",'.$lb;// also put in the timestamp!
	$out_str.='published:"1",'.$lb;// also put in the timestamp!
	$out_str.='prijs:"50",'.$lb;// also put in the timestamp!
	$out_str.='unlock:"50",'.$lb; // also put unlock as a standard of 50..?
	$out_str.='naam:"50",'.$lb;// also put in the timestamp!
	$out_str.='lx:"50",'.$lb;// location-x
	$out_str.='ly:"50",'.$lb;// location-y
	$out_str.='rx:"50",'.$lb;// refx
	$out_str.='ry:"50",'.$lb;// refy
	$out_str.='w:"100",'.$lb;// width
	$out_str.='h:"100",'.$lb;// height
	$out_str = substr_replace(trim($out_str) ,"",-1); // remove last comma!
	$out_str.="};".$lb;
}
else
{
	$fields=array("published","city","ly","naam","prijs","unlock","lx","rx","ry","w","h"); // [] only php 5.4!
	$out_str="item_details={".$lb;
	// try and open the file and read the contents..
	$out_str.='id:"'.$id.'",'.$lb;// also put in the timestamp!
	$content=file($filename, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
	for($line=0;$line<count($content);$line++)
	{
		$label=explode(":",$content[$line],2);
		// if valid label!
		if(in_array($label[0],$fields))
		{
			$out_str.=$label[0].":\"".str_replace('"',"'",trim($label[1]))."\",".$lb;
		}
	}
	$out_str = substr_replace(trim($out_str) ,"",-1); // remove last comma!
	$out_str.="};".$lb;

}
echo($out_str);
?>
