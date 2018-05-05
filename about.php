<html lang="en"><head>
  <title>About</title>
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
    <h2>About Me</h2>
    <ul class="fa-ul">
      <li><i class="fa-li fa fa-map-marker"></i> New York City</li>
      <li><i class="fa-li fa fa-birthday-cake"></i> January 1st, 2001 (Age 15)</li>
      <li><i class="fa-li fa fa-university"></i> The Browning School</li>
      <li><i class="fa-li fa fa-graduation-cap"></i> Class of 2019 (9th Grade)</li>
      <li><i class="fa-li fa fa-gavel"></i> Form III Student Congressman</li>
    </ul>
    <h5>My Programming Skills</h5>
    <p>CodeCademy (<a href="https://www.codecademy.com/">Link</a>):</p>
    <div class="progress">
      <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width:100%;background-color: #D6A51D;">
        HTML &amp; CSS - 100%
      </div>
    </div>

    <div class="progress">
      <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:90%;background-color: #797979;">
        Linux Command Line - 90%
      </div>
    </div>

    <div class="progress">
      <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:65%;background-color: #52A528;">
        PHP - 65%
      </div>
    </div>

    <div class="progress">
      <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:20%;background-color: #BF3B3B;">
        Java - 20%
      </div>
    </div>

    <div class="progress">
      <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:18%;background-color: #FF7600;">
        JavaScript - 18%
      </div>
    </div>

    <p>CodeHS (<a href="https://codehs.com/">Link</a>):</p>
    <div class="progress">
      <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:100%;background-color: #846449;">
        Karel - 100%
      </div>
    </div>
  </div>


</body></html>
