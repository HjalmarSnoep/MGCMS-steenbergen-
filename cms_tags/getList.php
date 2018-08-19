<?php
$file="../data/tags/tags.json";
$content=file_get_contents($file);
$dir_content=json_decode($content,true);

$nr_of_games=count($dir_content);
$lb="\n";
$out_str="items=".$lb;
$out_str.=json_encode($dir_content);// also put in the timestamp author comes from the file itself!
$out_str.=";".$lb;
echo($out_str);
?>
