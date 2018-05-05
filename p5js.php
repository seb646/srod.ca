<!doctype html>
<html lang="en">
	<head>
		<title>p5.js Playground</title>
		<?php include "assets/control.php"; ?>
	    <?php echo $initial;?>
	</head>
	<body>

		<?php echo $nav;?>

		<main class="cd-main-content">
			<section class="center">
				<h1>p5.js Playground</h1>
				<p class="subtitle">Project testing for <a href="http://p5js.org/">p5.js</a>.</p>

				<div class="group">
					<button class="linky" onclick="doughnut()">The Doughnut</button> 
				</div>

				<?php echo $home;?>
			</section>
		</main>

		<div class="cd-overlay-nav">
			<span></span>
		</div>

		<div class="cd-overlay-content">
			<span></span>
		</div>

		<a href="#0" class="cd-nav-trigger">Menu<span class="cd-icon"></span></a>

		<?php echo $js;?>
		<script>
			function doughnut() {
			    window.open("assets/p5js/examples/doughnut.html", "", "width=550,height=450");
			}
		</script>
	</body>
</html>