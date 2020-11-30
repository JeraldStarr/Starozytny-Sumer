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
	<style>
	.contactMessage{background:linear-gradient(150deg, white, #f7f7e7 1000px);width:100vw;height:100vh}.contactMessage__text{font-size:50px;text-align:center;position:relative;top:30vh}.contactMessage__button{position:relative;left:50%;top:60%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);background:#702525;color:white;border-radius:4px;border:3px solid lightgray;-webkit-transition:.3s;transition:.3s;width:100px;height:40px;font-size:20px;cursor:pointer}.contactMessage__button:hover{opacity:.8}
/*# sourceMappingURL=contactMessage.css.map */
</style>
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