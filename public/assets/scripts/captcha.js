grecaptcha.ready(function() {
    grecaptcha.execute('6LckRC8fAAAAAEVi5ZBbBxdV0R-akecsJA-MaeVa', {action:'validate_captcha'}).then(function(token) {
        document.getElementById('g-recaptcha-response').value = token;
    });
});