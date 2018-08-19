<?php

// to get the list, we must travel into the dir data/images
$path_to_games="D:/xampp/htdocs/projects/HTML5/hybridGames/wwjw/data/games/"; // this is my test environment right now.
$whitelist = array(
    '127.0.0.1',
    '::1'
);

if(!in_array($_SERVER['REMOTE_ADDR'], $whitelist)){
   $path_to_games="../../game/data/games/"; // this is probably what it should be online..
}


$dir_content=array();

// get the directory and save all entries in an array!
$dir=$path_to_games;
if ($handle = opendir($dir)) {
    while (false !== ($entry = readdir($handle))) {
        if ($entry != "." && $entry != ".." ) 
		{
			array_push ($dir_content ,$entry );
        }
    }
    closedir($handle);
}
$nr_of_games=count($dir_content);
$lb="\n";
$out_str="items=[".$lb;
for($i=0;$i<$nr_of_games;$i++)
{
	// try and open the file and read the contents..
	$temp = explode( '.', $dir_content[$i] );
	$ext = array_pop( $temp );
	$id = implode( '.', $temp );
	
	if(1) // read file!
	{
		$content=file_get_contents($path_to_games.$id.".txt");
		$stuff=json_decode($content,true);
		$stuff["id"]=$id;
		$formatted_date=date ("Y-m-d H:i:s", filemtime($dir."/".$dir_content[$i]));
		if(isset($stuff["last_played"]))
			$formatted_date=date ("Y-m-d H:i:s", $stuff["last_played"]);
		$stuff["date"]=$formatted_date;
		unset($stuff["question_order"]);
		unset($stuff["hints"]);
		unset($stuff["wachtwoord"]);
		unset($stuff["gekochtehuizen"]);
		$out_str.=json_encode($stuff).','.$lb;// also put in the timestamp author comes from the file itself!
	}

}
if($nr_of_games!=0)
	$out_str = substr_replace(trim($out_str) ,"",-1); // remove last comma!

$out_str.="];".$lb;
echo($out_str);
?>
