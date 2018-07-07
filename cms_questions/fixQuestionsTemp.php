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
$nr_of_questions=count($dir_content);
$lb="\n";
$locked=false;


for($i=0;$i<$nr_of_questions;$i++)
{
	// try and open the file and read the contents..
	$temp = explode( '.', $dir_content[$i] );
	$ext = array_pop( $temp );
	$id = implode( '.', $temp );
	$formatted_date=date ("Y-m-d H:i:s", filemtime($dir."/".$dir_content[$i]));
	$new_file="";
	
	$content=file($dir."/".$dir_content[$i], FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
	for($line=0;$line<count($content);$line++)
	{
		$label=explode(":",$content[$line]);
		switch($label[0])
		{
			case "title":
			case "body":
			case "hint":
			case "right":
			case "wrong": 
			case "answer": 
			case "A":
			case "B":
			case "C":
			case "D":
			case "body":
				$val=str_replace("\'","'",trim($label[1])); 
				//$val=mb_convert_encoding($val,'ISO-8859-15','utf-8'); // if you do this, you double encode, because SO does htmlentities!
				//$val=htmlspecialchars($val, ENT_QUOTES);
				$val = htmlentities ($val, ENT_QUOTES); // will leave single quotes alone!
				$new_file.=$label[0].": ".$val;
			break;
			case "published":
			case "media":
			case "points":
			case "bricks":
			case "city":
			case "cat":
			case "author":
			case "hintcost":
				$new_file.=$label[0].": ".trim($label[1]); // don't interfere AT All!!
			break;

		}
		$new_file.=$lb;
	}
	// after this all we save the file again!
	file_put_contents($dir."/".$dir_content[$i],$new_file);
}
echo($new_file);
?>
