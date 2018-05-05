<?php
$eMail=array('Sebastian Rodriguez', 'seb646@outlook.com');
$action="contact.php";
$antispam_answer="31";
$continue="yes";
$unable_to_send="no";
$warning="";
$convert_field=array('<br />'=>'','"'=>'&#034;','/>'=>'>');
$convert_email=array('\\'=>'');
if (isset($_GET['sent_email'])){$continue='no';}

if (isset($_POST['send_email'])){
	$name=strtr($_POST['name'],$convert_field);
	$email=strtr($_POST['email'],$convert_field);
  $subject=strtr($_POST['subject'],$convert_field);
	$content=strtr($_POST['content'],$convert_email);
	$antispam_check=strtolower($_POST['antispam']);
	if (!empty($name)){
		if (!empty($content)){
      if (!empty($subject)){
  			if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
  				if($antispam_check==$antispam_answer){

if( mail( '"'.$eMail[0].'" <'.$eMail[1].'>', $subject, $content, 'Return-Path: "' . $name . '" <'.$email.">\n" . 'From: "'.$name.'" <' .$email. ">\n" . 'Reply-To: "'.$name.'" <'.$email.">\n" . "X-Mailer: PHP/" . phpversion() . "\n"))
{unset($_POST); header("location: ".$action."?sent_email=yes");}else{$unable_to_send="yes";}

				  } else {$warning="Anti-spam answer is incorrect.";}
		    } else {$warning="Please include a valid email address.";}
      } else {$warning="Please include a subject.";}
    } else {$warning="Please include something you wish to discuss with the site owner.";}
	} else {$warning="Please include a name when submitting an email.";}
}

?>
<html lang="en"><head>
  <title>Contact</title>
	<?php include "assets/controller.php"; ?>
  <?php echo $head;?>
</head>
<body>
  <nav class="navbar">
    <div class="container">
      <div class="row">
        <div class="four columns">
          <h4 style="line-height: 6.5rem;">Sebastian Rodriguez</h4>
        </div>
        <div class="eight columns">
          <ul class="navbar-list" style="float:right;">
						<?php echo $nav;?>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <div class="container">
        <h2>Contact Me</h2>
					<?php
	  			if ($continue=="no")
	  			{ echo 'Message Sent Successfully.'; }
	  			else
	  			{
	  				if($unable_to_send=="yes"){
	  					echo '<p>UNABLE To Send Message.</p>';
	  				}
	  				if (!empty($warning)){
	  					echo '<p>',$warning,'</p>';
	  				}
	  			?>
	  			<?php echo '<form method="post" action="',$action,'">';  ?>
						<div class="row">
						    <div class="six columns">
									<label for="last_name">Your Name</label>
	  			          <?php
	  			            echo '<input id="last_name" class="u-full-width" placeholder="John Doe" name="name" type="text" class="validate" value="';
	  			            if (isset($_POST['name'])){
	  				          echo strtr($_POST['name'],$convert_field);
	  			            }
	  			            echo '">';
	  			          ?>
								</div>
								<div class="six columns">
      						<label for="email">Email Address</label>
	  			          <?php
	  			            echo'<input id="email" name="email" class="u-full-width" type="email" placeholder="me@email.com" class="validate" value="';
	  			            if (isset($_POST['email'])){
	  			              echo strtr($_POST['email'],$convert_field);
	  			            }
	  			            echo '">';
	  			          ?>
	              </div>
							</div>
								<label for="subject">Subject</label>
	                  <?php
	  			            echo'<input id="subject" name="subject" class="u-full-width" type="text" placeholder="Subject of Message" class="validate" value="';
	  			            if (isset($_POST['subject'])){
	  			              echo strtr($_POST['subject'],$convert_field);
	  			            }
	  			            echo '">';
	  			          ?>
	                  <br>
								<label for="textarea1">Message</label>
	  			          <?php
	  			            echo'<textarea id="textarea1" name="content" class="u-full-width" placeholder="Your Message">';
	  			            if (isset($_POST['content'])){
	  			              echo strtr($_POST['content'],$convert_field);
	  			            }
	  			            echo '</textarea>';
	  			          ?>
	                  <br>
											<label for="anti_spam">Anti-Spam</label>
	  			          <?php
	  			            echo'<input id="anti_spam" name="antispam" type="text" class="validate" placeholder="15 + 16" value="';
	  			            if (isset($_POST['antispam'])){
	  			              echo strtr($_POST['antispam'],$convert_field);
	  			            }
	  			            echo '">';
	  			          ?>
	                  <br>
	  				        <input id="last_name" type="submit"  class="button-primary" name="send_email" value="Submit">
	  			    </form>

			<?php
			}
			?>
		</section>
    </div>
  </body>
</html>
