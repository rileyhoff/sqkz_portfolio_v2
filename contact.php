<?php
$staus = $_GET['email'];
$art = $_GET['art'];
switch (@$_GET['do'])
 {

 case "send":

      $name = $_POST['name'];
      $email = $_POST['email'];
      $phone = $_POST['phone'];
      $sendmail = $_POST['sendmail'];
      $artwork = $_POST['art'];
      $secretinfo = $_POST['info'];

    if (!preg_match("/\S+/",$name))
    {
      unset($_GET['do']);
      $message = "Please enter your name :)";
      break;
    }
    if (!preg_match("/^\S+@[A-Za-z0-9_.-]+\.[A-Za-z]{2,6}$/",$email))
    {
      unset($_GET['do']);
      $message = "Email Address is incorrect :/";
      break;
    }
    if ($secretinfo == "")
    {
      // convert email to lowercase letters
      $email = strtolower($email);
      
       $myemail = "rileyhoff@outlook.com";

       $emess = $sendmail."\n\n";
       $emess.= "---\n".$name."\n";
       $emess.= "E: ".$email."\n";
       $emess.= "P: ".$phone."\n";
       $emess.= "Artwork: ".$artwork."\n";
       $ehead = "From: "."inquiry@sqkz.art"."\r\n";
       $subj = "SQKZ - Art inquiry from ".$name."!";
       $mailsend=mail("$myemail","$subj","$emess","$ehead");
       $message = "Email was sent. :) We will be contacting you shortly!";
    }
 
       unset($_GET['do']);
       header("Location: index.html?email=sent");
     break;
 
 default: break;
 }
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <title>SQKZ. - Contact.</title>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="author" content="Riley Hoff">
  <meta name="description" content="sqkz art portfolio website - Riley Hoff">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="msapplication-TileColor" content="#fda062">
  <meta name="msapplication-config" content="/icon/browserconfig.xml">
  <meta name="theme-color" content="#fda062">
  <link rel="apple-touch-icon" sizes="180x180" href="/icon/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/icon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/icon/favicon-16x16.png">
  <link rel="manifest" href="/icon/site.webmanifest">
  <link rel="mask-icon" href="/icon/safari-pinned-tab.svg" color="#fda062">
  <link rel="shortcut icon" href="/icon/favicon.ico">
  <link href="style.css" rel="stylesheet" type="text/css" media="screen">
  <link rel="stylesheet" href="https://use.typekit.net/mwa6qok.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="data/artworks.js"></script>
  <script src="script.js"></script>
  <script>
      var width = $(window).width();
  $(window).resize(function () {
    if (width <= 850) {
      $('body').addClass('mbl');
    }
  });
  </script>
  <!--[if lt IE 9]>
<script src="//html5shim.googlecode.com/sin/trunk/html5.js"></script>
<![endif]-->
</head>
<body id="body" class="<?php if($art){echo "art";} ?>">
<section id="about" class="about detail contact grid-container">
<header>
<nav id="" class="right_nav">
      <a href="javascript:delay('/dev/painting.html')">painting.</a>
      <a href="javascript:delay('/dev/drawing.html')">drawing.</a>
      <a href="javascript:delay('/dev/misc.html')">misc.</a>
      <a href="/dev/index.html#about">about.</a>
    </nav>
          <!-- mobile menu icon -->
          <div id="mbl_icon" class="mobile_icon" onclick="mobileIcon(this)">
            <div class="bar1"></div>
            <div class="bar2"></div>
          </div>
      <a href="#intro" >
        <svg id="sqkz_title" style="<?php if($staus){echo "fill: whitesmoke";} ?>" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 827.06 355.58002">
        <title>SQKZ</title>
        <path
          d="M552.46144,557.88971v52.06c21.62994,9.8,49.68994,13.86,69.3,13.86,44.96,0,79.1-21.3,79.44-58.48,0-20.4-9.84-33.57-30.4-42.69l21.27-7.01v-52.05c-21.3-9.13-48.34-13.52-68.29-13.52-43.94,0-77.06994,21.63-77.41,57.46,0,19.61,9.7,33.56,30.74,42.99Z"
          transform="translate(-546.37141 -361.82971)" />
        <path
          d="M844.58143,459.51971l48.68-8.45v255.41l-66.83,10.93c-.59-18.99-.1-101.72-.1-101.72l-.68-.33c-8.45,4.73-20.96,8.45-34.82,8.45-43.94,0-79.77-33.47-79.77-83.84,0-51.38,36.84-89.91,91.61-89.91A101.67857,101.67857,0,0,1,844.58143,459.51971Z"
          transform="translate(-546.37141 -361.82971)" />
        <polygon
          points="499.88 166.31 557.68 258.26 367.36 258.26 367.36 0 434.3 0 434.3 160.23 434.97 160.57 481.62 91.95 555.31 91.95 499.88 166.31" />
        <polygon
          points="728.03 92.62 662.79 204.85 663.13 205.52 726 205.52 726 258.26 563.41 258.26 563.07 257.59 628.31 145.36 627.97 144.68 570.84 144.68 570.84 91.95 727.69 91.95 728.03 92.62" />
        <path
          d="M1373.43141,587.63971c0,19.94-6.34009,70.34-27,50.77-19-18-46-18-46.02-50.77a36.51161,36.51161,0,0,1,73.02,0Z"
          transform="translate(-546.37141 -361.82971)" />
        </svg>
      </a>
    </header>
    <h1 id="contact_title"><?php if($art){echo "Art Inquiry.";}else{echo "Contact Me.";} ?></h1>
    <a id="back_link" class="right_link" href="<?php if($art){echo "javascript:history.back()";}else{echo "index.html#about";} ?>" >Back.</a>
      <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.96 71.13"><path d="M538.94,255.41a414,414,0,0,0-40.79,59c-3.79,6.67,6.49,12.67,10.28,6a397.49,397.49,0,0,1,38.93-56.56c4.84-5.86-3.53-14.33-8.42-8.42Z" transform="translate(-474.85 -252.48)"/><path d="M491,262.39l14.11,22.76c4,6.49,14.29.55,10.28-6-6.31-10.33-15.28-19.33-26.13-24.86-5.13-2.61-12.28-3.19-14.15,3.79-1.52,5.67,3.11,10.62,6.47,14.5,16.37,18.95,39.08,30.92,56.13,49.19,5.23,5.61,13.64-2.82,8.41-8.42-12.88-13.81-28.83-24-43-36.3-3.43-3-6.75-6.05-9.87-9.34-1.64-1.73-3.27-3.51-4.76-5.38-.23-.28-1.4-2.26-1.7-2.31l-3.5,4.55,1.4.76c1.32,1.54,4.33,2.6,6,3.86a52.46,52.46,0,0,1,5.5,4.7,56.83,56.83,0,0,1,8.92,11.27l10.28-6-14.11-22.76c-4-6.49-14.34-.52-10.28,6Z" transform="translate(-474.85 -252.48)"/></svg> -->
        <!-- </a> -->
    <svg id="h_line_1" class="h_line" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 268.63379 13.33114">
      <title>H_Line_1</title>
      <path
        d="M833.21313,537.12054a2.33813,2.33813,0,0,0-2.9134,3.12091,2.37937,2.37937,0,0,0,4.11454.07557,1.50809,1.50809,0,0,0-.89645-2.20349l-6.03892-.92843a1.50766,1.50766,0,0,0-1.15584,2.74162c12.94981,8.154,29.01823,6.222,43.42454,4.33743q26.82226-3.50873,53.81523-5.40215c17.96244-1.2817,35.95614-2.09582,53.95671-2.592,18.108-.49917,36.22353-.67678,54.338-.68453,18.03033-.00772,36.06017.153,54.08943.33361q3.41128.03417,6.82255.069a1.5009,1.5009,0,0,0,0-3c-17.93994-.18236-35.88017-.36356-53.82113-.39728-17.94133-.03373-35.884.07985-53.82105.488-17.91808.4077-35.83123,1.10941-53.7181,2.25277-17.8775,1.14277-35.72935,2.72679-53.51233,4.8969-7.82515.95493-15.64155,2.21775-23.52484,2.58737-7.27746.3412-14.7715-.09771-21.5853-2.8927a32.39486,32.39486,0,0,1-4.94952-2.58678l-1.15584,2.74162,6.03892.92843-.89645-2.20349.59176,1.21051c1.80515.68951,2.586-2.20969.79752-2.89284Z"
        transform="translate(-825.58451 -532.58518)" />
    </svg>
    <?php if($staus == "sent"){
  echo "<h2 id='sent_msg'>Your message was sent. I'll be contacting you shortly :)</h2>";
}?>
    <div id="art_sample"><img id="sample_img" src="\dev\paint\1, Distance_SQKZ_Riley-Hoff_4.jpg">
    <p id="art_title"></p>
  </div>
    <form action="contact.php?do=send" method="POST" id="contact_form" class="grid-container">
      <div id="contact_name"><input type="text" name="name" id="txt_name"  value="<?php echo @$name ?>" required><label class="required">Name</label></div>
      <div id="contact_email"><input type="email" name="email" id="txt_email" onkeyup="this.setAttribute('value', this.value);" pattern="[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?" value="<?php echo @$email ?>" required><label class="required">Email</label></div>
      <div id="contact_phone"><input type="tel" name="phone" id="txt_phone" pattern="^\+?[\d -]{0,13}" onkeyup="this.setAttribute('value', this.value);" value="<?php echo @$phone ?>"><label>Phone (optional)</label></div>
      <div id="contact_message"><textarea type="text" name="sendmail" id="txt_message" value="<?php echo @$sendmail ?>" required></textarea><label class="required">Message</label></div>
      <input type="hidden" name="art" value="<?php echo @$art ?>" >
      <input id="contact_submit" type="submit" name="submit" value="Send.">
    </form>
  </section>
  <script>
  <?php if($art){echo "
var id = getArtworkIdString('".$art."');\n
document.getElementById('sample_img').src = '".$art."';\n
document.getElementById('art_title').innerHTML = artworks[id].title;\n";}?>

   //initial check for window width
   if (width <= 850) {
    $('body').addClass('mbl');
  }

</script>

</body>

</html>