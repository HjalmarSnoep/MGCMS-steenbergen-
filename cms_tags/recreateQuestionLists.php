<!doctype html>
<html>
<body>
<h1>Reordering questionlists..</h1>
<?php

$tags_file="../data/tags/tags.json";
$content=file_get_contents($tags_file);
$tags=json_decode($content,true);

// create a question_list for each of the tags!
$question_lists=[];
for($i=0;$i<count($tags);$i++)
{
	$question_lists[$tags[$i]['id']]=[];
}
	$question_lists["-1"]=[]; // this will contain a copy of ALL questions, so we can keep using the SAME system for all this in new_game.php

// read questions

$path_to_data="../data";
$dir_content=array();

$current_user="nobody";
if(isset($_SERVER['PHP_AUTH_USER'])) $current_user=$_SERVER['PHP_AUTH_USER'];

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
$out_str="questions=[".$lb;

// read all questions
$questions=[];
for($i=0;$i<$nr_of_questions;$i++)
{
	// try and open the file and read the contents..
	$temp = explode( '.', $dir_content[$i] );
	$ext = array_pop( $temp );
	$id = implode( '.', $temp );
	$questions[$i]=["id"=>$id,"published"=> "0","cat"=>"-1"]; // start out without published, unless overwritten!
	
	$content=file($dir."/".$dir_content[$i], FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
	
//	echo "<hr>reading question ".$i;
	for($line=0;$line<count($content);$line++)
	{
		//echo($content[$line] ."<br>");
		$label=explode(":",$content[$line]);
		switch($label[0])
		{
			case "published":
			case "cat":
			case "id":
//				echo "reading field ".$label[0]." = ".trim($label[1]);
				$questions[$i][$label[0]]=str_replace('"',"'",trim($label[1]));
			break;
		}
	}
}
//var_dump($questions);
// go through ALL questions and check for catetgory tags.
for($t=0;$t<count($tags);$t++)
{
	$tag=$tags[$t];
	for($i=0;$i<$nr_of_questions;$i++)
	{
		$q=$questions[$i];
		if($q["published"]=="1")
		{
			// check against tag and drop in the right lists.
			if(strpos($q["cat"],$tag['id'])!==false)
			{
				array_push($question_lists[$tag['id']],$i); // push the question_id in! // I know, should be ID, but the whole thing works like this!
			}
		}
	}
}
for($t=0;$t<count($tags);$t++)
{
	$tag=$tags[$t];
	echo "<hr>tag:".$tag["label"]."(".$tag["id"].")";
	echo "<br>aantal vragen: ".count($question_lists[$tag["id"]]);
	$tags[$t]["questions"]=count($question_lists[$tag["id"]]);
	$question_file="../data/tags/questions_".$tag["id"].".json";
	$json= json_encode($question_lists[$tag["id"]]) ;
	file_put_contents($question_file,$json);
//	var_dump($question_lists[$tag["id"]]);
}
echo "<hr>putting results in ".$tags_file;
echo "<br>".json_encode($tags);
file_put_contents ($tags_file,json_encode($tags)); // trying to write to ../data/data_strs is failing because of rights.

// save all lists!
// give feedback.
echo "<hr><br>done";

// also put these in tags.json!

?>
<script>
setTimeout(goBack,350);
function goBack()
{
	location.href="index.php";
}
</script>
</body>
</html>
