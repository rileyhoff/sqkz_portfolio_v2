function displayItems() {
  var url = document.URL;
  var id = url.substring(url.lastIndexOf('#') + 1);
  if (Number.isInteger(id)) {
    document.getElementById(id).style.display = "block";
    document.getElementById(id + "Nav").className = "active";
  }
}

function mouseMove() {
  z += 1;
  //how fast to change items
  if ((z % 10) == 1) {
    //when on first element set prev to last element
    if (x == 0) {
      prev = 31;
    } else {
      prev = x - 1;
    }
    x += 1;
    //number of items (including 0)
    if (x > 31) {
      x = 0;
    }
    document.getElementById(x + 3).className = "active";
    document.getElementById(prev + 3).className = "hidden";
  }
}

function pauseImages() {
  document.getElementById("bg").classList.toggle("pause");
}

function theatreView() {
  document.getElementById("body").classList.toggle("theatre");
}

function swipeLeft(e) {
  e.parentElement.classList.add("animateOut");
}

function pastIntro(){
  if (document.body.scrollTop > (document.getElementById("intro").offsetHeight-20) || document.documentElement.scrollTop > (document.getElementById("intro").offsetHeight - 20)){
    document.getElementById("body").classList.add("detail");
  }else{
    document.getElementById("body").classList.remove("detail");
  }
}

function contactForm(){
  if (contact==false){
  document.getElementById('about').classList.toggle("show_form");
  document.getElementById('contact').innerHTML = "About.";
  contact = true;
  }else{
    document.getElementById('about').classList.toggle("show_form");
    document.getElementById('contact').innerHTML = "Contact.";
    contact = false;
  }
}

function galleryNext(){
  var el = document.querySelector('section');
  // console.log(el.scrollLeft, el.scrollTop);
  el.scrollTop +=10;
}

function galleryPrev(){
  var el = document.querySelector('section');
  // console.log(el.scrollLeft, el.scrollTop);
  el.scrollTop -=10;
}

//delay links to run animations
function delay (URL) {
  document.body.classList.add("animate_out");
  setTimeout( function() { 
    window.location = URL 
  }, 500 );
}

//fullscreen view
function fullscreenViewOpen(el){

  var imgFile = el.src.split("/").slice(-2).join("/"); //get file name of image and containing folder
  document.getElementById("fullscreen_img").src = imgFile;
  
  //get art infomation
  imgFile = imgFile.split('.').slice(0, -1).join('.'); //take off file extention
  var imgData = unescape(imgFile.split("/").pop()); //take off folder
  var imgData = imgData.split(", ").slice(); //slice by ", " in file name
  
  document.getElementById("art_title").innerHTML = imgData[1];
  document.getElementById("dimentions").innerHTML = imgData[2];
  document.getElementById("medium").innerHTML = imgData[3];

  //make screen active
  document.getElementById('fullscreen_view').classList.add('active');
}

function fullscreenViewClose(){
  document.getElementById('fullscreen_view').classList.remove('active');
}

//init
z = 0;
x = 0; //change back to 0 to use above function
prev = 0;

//contact form not opened
var contact = false;

//interval id
var interval;