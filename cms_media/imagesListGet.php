<?php

// to get the list, we must travel into the dir data/images
$path_to_uploads="../cms_images";
$dir_content=array();

// get the directory and save all entries in an array!
$dir=$path_to_uploads;
if(file_exists($dir))
{
	if ($handle = opendir($dir)) {
		while (false !== ($entry = readdir($handle))) {
			if ($entry != "." && $entry != "..") 
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
		$out_str = substr_replace($out_str ,"",-1); // remove last comma!
		$out_str.="},".$lb;
	}
	$out_str = substr_replace($out_str ,"",-1); // remove last comma!
	$out_str.="];".$lb;
	echo($out_str);
}else
{
	// output an empty list
	$lb="\n";
	$out_str="images=[];".$lb;
	echo($out_str);
}
?>