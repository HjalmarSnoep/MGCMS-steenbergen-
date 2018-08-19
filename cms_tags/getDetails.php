<?php


$id="";
if(isset($_GET["id"])) $id=preg_replace("/[^a-zA-Z0-9?@À-ÿ\- _]/","",strip_tags($_GET["id"]));	// can contain accents, spaces and - but nothing else, so St.John doesn't work 
//echo("id=".$id);

$file="../data/tags/tags.json";
$content=file_get_contents($file);
$tags=json_decode($content,true);

//echo json_encode($tags);
//echo "<br>";
//echo "<br>";
// standard value
$tag=[];
$tag["id"]="";
$tag["label"]="";
for($i=0;$i<count($tags);$i++)
{
	if($tags[$i]['id']==$id)
	{
		$tag=$tags[$i];
	}
}
//echo json_encode($tag);
//echo "<br><br>";

$lb="\n";
$out_str="item_details=".$lb;
$out_str.=json_encode($tag);// also put in the timestamp author comes from the file itself!
$out_str.=";".$lb;


echo($out_str);
?>
