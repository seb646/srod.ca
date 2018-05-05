<?php
	$initial = '
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<link href="https://fonts.googleapis.com/css?family=Reenie+Beanie|Roboto:400,300,700,900" rel="stylesheet" type="text/css">

		<link rel="stylesheet" href="assets/css/reset.css">
		<link rel="stylesheet" href="assets/css/style.css">
		<link rel="stylesheet" href="assets/css/custom.css">
		<script src="assets/js/modernizr.js"></script>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">';

	$nav = '
		<nav>
			<ul class="cd-primary-nav">
				<li class="cd-label">Projects</li>
				<li><a href="http://go-round.org">Go Round</a></li>
				<li><a href="p5js.php">p5.js Playground</a></li>
				<li><a href="snapchat.php">Snapchat Geofilters</a></li>

				<li class="cd-label">Follow Me</li>
				<li class="cd-social"><a href="https://snapchat.com/add/sebastian646"><i class="fa fa-snapchat-ghost"></i></a></li>
				<li class="cd-social"><a href="https://twitter.com/seb646"><i class="fa fa-twitter"></i></a></li>
				<li class="cd-social"><a href="https://www.instagram.com/seb646/"><i class="fa fa-instagram"></i></a></li>
				<li class="cd-social"><a href="https://www.reddit.com/user/seb646/"><i class="fa fa-reddit-alien"></i></a></li>
				<li class="cd-social"><a href="https://github.com/seb646"><i class="fa fa-github"></i></a></li>
				<br>
				<li class="cd-social"><a href="https://www.youtube.com/channel/UCtCa-ob29Xb1iQA1PX5mQWQ"><i class="fa fa-youtube-play"></i></a></li>
				<li class="cd-social"><a href="mailto:me@srodriguez.xyz"><i class="fa fa-envelope"></i></a></li>
				<li class="cd-social"><a  onclick="doughnut()" ><i class="fa fa-calendar"></i></a></li>
				<li class="cd-social"><a href="https://dribbble.com/seb646"><i class="fa fa-dribbble"></i></a></li>
			</ul>
		</nav>';

	$js = '
		<script src="assets/js/jquery-2.1.1.js"></script>
		<script src="assets/js/velocity.min.js"></script>
		<script src="assets/js/main.js"></script>
		<script>
			function schedule() {
			    window.open("../schedule.html", "", "width=550,height=450");
			}
		</script>';

	$home = '
		<div style="clear:both;"></div>
		<a class="cd-btn" href="index.php"><i class="fa fa-long-arrow-left" aria-hidden="true"></i> Return Home</a>';
?>