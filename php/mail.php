<?php 
$to      = 'lukasz.sitnik@gmail.com';
$subject = $_POST['subject'];
$message = $_POST['text'];
$headers = 'From:' . $_POST['email'] . "\r\n" .
	'Content-type: text/html; charset=utf-8';
	mail($to, $subject, $message, $headers);
	echo '<!DOCTYPE HTML>
<html lang="pl">
<head>
	<meta charset="utf-8" />

	
	
	     <meta name="Generator" content="kED 2.1.4.0">
		 <meta name="description" content="Strona kontaktowa www.starozytnysumer.pl" />
         <meta name="author" content="Łukasz Sitnik">
         <meta name="Keywords" content="kontakt, autor" />
         <meta name="reply-To" content="lukasz.sitnik@gmail.com" />
         <meta name="creation-date" content="2010-09-30">
	     <meta name="last-modified" content="2016-04-14"/>
	     <link rel="Shortcut icon" href="/starozytny_sumer.ico" />

	
       
    <title>Kontakt</title>
	<style>
	label {
		font-weight: bold;
		font-family: "Times New Roman";
		color: black;
	}
	
	#form {
		border: 1px solid black;
		margin: 0 auto;
		padding: 10%;
		width: 60%;
		margin-top: 35px;
		background-color: #FCFCE1;
		border-radius: 4px;
	}
	
	input[type="text"]#e-mail {
		margin-left:3%;
	}	
	input[type="text"]#subject {
		margin-left:11.3%;
	}
	input[type="submit"], input[type="reset"] {
		background: #702525;
		color: white;
		border-radius: 4px;
		border: 3px solid lightgray;
	}

	input[type="submit"]:hover, input[type="reset"]:hover {
		opacity: .8;
	}

	input[type="submit"]:active, input[type="reset"]:active {
		color: red;
	}

	#email {
		font-size: 12px;
		margin-top: 80px;
		}
	
	input.invalid {
		background-color: #FF9;
		border: 2px red inset;
		}
	
	textarea.invalid {
		background-color: #FF9;
		border: 2px red inset;
		}

	label.invalid {
		color: #F00;
		font-weight: bold;
		}

	form div#wrong {
		margin: 0 0 0 25%;
		color: black;
		font-size: 14px;
		font-weight: 300;
		color: red;
		font-size: 13px;
	}
	</style>
	

</head>

  <body>
	<div id="calosc">
	<div id="NAGLOWEK">

	<a href="/"><img id="goraStrony" src="/grafika/zdjecia/zikkurat_2.JPG" alt="Wierzchołek zikkuratu"/></a>

	</div>
	
	<div class="szukaj">

	Szukaj na stronie...
	</div>

	<div class="wyszukiwarka">

		<script src="/js/wyszukiwarka.js"></script>
	
	</div>

	<div id="lokalizacja">
	<p class="sitemap"><a href="/sitemap.html" title="Proszę kliknąć, aby wyświetlić mapę serwisu">mapa strony</a></p>
	tutaj jesteś: <a href="/" title="Proszę kliknąć, aby przejść do strony głównej">Strona Główna</a> >> Kontakt
	</div>
	

	<div id="TRESC">

		<h1>Kontakt</h1><hr class="podkreslenie"/>


	
	<form action="/php/mail.php" method="post" id="form">
	
	<div style="margin: 0 25%;">Wiadomość została wysłana</div>
	
	</form>
	<p id="email">
e-mail: <strong>lukasz.sitnik@gmail.com</strong>
	</p>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

	<div class="gora_strony"><a href="#goraStrony">góra strony</a></div>
	<img class="dingir" src="/grafika/zdjecia/dingir/dingir_przezroczysty.gif" alt="Skrzydlaty dysk - symbol bogów sumeryjskich"/>
   <br/>
   <br/>


	</div>
	


	<div id="MENU">

	



	</div>



	<div id="STOPKA">

	<br/>

	<p class="linki_dol_strony">
<a href="/inne_podstrony/kontakt.html" title="Proszę kliknąć, aby wyświetlić dane kontaktowe autora strony">kontakt</a><br/>
<a href="/inne_podstrony/statystyka.html">statystyka wejść</a>
   </p>


	</div>
	</div>
	
	<!-- CSS -->
	<link rel="stylesheet" href="/style.css" type="text/css" />
	<!-- CSS - wtyczka fancy box -->
	<link href="/fancybox/jquery.fancybox-1.3.4.css" rel="stylesheet">
	<!-- jquery libery-->
	<script src="/js/jquery-1.6.3.min.js"></script>
	<!--  easing plugin -->
	<script src="/js/jquery.easing.1.3.js"></script>
	<!--  fancybox plugin -->
	<script src="/fancybox/jquery.fancybox-1.3.4.min.js"></script>
	<!-- the file stores a data -->
	<script src="/js/dataStore.js"></script>  
	<!-- module design pattern -->
	<script src="/js/javaScriptStore.js"></script>
	<!-- main js -->
	<script src="/js/add.js"></script>
	<!-- users tracking by google analitics -->
	<script src="/js/tracking.js"></script>

</body>

</html>



';
?>