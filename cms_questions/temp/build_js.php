<?php
// this script takes all js libraries and bundles them, then minifies them into ascript to present to a client!
// use a .htaccess to rewrite a specific js_file ( defined here as $lib!) to this script..
// this script will create a build_.... version of this script that you can rename.
// it will then automatically update the script is you change/touch any of the files named here!
// don't publish this script, it's not leech protected

$lib="menu.js";
$build = array
(
	array (
        'js' => '../static/lib/jquery-1.11.1.min.js',
        'desc' => array
				  (
					'jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license',
				  ),
    ),
	

	// hybrid stuff!
	array (
        'js' => '../static/lib/snoep_hybrid_v1_2_0/hybrid_init.js',
        'desc' => array
				  (
					'SnoepHybrid:HTML5 GAME and WebApp LIB',
					'V1.2.0',
					'Copyright (c)  2014 Hjalmar Snoep, http://www.snoepgames.nl.',
					'All rights reserved.',
				  ),
    ),
	array (
        'js' => '../static/lib/snoep_hybrid_v1_2_0/hybrid_debug.js',    // setsup debugmessage AND Chrome minified debugging!
         'desc' => array(),
    ),
	array (
        'js' => '../static/lib/snoep_hybrid_v1_2_0/hybrid_audio.js',	// sets up audio capabilities
         'desc' => array(),
    ),
	array (
        'js' => '../static/lib/snoep_hybrid_v1_2_0/hybrid_input.js',    // sets up touch, multitouch etc..
         'desc' => array(),
    ),
	array (
        'js' => '../static/lib/snoep_hybrid_v1_2_0/hybrid_canvas.js',    // all canvas functions including isCanvasSupported, blocksprites, particles etc.
         'desc' => array(),
    ),
	array (
        'js' => '../static/lib/snoep_hybrid_v1_2_0/hybrid_context_menu.js',    // will show a context menu with options.
         'desc' => array(),
    ),
	array (
        'js' => '../static/lib/snoep_hybrid_v1_2_0/hybrid_math.js',    // all kinds of helping math stuffs!
         'desc' => array(),
    ),
	array (
        'js' => '../static/lib/snoep_hybrid_v1_2_0/hybrid_layout.js',    // pagescaling, stage, toPx, that stuff. 
         'desc' => array(),
    ),
	array (
        'js' => '../static/lib/snoep_hybrid_v1_2_0/hybrid_leech_protect.js',    // pagescaling, stage, toPx, that stuff. 
         'desc' => array(),
    ),
	array (
        'js' => '../static/lib/snoep_hybrid_v1_2_0/hybrid_loading.js',    // pagescaling, stage, toPx, that stuff. 
         'desc' => array(),
    ),
	array (
        'js' => '../static/lib/snoep_hybrid_v1_2_0/hybrid_box.js',    // pagescaling, stage, toPx, that stuff. 
         'desc' => array(),
    ),
	array (
        'js' => '../static/lib/snoep_hybrid_v1_2_0/hybrid_textbox.js',    // pagescaling, stage, toPx, that stuff. 
         'desc' => array(),
    ),
	array (
        'js' => '../static/lib/snoep_hybrid_v1_2_0/hybrid_webview.js',    // pagescaling, stage, toPx, that stuff. 
         'desc' => array(),
    ),
	
	
	// add build scripts for game here!
	
	array (
       'js' => 'menu_init.js',
        'desc' => array(),
    ),
	array (
       'js' => 'menu_itf.js',
        'desc' => array(),
    ),
	
);

// hide descriptive and long strings...
$obscure=array(
	'EncodeString' => '_Es',
	'DecodeString' => '_Ds',
	'encodeString' => '_es',
	'decodeString' => '_ds',
	'html_string' => '_hts',
	'FocusManager' => '_fm',
	'NativeLanguage' => '_nl',
	'debugmessage' => '_dbm',
	'switches' => '_sw',
	'internalDebugWindow' => '_idw',
	'loadingProgressFunction' => '_lpf',
	'initPageFunction' => '_ipf',
	'img_src_path' => '_isp',
	'graphics_manifest' => '_gm',
	'audio_manifest' => '_am',
	'hybrid_debug_message_string' => '_hdms',
	'allowed_hosts' => '_ah',

	'Hybrid' => '_Hb',
	'_hybrid' => '_hb',
	'hybrid_' => 'hb_',
	
); // we create three letter mnemonics for these..

// WE ALWAYS MINIFY AND Build debug, So don't even catch the minify thing..
//$minify=true;
//if(isset($_GET['minify'])) 
//{
//	$minify=false;	
//}


$cache_file = 'build_' . $lib ;

// we need to rebuild if the largest in mtime is newer than the cache file mtime


  require '../static/php/jsmin-1.1.1.php';
  $scripts = '';
  foreach ($build as $file) {
		$contents = @file_get_contents($file['js']);
		if ($contents === false) {
		  echo("build_js.php: Error reading file ".$file['js']);
		  exit;
		} else {
		  $scripts .= $contents;
		}
  }

  $min_content = $scripts;
  file_put_contents($cache_file, $min_content); // this creates the build. We always want that, because this script CAN only be called locally!

  // NOW always minify for a instant release version, than in the page getting the javaascript switch on host for build_ or min_ version without the comments and obscured with terms above!
  $min_content = JSMin::minify($min_content);
  $br="\n";
  $copyright='/*-- '.$br;
  for($i=0;$i<count($build);$i++)
  {
	if(count($build[$i]['desc'])!=0)
	{
		$copyright .= $br."Copyright notice".$br; 
		for($l=0;$l<count($build[$i]['desc']);$l++)
		{
			$copyright .=  $build[$i]['desc'][$l].$br;
		}
	}
  }
  $copyright .= $br.'---*/'.$br;
  // now we obscure it some more!!!
  reset($obscure);
  while (list($key, $val) = each($obscure)) 
  {
	// replace each $key with $val!!
	$min_content=str_replace($key,$val,$min_content);
  }
  $min_content =$copyright.$min_content;
  $cache_file = 'release_' . $lib ;
  file_put_contents($cache_file, $min_content);
  
  $min_content=$scripts; // restore it for (debug output)


header('Content-Type: text/javascript');
header('Expires: ' . gmdate('D, d M Y H:i:s', time()+365*24*3600) . ' GMT');
header('ETag: "' . md5($min_content) . '"');


if (is_buggy_IE()) {
  ob_start();
} else {
  ob_start('ob_gzhandler');
}

echo $min_content;

function is_buggy_IE() {
  $ret = false;
  $agent = $_SERVER['HTTP_USER_AGENT'];
  if (strpos($agent, 'Mozilla/4.0 (compatible; MSIE ') === 0 && strpos($ua, 'Opera') === false) {
    $version = floatval(substr($agent, 30));
    if ($version < 6) {
      $ret = true;
    } else if ($version == 6 && strpos($agent, 'SV1') === false) {
      $ret = true;
    }
  }
  return $ret;
}
?>