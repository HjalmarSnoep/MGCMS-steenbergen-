<?php
// this sets a stat to a incredible list of human readable stats!
$path_to_root=$_SERVER['DOCUMENT_ROOT'];
$path_to_stats=$path_to_root."/mgcms/data/stats/";

$response=array();
$response['succes']=1;


$clean=array();
foreach ($_GET as $key => $value) 
{
	$key=preg_replace('/\s+/', '', $key); // only alphanumeric
	$value=preg_replace('/\s+/', '', strip_tags($value)); // only alphanumeric and NO additional HTML!
	$clean[$key]=strip_tags($value);
	$response[$key]=$clean[$key];
}
//$current_date =  DateTime::createFromFormat('Y-m-d', $clean['start']);
$current_date =  new DateTime($clean['start']);
// not present in 5.2!

$end_date =  new DateTime($clean['end']);
//$nr_of_days= date_diff($current_date, $end_date)->format('%d');
$nr_of_days = ceil(abs(strtotime(date_format($end_date, 'Y-m-d'))-strtotime(date_format($current_date, 'Y-m-d'))) / 86400);
$d=0;
$count=0;

// init
$response['dates']=array();
switch($clean['stat'])
{
	case "usage":
		$response['visits']=array();
		$response['unique']=array();
		$response['new_attempt']=array();
		$response['new_succes']=array();
		$response['login_attempt']=array();
		$response['login_succes']=array();
	break;
	case "games":
		$response['started']=array();
		$response['finished']=array();
		$response['time']=array();
		$response['durations']=array();
		$users=array(); // used to keep track of the starts and finishes
	break;	
	case "pages":
		$response['pages']=array();
	break;	
	case "games":
		$response['pages']=array();
	break;		
	case "questions":
		$response['right']=array();
		$response['wrong']=array();
		$response['hint']=array();
	break;	
	case "houses":
		$response['houses']=array();
	break;	
}

// days loop!
for($d=0;$d<=$nr_of_days;$d++)
{
	switch($clean['stat'])
	{
		case "games":
			// count different pages mentioned in the stats!
			$filename=$path_to_stats.$current_date->format('Y_m_d')."_game.txt";;
			if(file_exists($filename))
			{
				$lines = file($filename, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
				// first we create any pages we may find that don't exist yet
				$started=0;
				$finished=0;
				$durations=0;
				$time=0;
				foreach($lines as $line)
				{
					if (strpos($line,'event=started') !== false) 
					{
						$started++;
						
						$start=strpos($line,'user=');
						$user=substr ($line,$start);
						$user=explode("|" ,$user); // limit is 1, so first one only!
						$user=$user[0];
						$user=substr ($user,5);
						$ts=explode("|" ,$line);
						$ts=intval($ts[0]); // can't do that directly in old PHP!
						$users[$user]=$ts;
					}
					if (strpos($line,'event=finished') !== false) 
					{
						$finished++;
						$start=strpos($line,'user=');
						$user=substr ($line,$start);
						$user=explode("|" ,$user); // limit is 1, so first one only!
						$user=$user[0]; // limit is 1, so first one only!
						$user=substr ($user,5);
						$ts=explode("|" ,$line);
						$ts=intval($ts[0]);
						if(isset($users[$user]))
						{
							$time=$time+$ts-$users[$user];
							// holadiee we have a measurement!
							$durations++;
						}
						
					}
				}
				array_push($response['time'],$time); 
				array_push($response['durations'],$durations); 
				array_push($response['started'],$started); 
				array_push($response['finished'],$finished); 
			}else
			{
				array_push($response['time'],0); 
				array_push($response['durations'],0); 
				array_push($response['started'],0); 
				array_push($response['finished'],0); 
			}
		break;	
		case "houses":
			// count different pages mentioned in the stats!
			$filename=$path_to_stats.$current_date->format('Y_m_d')."_house.txt";;
			if(file_exists($filename))
			{
				$lines = file($filename, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
				// first we create any pages we may find that don't exist yet
				foreach($lines as $line)
				{
					$start=strpos($line,'id=');
					$house=substr ($line,$start);
					$house=explode("|" ,$house); // limit is 1, so first one only!
					$house=$house[0]; // limit is 1, so first one only!
					$house=substr ($house,3);
					if(!isset($response['houses'][$house]))
					{
						$response['houses'][$house]=array();
						// fill it with zero's!
						for($t=0;$t<=$nr_of_days;$t++) $response['houses'][$house][$t]=0;
					}
				}
				// then we count any houses we may find in the warm knowledge that the array exists..
				foreach($lines as $line)
				{
					$start=strpos($line,'id=');
					$house=substr ($line,$start);
					$house=explode("|" ,$house); // limit is 1, so first one only!
					$house=$house[0];
					$house=substr ($house,3);
					// now check it against all houses!
					$response['houses'][$house][$d]++;
				}
			}
		break;
		case "questions":
			// count different question_ids mentioned in the stats in different files!
			$filename=$path_to_stats.$current_date->format('Y_m_d')."_right.txt";;
			if(file_exists($filename))
			{
				$lines = file($filename, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
				// first we create any questions we may find that don't exist yet
				foreach($lines as $line)
				{
					$start=strpos($line,'qid=');
					$qid=substr ($line,$start);
					$qid=explode("|" ,$qid); // limit is 1, so first one only!
					$qid=$qid[0];
					$qid=substr ($qid,4);
					if(!isset($response['right'][$qid]))
					{
						$response['right'][$qid]=array();
						// fill it with zero's!
						for($t=0;$t<=$nr_of_days;$t++) $response['right'][$qid][$t]=0;
					}
				}
				// then we count any questions we may find in the warm knowledge that the array exists..
				foreach($lines as $line)
				{
					$start=strpos($line,'qid=');
					$qid=substr ($line,$start);
					$qid=explode("|" ,$qid); // limit is 1, so first one only!
					$qid=substr ($qid[0],4);
					// now check it against all qid!
					$response['right'][$qid][$d]++;
				}
			}
			// count different question_ids mentioned in the stats in different files!
			$filename=$path_to_stats.$current_date->format('Y_m_d')."_wrong.txt";;
			if(file_exists($filename))
			{
				$lines = file($filename, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
				// first we create any questions we may find that don't exist yet
				foreach($lines as $line)
				{
					$start=strpos($line,'qid=');
					$qid=substr ($line,$start);
					$qid=explode("|" ,$qid); // limit is 1, so first one only!
					$qid=substr ($qid[0],4);
					if(!isset($response['wrong'][$qid]))
					{
						$response['wrong'][$qid]=array();
						// fill it with zero's!
						for($t=0;$t<=$nr_of_days;$t++) $response['wrong'][$qid][$t]=0;
					}
				}
				// then we count any questions we may find in the warm knowledge that the array exists..
				foreach($lines as $line)
				{
					$start=strpos($line,'qid=');
					$qid=substr ($line,$start);
					$qid=explode("|" ,$qid); // limit is 1, so first one only!
					$qid=substr ($qid[0],4);
					// now check it against all qid!
					$response['wrong'][$qid][$d]++;
				}
			}	
			// count different question_ids mentioned in the stats in different files!
			$filename=$path_to_stats.$current_date->format('Y_m_d')."_hint.txt";;
			if(file_exists($filename))
			{
				$lines = file($filename, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
				// first we create any questions we may find that don't exist yet
				foreach($lines as $line)
				{
					$start=strpos($line,'qid=');
					$qid=substr ($line,$start);
					$qid=explode("|" ,$qid); // limit is 1, so first one only!
					$qid=substr ($qid[0],4);
					if(!isset($response['hint'][$qid]))
					{
						$response['hint'][$qid]=array();
						// fill it with zero's!
						for($t=0;$t<=$nr_of_days;$t++) $response['hint'][$qid][$t]=0;
					}
				}
				// then we count any questions we may find in the warm knowledge that the array exists..
				foreach($lines as $line)
				{
					$start=strpos($line,'qid=');
					$qid=substr ($line,$start);
					$qid=explode("|" ,$qid); // limit is 1, so first one only!
					$qid=substr ($qid[0],4);
					// now check it against all qid!
					$response['hint'][$qid][$d]++;
				}
			}				
		break;
		case "pages":
			// count different pages mentioned in the stats!
			$filename=$path_to_stats.$current_date->format('Y_m_d')."_page.txt";;
			if(file_exists($filename))
			{
				$lines = file($filename, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
				// first we create any pages we may find that don't exist yet
				foreach($lines as $line)
				{
					$start=strpos($line,'page=');
					$page=substr ($line,$start);
					$page=explode("|" ,$page); // limit is 1, so first one only!
					$page=substr ($page[0],5);
					if(!isset($response['pages'][$page]))
					{
						$response['pages'][$page]=array();
						// fill it with zero's!
						for($t=0;$t<=$nr_of_days;$t++) $response['pages'][$page][$t]=0;
					}
				}
				// then we count any pages we may find in the warm knowledge that the array exists..
				foreach($lines as $line)
				{
					$start=strpos($line,'page=');
					$page=substr ($line,$start);
					$page=explode("|" ,$page); // limit is 1, so first one only!
					$page=substr ($page[0],5);
					// now check it against all pages!
					$response['pages'][$page][$d]++;
				}
			}
		break;
		case "usage":
			// count visits
			$filename=$path_to_stats.$current_date->format('Y_m_d')."_visitors.txt";;
			if(file_exists($filename))
			{
				$lines = file($filename, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
				$special=0;
				foreach($lines as $line)
				{
					if (strpos($line,'unique=1') !== false) 
					{
						$special++;
					}
				}
				array_push($response['visits'],count($lines)); // give total number of lines per day!
				array_push($response['unique'],$special); // give number of visits unique and non unique per day
			}else
			{
				array_push($response['visits'],0); // file doesn't exist so nothing there
				array_push($response['unique'],0); // file doesn't exist so nothing there
			}	
			// count new_succes
			$filename=$path_to_stats.$current_date->format('Y_m_d')."_new_game.txt";;
			if(file_exists($filename))
			{
				$lines = file($filename, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
				$special=0;
				foreach($lines as $line)
				{
					if (strpos($line,'succes=1') !== false) 
					{
						$special++;
					}
				}
				array_push($response['new_attempt'],count($lines)); // give total number of lines per day!
				array_push($response['new_succes'],$special); // give total number of lines per day!
			}else
			{
				array_push($response['new_attempt'],0); // file doesn't exist so nothing there
				array_push($response['new_succes'],0); // file doesn't exist so nothing there
			}	
			// count returning users
			$filename=$path_to_stats.$current_date->format('Y_m_d')."_login.txt";;
			if(file_exists($filename))
			{
				$lines = file($filename, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
				$special=0;
				foreach($lines as $line)
				{
					if (strpos($line,'succes=1') !== false) 
					{
						$special++;
					}
				}
				array_push($response['login_attempt'],count($lines)); // give total number of lines per day!
				array_push($response['login_succes'],$special); // give total number of lines per day!
			}else
			{
				array_push($response['login_attempt'],0); // file doesn't exist so nothing there
				array_push($response['login_succes'],0); // file doesn't exist so nothing there
			}			
		break;
	}
	array_push($response['dates'],$current_date->format('m-d'));
	$current_date->modify('+1 day');
}
echo(json_encode($response));
?>
