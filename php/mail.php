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
	
	<!-- CSS -->
	<link rel="stylesheet" href="/style.css" type="text/css" />

	<!-- CSS - wtyczka fancy box -->
	<link href="/fancybox/jquery.fancybox-1.3.4.css" rel="stylesheet"/> 

	
	
	     <meta name="Generator" content="kED 2.1.4.0">
		 <meta name="description" content="Strona kontaktowa www.starozytnysumer.pl" />
         <meta name="author" content="Łukasz Sitnik">
         <meta name="Keywords" content="kontakt, autor" />
         <meta name="reply-To" content="lukasz.sitnik@gmail.com" />
         <meta name="creation-date" content="2010-09-30">
	     <meta name="last-modified" content="2016-04-14"/>
	     <link rel="Shortcut icon" href="/starozytny_sumer.ico" />

	<!-- biblioteka jquery -->
<script src="/js/jquery-1.6.3.min.js"></script>

	<!-- wtyczka easing -->
<script src="/js/jquery.easing.1.3.js"></script>

	<!-- wtyczka fancybox -->
<script src="/fancybox/jquery.fancybox-1.3.4.min.js"></script>

	<!-- zewnętrzny javaScript -->
<script src="/js/glowny.js"></script>

	<!-- zewnętrzny dodatkowy javaScript -->
<script src="/js/dodatkowy.js"></script>
	
       
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
	
	<script>
		window.onload = function() {
			initForms();
			pokazTytul();
		}// funkcja anonimowa
		
		function initForms() {
			for(i=0;i<document.forms.length;i++) {
				document.forms[i].onsubmit = validForm;
			}// for
		}// initForms
		
		function validForm() {
			var allGood = true;
			var allTags = document.getElementsByTagName("*");
			
			for(i=0;i<allTags.length;i++) {
				if(!validTag(allTags[i])) {
					allGood = false;
				}// if
			}// for
			
			return allGood;
			
			function validTag(thisTag) {
				var outClass = "";
				var allClasses = thisTag.className.split(" ");
				
				for(j=0;j<allClasses.length;j++) {
					outClass += validBasedOnClass(allClasses[j]) + " ";
				}// for
				
				thisTag.className = outClass;
				
				if(outClass.indexOf("invalid") > -1) {
				invalidLabel(thisTag.parentNode);
					thisTag.focus();
					if(thisTag.nodeName == "INPUT") {
						thisTag.select();
					}// if
					return false;
				}// if
				return true;
				
				function validBasedOnClass(thisClass) {
					var classBack = "";
					
					switch(thisClass) {
						case "":
						case "invalid":
						break;
						
						case "required":
						if(allGood && thisTag.value == "") {
							classBack = "invalid ";
						}// if
						
						classBack += thisClass;
						break;
						case "email":
						if(allGood && !validEmail(thisTag.value)) {
							classBack = "invalid ";
						}// if
						classBack += thisClass;
						break;
						case "textarea":
						if(allGood && !validTextarea(thisTag.value)) {
							classBack = "invalid ";
						}// if
						classBack += thisClass;
						break;
						case "subject":
						if(allGood && !validSubject(thisTag.value)) {
							classBack = "invalid ";
						}// if
						classBack += thisClass;
						break;
						default:
						classBack += thisClass;
					}// switch
					return classBack;
				}// validBasedOnClass
				
				function invalidLabel(parentTag) {
					if(parentTag.nodeName == "LABEL") {
						parentTag.className += "invalid";
					}// if
				}// invalidLabel
				
				function validEmail(email) {
					var invalidChars = " /;:,";
					
					if(email == "") {
					document.getElementById("wrong").innerHTML = "Pole jest puste";
						return false;
					}// if
				      for(k=0;k<invalidChars.length;k++) {
						var badChar = invalidChars.charAt(k);
					if(email.indexOf(badChar) > -1) {
						document.getElementById("wrong").innerHTML = "Podany adres e-mal zawiera niedozwolony znak: " + badChar;
							return false;
						}// if
					}// for
					
					var atPos = email.indexOf("@",1);
					if(atPos == -1) {
					document.getElementById("wrong").innerHTML = "Podano nieprawidłowy e-mail";
						return false;
					}// if
					if (email.indexOf("@",atPos+1) != -1) {
					document.getElementById("wrong").innerHTML = "Podano nieprawidłowy e-mail";
						return false;
					}
					var periodPos = email.indexOf(".",atPos);
					if (periodPos == -1) {	
					document.getElementById("wrong").innerHTML = "Podano nieprawidłowy e-mail";
						return false;
					}
					if (periodPos+3 > email.length)	{
					document.getElementById("wrong").innerHTML = "Podano nieprawidłowy e-mail";
						return false;
					}
					return true;
				}// validEmail
				function validTextarea(text) {
					if(text == "") {
					document.getElementById("wrong").innerHTML = "Proszę podać treść";
						return false;
					}//if
					return true;
				}// validTextarea
				function validSubject(topic) {
					if(topic == "") {
						document.getElementById("wrong").innerHTML = "Proszę podać temat wiadomości";
						return false
					}//if
					return true;
				}// validSubject
			}// validTag
		}// validForm
		
	</script>
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

	<ul>

	<li><a href="/">Strona Główna</a></li>
	<li><a href="/podstrony/bogowie.html">Bogowie</a></li>
	<li><a href="/podstrony/mitologia.html">Piśmiennictwo</a></li>
	<li><a href="/podstrony/sztuka.html">Sztuka</a></li>
	<li><a href="/podstrony/architektura.html">Architektura</a></li>
	<li><a href="/podstrony/miasta.html">Miasta</a></li>
	<li><a href="/podstrony/historia.html">Historia</a></li>
	<li><a href="/podstrony/prawo.html">Prawo</a></li>
	<li><a href="/podstrony/nauka.html">Nauka</a></li>
	<li><a href="/podstrony/pismo.html">Pismo</a></li>
	<li><a href="http://net3.pl/uslugi/ksiega.php?p_user=sitnikl1&p_nrksiegi=0" target="blank">Księga Gości</a></li>
	<li><a href="/podstrony/linki.html">Linki</a></li>

   </ul>

	

	 <script src="/js/boczne_bloki.js"></script>


	</div>



	<div id="STOPKA">

	<br/>

	<p class="linki_dol_strony">
<a href="/inne_podstrony/kontakt.html" title="Proszę kliknąć, aby wyświetlić dane kontaktowe autora strony">kontakt</a><br/>
<a href="/inne_podstrony/statystyka.html">statystyka wejść</a>
   </p>


	</div>
    </div>

</body>

</html>



';
?>