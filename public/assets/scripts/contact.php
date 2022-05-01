<?php
include 'captcha.php';
$contact_successful = false;
$error_msgs = [
    'missing-input-secret' => 'The secret parameter is missing.',
    'invalid-input-secret' => 'The secret parameter is invalid or malformed.',
    'missing-input-response' => 'The response parameter is missing.',
    'invalid-input-response' => 'The response parameter is invalid or malformed.',
    'bad-request' => 'The request is invalid or malformed.',
    'timeout-or-duplicate' => 'The response is no longer valid: either is too old or has been used previously.'
];
if($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['g-recaptcha-response'])) {
    $captcha_url = 'https://google.com/recaptcha/api/siteverify';
    $captcha_response = $_POST['g-recaptcha-response'];

    $captcha = file_get_contents($captcha_url.'?secret='.$captcha_secret.'&response='.$captcha_response);
    $captcha = json_decode($captcha);

    foreach ($captcha as $key => $value) {
        if($key == 'error-codes'){
            $errors = $value;
        }
    }
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email-address'], FILTER_SANITIZE_EMAIL);;
    $subject = htmlspecialchars($_POST['subject']);
    $content = htmlspecialchars($_POST['message']);

    if($captcha->score >= 0.5) {
        $contact_successful = true;
        $headers = 
            'From: '.$name.' <no-reply@srod.ca>'."\r\n" .
            'Reply-To: '.$email."\r\n" .
            'MIME-Version: 1.0'."\r\n" .
            'Content-type: text/html; charset=utf-8'."\r\n" .
            'X-Mailer: PHP/' . phpversion();
        $message = '
        <div style="background: #fff;padding:50px 20px;font-family: sans-serif;color: #616468;font-size: 16px;">
            <div style="max-width:600px;margin: 0 auto 30px auto;line-height: 1.5;">
                <a href="https://srod.ca" style="color:#b4b8c0;display:inline-block;margin-bottom: 50px;"><img src="https://srod.ca/assets/images/logo.png" style="width: 150px;"></a>
                <p style="margin-top:0px;margin-bottom: 10px;">Hi Sebastian,</p>
                <p style="margin-top:0px;margin-bottom: 30px;">Some has sent you a message using the contact form on your website! Their message is copied below.</p>
                <div style="border-left: 3px solid #d1d1d1;padding: 5px 0px 5px 15px;margin-bottom:30px;">
                    <p style="margin-top:0px;margin-bottom: 10px;font-weight:bold;font-size: 20px;">'.$subject.'</p>
                    <p style="margin-top:0px;margin-bottom: 10px;">'.$content.'</p>
                    <p style="margin-top:0px;margin-bottom: 00px;"><span style="font-weight:bold;">From:</span> '.$name.' (<a href="mailto:'.$email.'" style="color:#616468;text-decoration:none;">'.$email.'</a>)</p>
                </div>
                <p style="margin-top:0px;margin-bottom:0px;">Best,</p>
                <p style="margin-top:0px;margin-bottom:0px;">Sebastian</p>
                <div style="margin: 25px auto 0 auto;">
                    <a href="https://srod.ca" style="color:#b4b8c0;display:inline-block;margin-right: 20px;"><img src="https://srod.ca/assets/images/icons/link.png" style="width:20px;"></a>
                    <a href="mailto:me@srod.ca" style="color:#b4b8c0;display:inline-block;margin-right: 20px;"><img src="https://srod.ca/assets/images/icons/email.png" style="width:20px;"></a>
                    <a href="https://github.com/seb646" style="color:#b4b8c0;display:inline-block;margin-right: 20px;"><img src="https://srod.ca/assets/images/icons/github.png" style="width:20px;"></a>
                    <a href="https://www.linkedin.com/in/seb646/" style="color:#b4b8c0"><img src="https://srod.ca/assets/images/icons/linkedin.png" style="width:20px;"></a>
                </div>
            </div>
        </div>
        ';
        mail('me@srod.ca', 'Message from '.$name, $message, $headers);
        
        $headers_sender = 
            'From: Sebastian Rodriguez <no-reply@srod.ca>'."\r\n" .
            'Reply-To: Sebastian Rodriguez <me@srod.ca>'."\r\n" .
            'MIME-Version: 1.0'."\r\n" .
            'Content-type: text/html; charset=utf-8'."\r\n" .
            'X-Mailer: PHP/' . phpversion();
        $message_sender = '
        <div style="background: #fff;padding:50px 20px;font-family: sans-serif;color: #616468;font-size: 16px;">
            <div style="max-width:600px;margin: 0 auto 30px auto;line-height: 1.5;">
                <a href="https://srod.ca" style="color:#b4b8c0;display:inline-block;margin-bottom: 50px;"><img src="https://srod.ca/assets/images/logo.png" style="width: 150px;"></a>
                <p style="margin-top:0px;margin-bottom: 10px;">Hi '.$name.',</p>
                <p style="margin-top:0px;margin-bottom: 30px;">Thank you for reaching out! I have received your message and I will be in touch with you shortly. For your records, a copy of your message is included below.</p>
                <div style="border-left: 3px solid #d1d1d1;padding: 5px 0px 5px 15px;margin-bottom:30px;">
                    <p style="margin-top:0px;margin-bottom: 10px;font-weight:bold;font-size: 20px;">'.$subject.'</p>
                    <p style="margin-top:0px;margin-bottom: 10px;">'.$content.'</p>
                    <p style="margin-top:0px;margin-bottom: 00px;"><span style="font-weight:bold;">From:</span> '.$name.' (<a href="mailto:'.$email.'" style="color:#616468;text-decoration:none;">'.$email.'</a>)</p>
                </div>
                <p style="margin-top:0px;margin-bottom:0px;">Best,</p>
                <p style="margin-top:0px;margin-bottom:0px;">Sebastian</p>
                <div style="margin: 25px auto 0 auto;">
                    <a href="https://srod.ca" style="color:#b4b8c0;display:inline-block;margin-right: 20px;"><img src="https://srod.ca/assets/images/icons/link.png" style="width:20px;"></a>
                    <a href="mailto:me@srod.ca" style="color:#b4b8c0;display:inline-block;margin-right: 20px;"><img src="https://srod.ca/assets/images/icons/email.png" style="width:20px;"></a>
                    <a href="https://github.com/seb646" style="color:#b4b8c0;display:inline-block;margin-right: 20px;"><img src="https://srod.ca/assets/images/icons/github.png" style="width:20px;"></a>
                    <a href="https://www.linkedin.com/in/seb646/" style="color:#b4b8c0"><img src="https://srod.ca/assets/images/icons/linkedin.png" style="width:20px;"></a>
                </div>
            </div>
        </div>
        ';
        mail($email, 'Thank you for your message, '.$name.'!' , $message_sender, $headers_sender);
    }
}else{
    header('Location: https://'.$_SERVER['HTTP_HOST'].'/contact');
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Contact | Sebastian Rodriguez</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="x-ua-compatible" content="ie=edge">

    <!-- Icons -->
    <link rel="icon" sizes="any" type="image/svg+xml" href="../../assets/images/favicon.svg">
    <link rel="alternate icon" type="image/x-icon" href="../../assets/images/favicon.ico">

	<!-- SEO Metadata -->
	<meta name="title" content="Contact | Sebastian Rodriguez">
	<meta name="author" content="Sebastian Rodriguez">
	<meta name="description" content="I'm a user experience designer and front-end software engineer specializing in Laravel, Tailwind CSS, and Vue.js helping people succeed by building and improving web applications.">
	<link rel="canonical" href="https://srod.ca/contact">
    <link rel="sitemap" type="application/xml" href="../../sitemap.xml">

	<!-- Open Graph Metadata -->
	<meta property="og:type" content="website">
	<meta name="og:title" property="og:title" content="Contact | Sebastian Rodriguez">
	<meta property="og:url" content="https://srod.ca/contact">
	<meta property="og:description" content="I'm a user experience designer and front-end software engineer specializing in Laravel, Tailwind CSS, and Vue.js helping people succeed by building and improving web applications.">
	<meta property="og:image" content="https://srod.ca/assets/images/meta.png">

    <!-- Twitter Metadata -->
	<meta property="twitter:card" content="summary_large_image">
	<meta property="twitter:title" content="Contact | Sebastian Rodriguez">
	<meta property="twitter:url" content="https://srod.ca/contact">
	<meta property="twitter:description" content="I'm a user experience designer and front-end software engineer specializing in Laravel, Tailwind CSS, and Vue.js helping people succeed by building and improving web applications.">
	<meta property="twitter:image" content="https://srod.ca/assets/images/meta.png">

	<!-- Google Analytics -->
	<meta name="robots" content="index, archive">
	<meta name="googlebot" content="index, archive">
	<script type="text/javascript" async src="https://googletagmanager.com/gtag/js?id=UA-150829567-1"></script>
	<script type="text/javascript" async src="../../assets/scripts/gtag.js"></script>

    <!-- Styles -->
	<link rel="stylesheet" href="../../assets/styles/main.css">
</head>
<body class="preload">
	<nav>
		<div class="max-w-6xl mx-auto py-8">
			<div class="relative flex flex-col sm:flex-row items-center justify-between space-y-8 sm:space-y-0"> 
                <a href="../../index.html" class="logo text-2xl font-bold text-white poppins border-b-4 border-sky-400">
                    Sebastian
                </a>
				<div>
					<ul class="main-nav flex space-x-4">
						<li><a href="../../projects/index.html">Projects</a></li>
						<li><a href="../../resume.html">Resume</a></li>
                        <li><a href="../../contact.html" class="active">Contact</a></li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
	<section class="pt-24 sm:pt-32">
		<div class="max-w-6xl m-auto text-center">
			<h1 class="z-10 text-7xl relative poppins text-center leading-tight text-gray-200">Contact Me</h1>
		</div>
    </section>
	<section class="py-24 sm:py-32">
		<div class="max-w-6xl mx-auto">
			<div class="relative bg-gray-800 rounded-xl">
				<div class="grid grid-cols-1 lg:grid-cols-3">
				  <div class="relative overflow-hidden py-10 px-6 lg:border-r-2 border-gray-700 sm:px-10 xl:p-12">
					<h3 class="text-lg font-medium text-white">Contact information</h3>
					<div class="mt-8 space-y-6">

					  <div><span class="sr-only">Email</span></div>
					  <div class="flex text-base text-sky-50">
						<svg class="flex-shrink-0 w-6 h-6 text-sky-200" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-at-sign">
							<circle cx="12" cy="12" r="4"></circle>
							<path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
						</svg>
						<span class="ml-3">me@srod.ca</span>
					  </div>
					  <div><span class="sr-only">GitHub</span></div>
					  <div class="flex text-base text-sky-50">
						<svg class="flex-shrink-0 w-6 h-6 text-sky-200" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
							<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
						</svg>
						<a class="ml-3 hover:text-sky-400" href="https://github.com/seb646">seb646</a>
					  </div>
					  <div><span class="sr-only">LinkedIn</span></div>
					  <div class="flex text-base text-sky-50">
						<svg class="flex-shrink-0 w-6 h-6 text-sky-200" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin">
							<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
							<rect x="2" y="9" width="4" height="12"></rect>
							<circle cx="4" cy="4" r="2"></circle>
						</svg>
						<a class="ml-3 hover:text-sky-400" href="https://linkedin.com/in/seb646">seb646</a>
					  </div>
					  <div><span class="sr-only">Discord</span></div>
					  <div class="flex text-base text-sky-50">
						<svg class="flex-shrink-0 w-6 h-6 text-sky-200" role="img" fill="currentColor" viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
							<title>Discord</title>
							<path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
						</svg>
						<span class="ml-3">seb#8169</span>
					  </div>
					</div>
				  </div>
		
				  <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
					<?php if($contact_successful){?>
					<div class="">
						<div class="flex">
						  <div class="flex-shrink-0">
							<svg class="h-5 w-5 text-green-400 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
						  </div>
						  <div class="ml-3">
							<h2 class="text-lg font-medium text-green-400">Your message has been sent!</h2>
							<div class="mt-2 text-base text-standard">
							  <p>Thank you for reaching out! A copy of your message has been sent to the email you provided. I will be in touch with you shortly. </p>
							</div>
							
						  </div>
						</div>
					</div>
					<?php }else{?>
					<div class="">
						<div class="flex">
							<div class="flex-shrink-0">
							<svg class="h-5 w-5 text-yellow-400 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
								<path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
							</svg>
						  </div>
						  <div class="grow ml-3">
							<h2 class="text-lg font-medium text-yellow-400">Oh no! We couldn't send your message.</h2>
							<div class="mt-2 text-base text-standard">
							  <p>Your message failed to send because of the following error(s):</p>
							  <ul class="list-disc text-sm ml-4 mt-4 space-y-1">
								  <?php foreach($errors as $error){?>
								  <li><span class="mono text-xs text-yellow-400 block mb-1"><?php echo $error;?></span><?php echo $error_msgs[$error];?></li>
								  <?php }?>
							  </ul>
							  <p class="mt-6">Here is a copy your message. The message will not save if you attempt to submit again.</p>
							  <textarea class="mt-2 block w-full outline-0 sm:text-sm text-standard focus:text-white bg-gray-700 border border-gray-700 focus:border-sky-400 rounded-md px-3 py-2"><?php echo $content;?></textarea>
							  <a href="../../contact.html" class="mt-4 relative inline-flex items-center px-4 py-2 border-2 border-sky-400 text-sky-400 shadow-sm text-sm font-medium rounded-md bg-transparent hover:bg-sky-400 hover:text-primary focus:outline-none cursor-pointer">Try Again</a>
							</div>				
						  </div>
						</div>
					</div>
				    <?php }?>
				  </div>
				</div>
			  </div>
		</div>
	</section>
	<footer>
		<div class="max-w-6xl pt-6 pb-14 mx-auto">
			<div class="max-w-6xl mx-auto mono text-standard text-center md:text-right text-sm space-y-2 md:space-y-0 flex justify-between flex-col md:flex-row">
				<div>Designed &amp; Built by <span class="text-gray-50">Sebastian Rodriguez</span></div>
				<div>&copy; <span id="current-year"></span> | <a class="hover:text-sky-400" href="https://github.com/seb646/srod.ca">GitHub</a></div>
			</div>
			<div class="nav-social">
				<a href="https://github.com/seb646" class="icon hover:-translate-y-1 transition-transform duration-300">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
						<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
					</svg>
					<span class="sr-only">GitHub</span>
				</a>
				<a href="https://linkedin.com/in/seb646" class="icon hover:-translate-y-1 transition-transform duration-300">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin">
						<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
						<rect x="2" y="9" width="4" height="12"></rect>
						<circle cx="4" cy="4" r="2"></circle>
					</svg>
					<span class="sr-only">LinkedIn</span>
				</a>
				<a href="mailto:me@srod.ca" class="icon hover:-translate-y-1 transition-transform duration-300">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-at-sign">
						<circle cx="12" cy="12" r="4"></circle>
						<path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
					</svg>
					<span class="sr-only">Email</span>
				</a>
			</div>
		</div>
	</footer>
	<script type="text/javascript" async src="../../assets/scripts/custom.js"></script>
</body>
</html>