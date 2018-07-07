<?php
header('Access-Control-Allow-Origin: snoep.at');
header('Access-Control-Allow-Origin: makinggames.org');
header('Content-Type: text/html; charset=utf-8'); // this is needed to get special characters right.
?>
<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
		<meta charset="utf-8">	
		<script>
			function agree()
			{
				// set cookie to prevent showing this page AGAIN!
				if(typeof(Storage)!=="undefined")
				{
				  // Code for localStorage/sessionStorage.
					// Store
					localStorage.setItem("cms_disclaimer", "agree");
					localStorage.setItem("cms_disclaimer_date", new Date().getTime()); // we need to be able to check this for renewal..
				}
				location.href="../cms_questions/index.php";
			}
		</script>
		<style>
			body{	
				font-family: sans-serif;
				font-size: 0.8em;
			}
			table,th,td
			{
				border: none;
				border-collapse:collapse;
			}
			th,td
			{
				padding:5px;
			}
			th
			{
				text-align:left;
				background-color: rgba(241, 232, 206, 0.8); /* light, yellowish */
			}
			tbody tr:nth-child(odd) 
			{
				background-color: rgba(199, 195, 180, 0.8); /* white */
			}
			tbody tr:nth-child(even) 
			{
				background-color: rgba(150, 148, 140, 0.8); /* black */
			}
			.disclaimer
			{
				margin-left: 2em;
			}
			h1,h2{
				color: #666;
				margin-left: -1em;
			}
			h3{
				color: #888;
				font-size: 0.9em;
				margin-left: -0.5em;
			}
		</style>
	</head>
<body>
<div style="text-align: center">
<h1>Disclaimer en cookies-beleid</h1>
<div>
De voorwaarden van deze disclaimer zijn van toepassing op het gebruik van dit CMS.<br>
Door via deze website aangeboden service te gebruiken, verklaart u zich akkoord met de toepasselijkheid van deze disclaimer.
<br><br>
Deze pagina is altijd weer te bereiken via het menu.
Lees hem goed door en ga akkoord als u deze site wilt blijven gebruiken.
</div>
<br>
<hr>
<h3>Akkoord</h3>
<button type="button" onclick="agree();">Ik heb onderstaande informatie gelezen en ga akkoord</button>
</div>
<hr>
<div class="disclaimer">
<h2>Cookies</h2>
<h3>Wat zijn cookies?</h3>
Cookies zijn kleine bestanden, die de server gebruikt om de gebruiker te herkennen en allerlei instellingen te onthouden, terwijl de gebruiker van pagina wisselt.
<h3>Waarom deze waarschuwing?</h3>
Volgens de Nederlandse wet is de maker verplicht u te informeren over het cookie beleid van deze site.
Er waren namelijk vragen over de veiligheid van cookies. In bepaalde omstandigheden kunnen deze worden gebruikt om uw wachtwoord
te achterhalen of privacy te schenden.<br>
DEZE SITE ZET COOKIES OP UW COMPUTER, DOOR DEZE SITE TE GEBRUIKEN, GAAT U HIERMEE AKKOORD.<br> 
Als u bent ingelogd, hebt u er al een te pakken. Ook om te voorkomen dat deze pagina alsmaar naar voren komt, wordt een cookie gezet. Dat is helaas niet te voorkomen.<br>
<h3>Cookies verwijderen</h3>
Cookies zijn te wissen. Dit is voor iedere computer/besturingssysteem/browser anders. Bent u het niet eens met ons cookiebeleid, wist u dan alstublieft uw cookies.
U kunt dan deze website verder niet gebruiken.
<h2>Waarom gebruiken wij cookies?</h2>
Er is -in onze opinie- geen alternatief voor cookies, dat een gebruikerservaring oplevert die vergelijkbaar is, met wat wij u willen bieden.
<h3>Hoe zit het dan met de veiligheid?</h3>
De maker gebruikt geen cookies om persoonlijke informatie op te slaan. Of de informatie gevoelig is, ligt aan de situatie en is een discussie op zich.
De maker slaat geen NAW gegevens op. U krijgt een account en een wachtwoord. Hergebruik nooit wachtwoorden op verschillende sites!
</div>
<hr>
<div class="disclaimer">
<h2>Disclaimer andere content van deze website</h2>
<h3>Gebruik van dit CMS (Content Management Systeem)</h3>
<ul>
<li>De informatie op deze website is uitsluitend bedoeld als service. Er kunnen geen rechten aan de informatie/diensten op deze website worden ontleend. </li>
<li>Hoewel de maker zorgvuldigheid in acht neemt bij het samenstellen en onderhouden van dit cms en de daarop aangesloten website en daarbij gebruik maakt van bronnen die betrouwbaar geacht worden, kan hij niet instaan voor de juistheid, volledigheid en actualiteit van de geboden informatie. </li>
<li>De maker garandeert evenmin dat deze website foutloos of ononderbroken zal functioneren. </li>
<li>De maker wijst iedere aansprakelijkheid ten aanzien van de juistheid, volledigheid, actualiteit van de geboden informatie en het (ongestoord) gebruik van deze website uitdrukkelijk van de hand.</li>
</ul>
<h3>Verantwoordelijkheid CMS gebruiker</h3>
<ul>
<li>Door gebruik te maken van dit CMS wordt mede verantwoordelijk voor het functioneren, de veiligheid van de aangestuurde website.</li>
<li>Hou wachtwoorden en accounts prive</li>
<li>Upload geen materiaal waarvan het copyright aangevochten zou kunnen worden.</li>
<li>Gebruik een virusscanner, wanneer je dit CMS gebruikt.</li>
</ul>
<h3>Informatie en libraries van derden</h3>
<ul>
<li>De maker heeft geen invloed op omstandigheden op de server, zoals hosting en geinstalleerde versies van gebruikte software (bijvoorbeeld: GD, PHP, APACHE etc).</li>
<li>De maker heeft geen invloed op externe links. Wanneer de maker links naar websites van derden (bijv jquery- javascript library) weergeeft of gebruikt, betekent dit niet dat de op of via deze websites aangeboden producten of diensten door hem worden aanbevolen. 
Deze informatie is namelijk door zijn aard aan verandering onderhevig.  De maker aanvaard geen aansprakelijkheid en geen enkele verantwoordelijkheid voor de inhoud, het gebruik of de beschikbaarheid van websites waarnaar wordt verwezen of die verwijzen naar deze website of websites die worden aangestuurd met dit CMS. 
Het gebruik van dergelijke links is voor eigen risico. De informatie op dergelijke websites is door de maker niet nader beoordeeld op juistheid, redelijkheid, actualiteit, aanstootgevendheid of volledigheid.</li>
</ul>
<h3>Gebruik software</h3>
De maker behoudt zich alle intellectuele eigendomsrechten en andere rechten voor met betrekking tot de software nodig voor het functioneren van deze website.
Het is niet toegestaan deze software te kopiëren, te downloaden of op enigerlei wijze openbaar te maken, te verspreiden of te verveelvoudigen zonder voorafgaande schriftelijke toestemming van de maker of de rechtmatige toestemming van de rechthebbende. U mag informatie op deze website wel afdrukken en/of downloaden voor eigen persoonlijk gebruik.
<h3>Wijzigingen</h3>
De maker behoudt zich het recht voor de op of via deze website aangeboden informatie, met inbegrip van de tekst van deze disclaimer, te allen tijde te wijzigen zonder hiervan nadere aankondiging te doen. 
Het verdient aanbeveling periodiek na te gaan of de op of via deze website aangeboden informatie, met inbegrip van de tekst van deze disclaimer, is gewijzigd.
<h3>Toepasselijk recht</h3>
Op deze website en de disclaimer is het Nederlands recht van toepassing. Alle geschillen uit hoofde van of in verband met deze disclaimer zullen bij uitsluiting worden voorgelegd aan de bevoegde rechter in Nederland.

</div>
</body>
</html>
