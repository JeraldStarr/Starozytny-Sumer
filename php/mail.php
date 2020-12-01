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
	<title>Kontakt</title>
	<link href="/css/compressed/contactMessage.min.css" rel="stylesheet"/>
</head>

<body class="contactMessage">
	<div class="contactMessage__text">Wiadomość została wysłana</div>
	<button class="contactMessage__button">OK</button>
	<script>
		document.querySelector(".contactMessage__button").addEventListener("click", () => {
			window.location.href = "https://www.starozytnysumer.pl/inne_podstrony/kontakt.html#lokalizacja";
	});
</script>
</body>

</html>
';
?>