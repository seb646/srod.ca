<?php
	$nav = '
	    <div class="menu-overlay">
	      <ul class="nav-main">
	        <li><a href="/index.php">Home</a></li>
	        <li><a href="/theme.php">Theme Elements</a></li>
	        <li><a href="/old.php">Old Designs</a></li>
	      </ul>
	    </div>';
	$initial = '
	    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
	    <meta name="language" content="en" />
	    <meta name="author" content="Sebastian Rodriguez" />
	    <meta name="viewport" content="initial-scale=0.999999">
	    <link rel="stylesheet" href="assets/style.css" />
	    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
	    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>';
	$script = '
		<script>
			$(".openNav").click(function() {
				$(".menu-overlay").toggleClass("open");
				$(this).toggleClass("open");
				$(".name").toggleClass("open-padding");
				$(".head-text").toggleClass("open-padding");
				$(".content").toggleClass("open-padding");
				$(".name").toggleClass("name-open");
			});
			$(window).scroll(function() {
				if ($(this).scrollTop() > 1){
						$(".header").addClass("header-active");
						$(".openNav").addClass("fixed");
						$(".extend").addClass("extend-active");
						$(".head-text").addClass("head-text-active");
					}
					else{
						$(".header").removeClass("header-active");
						$(".openNav").removeClass("fixed");
						$(".extend").removeClass("extend-active");
						$(".head-text").removeClass("head-text-active");
					}
			});
		</script>'
?>
