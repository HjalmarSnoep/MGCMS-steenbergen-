<!DOCTYPE html>
<html lang="nl">
<head>
<title>MG CMS</title>
	<meta charset="utf-8">
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta name="apple-mobile-web-app-capable" content="yes"/>
	<script src="/static/js/jquery.min.js"></script>
    <script>
		$(function() {
		function fixHeightBugOnIOS7() {
			if (navigator.userAgent.match(/iPad;.*CPU.*OS 7_\d/i) && !window.navigator.standalone) 
			{
				var fixedHeight = Math.min(
				$(window).height(),
				window.innerHeight || Infinity
				);
				$('body').height(fixedHeight);
			}
		}
		function reloadPage()	{
			if (navigator.userAgent.match(/iPad;.*CPU.*OS 7_\d/i) && !window.navigator.standalone) 
			{
				location.reload();
			}
		}
		// this is because there seems to be no way to prevent the ipad from screwing up the page height and window.scroll.
		$(window).on('orientationchange', reloadPage);
		// this is because there is a bug in ios7 that actually reports 20 pixels too much for window.height.
		fixHeightBugOnIOS7();
	});
	</script>
		<style>
            html,
            body
            {
                margin: 0;
                padding: 0;
                height: 100%;
                width: 100%;
                overflow: auto;
                position: fixed;
            }
            #page-wrapper
            {
                height: 100%;
                position: relative;
                background: #aaa;
            }
            #content
            {
                position: absolute;
                width: 100%;
                top: 0px;
                bottom: 0px;
                overflow: auto;
                -webkit-overflow-scrolling: touch;
            }
        </style>
    </head>
    <body>
        <div id="page-wrapper">
            <div id="content">
				<iframe src="cms_menu/cms_menu.php" frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" height="100%" width="100%"></iframe>
            </div>
        </div>
    </body>
</html>