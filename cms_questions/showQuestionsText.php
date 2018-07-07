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
$lb="";
$out_str="<table border='1'>";
$locked=false;

for($i=0;$i<$nr_of_questions;$i++)
{
	$out_str.="<tr>";
	// try and open the file and read the contents..
	$temp = explode( '.', $dir_content[$i] );
	$ext = array_pop( $temp );
	$id = implode( '.', $temp );
	$formatted_date=date ("Y-m-d H:i:s", filemtime($dir."/".$dir_content[$i]));
//	$out_str.='date:"'. $formatted_date.'",'.$lb;// also put in the timestamp author comes from the file itself!
	
	$content=file($dir."/".$dir_content[$i], FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
	for($line=0;$line<count($content);$line++)
	{
		$label=explode(":",$content[$line]);
		switch($label[0])
		{
			case "title":
				// make link to...
				$out_str.="<td>";
				$out_str.="".$label[0]."<a href='editQuestion.php?id=".substr($dir_content[$i], 0, -4)."'><br>".trim($label[1])."<br></a>";
				$out_str.="</td>";
				
			break;
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
				$val=trim($label[1]);
				$count=html_entity_decode ($val); 
				$problem="";
				if(strlen($count)>850) $problem="possibly too long! ".strlen($count)." characters, please reduce to 850.";
				if( $count!=html_entity_decode($count)) $problem="html code found!";
				if( strpos($count,'\"')!== false) $problem="\' found";
				if($problem!="")
				{
					$out_str.="<td style='background-color: yellow;'>";
					$out_str.="<b>".$label[0]."</b><br>".$val."<br><b>".$problem."</b>";
					$out_str.="</td>";
				}else
				{
					$out_str.="<td>";
					$out_str.="<b>".$label[0]."</b><br>".$val;
				}
			break;
			case "published":
			case "media":
			case "points":
			case "bricks":
			case "city":
			case "cat":
			case "author":
			case "hintcost":
				//$out_str.="<b>".$label[0]."</b><br>".trim($label[1]);
			break;

		}
	}
	$out_str.="</tr>";
}
echo($out_str);
?>
