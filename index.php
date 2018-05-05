<html>
  <head>
    <title>Sebastian Rodriguez :: Main</title>
    <?php include "assets/controller.php"; ?>
    <?php echo $initial;?>
  </head>
  <body>
    <?php echo $nav;?>
    <div class="openNav">
      <div class="icon"></div>
    </div>
    <div class="header">
  		<span class="name">Sebastian Rodriguez</span>
      <div class="social"></div>
      <h1 class="head-text">Home</h1>
    </div>
    <div class="extend"></div>
    <div class="content">
      <section id="intro">
        <h1 class="section-title">Introduction</h1>
        <p>Welcome to my website! This website was created to give anyone who cares information on <em>some</em> of the projects I'm working on or some of the programs
          that I'm currently experimenting with order to expand my knowledge in Computer Science.
          <b>WARNING:</b> This site is constantly changing to reflect my personal design preferences and understanding.</p>
      </section>
      <section id="programs">
        <h1 class="section-title">Programs Being Tested:</h1>
        <div class="row">
          <div class="col s12 m12 l4">
            <div class="card">
              <div class="card-image">
                <img src="assets/images/Android.jpg">
                <span class="card-title">Android Studio</span>
              </div>
              <div class="card-content">
                <p>A desktop application used to develop programs for the Android OS by using Java, XML, and other languages.</p>
              </div>
              <div class="card-action">
                <a href="https://developer.android.com/index.html">Learn More</a>
              </div>
            </div>
          </div>
          <div class="col s12 m12 l4">
            <div class="card">
              <div class="card-image">
                <img src="assets/images/p5-js.jpg">
                <span class="card-title">p5.js</span>
              </div>
              <div class="card-content">
                <p>A JavaScript library created for basic graphic and interactive projects that can be displayed on web pages.</p>
              </div>
              <div class="card-action">
                <a href="http://p5js.org">Learn More</a>
              </div>
            </div>
          </div>
          <div class="col s12 m12 l4">
            <div class="card">
              <div class="card-image">
                <img src="assets/images/laravel.jpg">
                <span class="card-title">Laravel</span>
              </div>
              <div class="card-content">
                <p>A dynamic, powerful, and simplistic PHP framework for a basic Content Management System.</p>
              </div>
              <div class="card-action">
                <a href="https://laravel.com/">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="devices">
        <h1 class="section-title">Devices Being Used:</h1>
        <div class="row">
          <div class="col s12 m12 l4">
            <div class="card">
              <div class="card-image">
                <img src="assets/images/Spectre.jpg">
                <span class="card-title">HP Spectre x360</span>
              </div>
              <div class="card-action">
                <a href="http://goo.gl/Yvfr3H">Learn More</a>
              </div>
            </div>
          </div>
          <div class="col s12 m12 l4">
            <div class="card">
              <div class="card-image">
                <img src="assets/images/OP3.jpg">
                <span class="card-title">OnePlus 3</span>
              </div>
              <div class="card-action">
                <a href="https://oneplus.net/3">Learn More</a>
              </div>
            </div>
          </div>
          <div class="col s12 m12 l4">
            <div class="card">
              <div class="card-image">
                <img src="assets/images/Debian.jpg">
                <span class="card-title">Debian VPS</span>
              </div>
              <div class="card-action">
                <a href="https://www.digitalocean.com/">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <?php echo $script;?>
  </body>
</html>
