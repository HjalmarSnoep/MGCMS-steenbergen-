<?php

// we get the information from the file
// if there is no file, we give the standard stuff back..
// we give back a json!

$id="";
if(isset($_GET["id"])) $id=preg_replace("/[^a-zA-Z0-9?@À-ÿ\- _]/","",strip_tags($_GET["id"]));	// can contain accents, spaces and - but nothing else, so St.John doesn't work 


// to get the list, we must travel into the dir data/images
$path_to_games="D:/xampp/htdocs/projects/HTML5/hybridGames/wwjw/data/games/"; // this is my test environment right now.
$whitelist = array(
    '127.0.0.1',
    '::1'
);

if(!in_array($_SERVER['REMOTE_ADDR'], $whitelist)){
   $path_to_games="../../game/data/games"; // this is probably what it should be online..
}


$new_lock=false;
$filename=$path_to_games."/".$id.".txt";
$lb="\n";
$player=[];
$player['naam']="file bestaat niet";
$player['school']="666";
$player['plaats']="7";
$player['groep']="0";
$player['progress']="0";
$player['question_order']=[];
$player['bought_per_city']=[];
$player['hints']=[];
$player['punten']="0";
$player['stenen']="0";
$player['created']=time();
$player['last_played']=time();
if(file_exists($filename))
{
	$temp=json_decode(file_get_contents($filename),true);
	if(json_last_error()===JSON_ERROR_NONE)
	{
		foreach($temp as $key=>$value)$player[$key]=$temp[$key]; // don't overwrite not set stuff.
	}
	$player['id']=basename($filename,".txt");

}
// output standard file:
$out_str="item_details=";
$out_str.=json_encode($player);
$out_str.=";".$lb;
echo($out_str);
?>
