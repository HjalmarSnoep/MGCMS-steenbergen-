<!doctype html>
<html>
<head>
<style>
	.blokje{
		display: inline-block;
		border: 1px solid #fff;
		width: 150px;
		height: 50px;
		margin: 5px;
	}
</style>
</head>
<body>
<h1>Resetting Vrijspelen</h1>
Factor:
<?php
$factor=25;
if(isset($_GET["factor"])) $factor=intval($_GET["factor"]);
echo $factor;
?>
<br>Increment: 
<?php
$step=25;
if(isset($_GET["unlock_increment"])) $step=intval($_GET["unlock_increment"]);
echo $step;
?>
<br>
<a href="index.php">Terug naar index</a>
<hr>
<?php
// this updates all highscores lists, from all games.. So nothing get's lost..


// first get a list of ALL huizen.
$path_to_huizen="../data/huizen";



$dir_content=array();
$huizen=[];

if (!is_dir($path_to_huizen)) 
{
	echo("Sorry, cannot reach the huizen table. Please contact developer.");
}
// get the directory and save all entries in an array!
$dir=$path_to_huizen;
if ($handle = opendir($dir)) {
    while (false !== ($entry = readdir($handle))) {
        if ($entry != "." && $entry != ".." && strpos($entry,".txt")!=false) 
		{
			array_push ($dir_content ,$dir."/".$entry );
			//echo($dir."/".$entry."<br>");
        }
    }
    closedir($handle);
}
$lb="<br>";
foreach ($dir_content as $key => $value)
{
	$huis=['filename'=>$value];
//	echo "<hr>";
//	echo $value."<br>";
	$fields=array("id","published","city","ly","naam","prijs","unlock","lx","rx","ry","w","h"); // [] only php 5.4!
	$out_str="item_details={".$lb;
	// try and open the file and read the contents..
	$content=file($value, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
	for($line=0;$line<count($content);$line++)
	{
		$label=explode(":",$content[$line],2);
		// if valid label!
		if(in_array($label[0],$fields))
		{
			$huis[$label[0]]=trim($label[1]);
			$out_str.=$label[0].":\"".str_replace('"',"'",trim($label[1]))."\",".$lb;
		}
	}
	// te koop?
	//if($huis["city"]==7)
		array_push($huizen,$huis);
	$out_str = substr_replace(trim($out_str) ,"",-1); // remove last comma!
	$out_str.="};".$lb;
}
// all read in..
// sort per prijs!
usort($huizen,"perprijs");
function perprijs($a,$b)
{
	return $a["prijs"]-$b["prijs"];
}
$unlock=0;
for($i=0;$i<count($huizen);$i++)
{
	$huis=$huizen[$i];
	$unlock+=$huis["prijs"]*$factor+10;
	$huis["unlock"]=$unlock;
	$huizen[$i]=$huis;
	if($huis['city']!="7")
	{
		echo "overriding, not for sale..!";
		$huis["unlock"]=-1; // maakt niet uit.
		$huizen[$i]=$huis;
	}
}
echo "<hr>";
for($i=0;$i<count($huizen);$i++)
{
	$huis=$huizen[$i];
	echo "<div class='blokje'>";
//	echo "FILE: ".$huis['filename'].$lb;
	$str="";
	$fields=array("id","published","city","ly","naam","prijs","unlock","lx","rx","ry","w","h"); // [] only php 5.4!
	for($line=0;$line<count($fields);$line++)
	{
		if(isset($huis[$fields[$line]]))
		{
			if( $fields[$line]=="naam" ||  $fields[$line]=="unlock")
				if( $huis["unlock"]!=-1)
				{
					echo $huis[$fields[$line]].$lb;
				}
			$str.=$fields[$line].": ".$huis[$fields[$line]]."\n";
		}
	}
	echo "</div>";
	file_put_contents($huis['filename'],$str);
	
}

echo("<hr>done succesfully.");

?>
<script>
// clean up output, no empty blokjes.
var blokjes=document.getElementsByClassName("blokje");
for(var i=0;i<blokjes.length;i++)
{
	if(blokjes[i].innerHTML=="") blokjes[i].style.display="none";
}
</script>
</body>
</html>
