<?php

// to get the list, we must travel into the dir data/images
$path_to_uploads="../data/huizen";
$dir_content=array();

// get the directory and save all entries in an array!
$dir=$path_to_uploads;
if ($handle = opendir($dir)) {
    while (false !== ($entry = readdir($handle))) {
        if ($entry != "." && $entry != ".." && pathinfo($entry, PATHINFO_EXTENSION)!="txt") 
		{
			array_push ($dir_content ,$entry );
        }
    }
    closedir($handle);
}
$nr_of_images=count($dir_content);
$lb="\n";
$out_str="images=[".$lb;
for($i=0;$i<$nr_of_images;$i++)
{
	// try and open the file and read the contents..
	$temp = explode( '.', $dir_content[$i] );
	$ext = array_pop( $temp );
	$id = implode( '.', $temp );
	$out_str.='{id:"'.$id.'",'.$lb;// also put in the timestamp!
	$formatted_date=date ("Y-m-d H:i:s", filemtime($dir."/".$dir_content[$i]));
	$out_str.='date:"'. $formatted_date.'",'.$lb;// also put in the timestamp author comes from the file itself!

	
	if(1) // read file!
	{
		$content=file("../data/huizen/".$id.".txt", FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
		for($line=0;$line<count($content);$line++)
		{
			$label=explode(":",$content[$line]);
			switch($label[0])
			{
				case "city":
					$out_str.=$label[0].":\"".str_replace('"',"'",trim($label[1]))."\",".$lb;
				break;
			}
		}
	}

	$out_str = substr_replace(trim($out_str) ,"",-1); // remove last comma!
	$out_str.="},".$lb;
}
if($nr_of_images!=0)
	$out_str = substr_replace(trim($out_str) ,"",-1); // remove last comma!

$out_str.="];".$lb;
echo($out_str);
?>
