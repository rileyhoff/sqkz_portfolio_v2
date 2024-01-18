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
      //if blocked name don't send
      if ( $name == "HenryDef") { break; }

      // convert email to lowercase letters
      $email = strtolower($email);
      
       $myemail = "rileyhoff@outlook.com";

       $emess = $sendmail."\n\n";
       $emess.= "---\n".$name."\n";
       $emess.= "E: ".$email."\n";
       $emess.= "P: ".$phone."\n";
       $emess.= "Artwork id: ".$artwork."\n";
       $ehead = "From: "."inquiry@sqkz.art"."\r\n";
       $subj = "SQKZ - Art inquiry from ".$name."!";
       $mailsend=mail("$myemail","$subj","$emess","$ehead");
       $message = "Your message was sent. Thank you for your interest! &#10084;";
    }
 
       unset($_GET['do']);
       header("Location: /?email=sent");
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
  <link rel="stylesheet" href="https://use.typekit.net/mwa6qok.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600&display=swap" rel="stylesheet">
  
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
      <a href="javascript:delay('/painting.html')">painting.</a>
      <a href="javascript:delay('/drawing.html')">drawing.</a>
      <a href="javascript:delay('/misc.html')">misc.</a>
      <a href="/#about">about.</a>
    </nav>
          <!-- mobile menu icon -->
          <div id="mbl_icon" class="mobile_icon" onclick="mobileIcon(this)">
            <div class="bar1"></div>
            <div class="bar2"></div>
          </div>
          <a href="#intro">
            <h1 id="sqkz_title">sqkz.</h1>
          </a>
    </header>
    <h1 id="contact_title"><?php if($art){echo "Art Inquiry.";}else{echo "Contact Me.";} ?></h1>
    <a id="back_link" class="right_link" href="<?php if($art){echo "javascript:history.back()";}else{echo "/#about";} ?>" ><span class="strike">Back.</span></a>
    <?php if($staus == "sent"){
  echo "<h2 id='sent_msg'>Your message was sent. Thank you for your interest! &#10084;</h2>";
}?>
    <div id="art_sample"><img id="sample_img" src="">
    <p id="art_title"></p>
  </div>
    <form action="contact?do=send" method="POST" id="contact_form" class="grid-container">
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
// var id = getArtworkIdString('".$art."');\n
document.getElementById('sample_img').src =  \"/imgs/\" + artworks[".$art."].section + \"/\" + artworks[".$art."].file;\n
document.getElementById('art_title').innerHTML = artworks[".$art."].title;\n";}?>

   //initial check for window width
   if (width <= 850) {
    $('body').addClass('mbl');
  }

</script>

</body>

</html>