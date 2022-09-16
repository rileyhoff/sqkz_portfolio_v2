function displayItems() {
  var url = document.URL;
  var id = url.substring(url.lastIndexOf('#') + 1);
  if (Number.isInteger(id)) {
    document.getElementById(id).style.display = "block";
    document.getElementById(id + "Nav").className = "active";
  }
}

//mobile menu animation
function mobileIcon(el) {
  el.classList.toggle("change");
  document.getElementsByTagName('NAV')[0].classList.toggle("show");
  document.getElementById('sqkz_title').classList.toggle("nav");
}

function mouseMove() {
  z += 1;
  //how fast to change items
  if ((z % 10) == 1) {
    //when on first element set prev to last element
    if (x == 0) {
      prev = 33;
    } else {
      prev = x - 1;
    }
    x += 1;
    //number of items (including 0)  --> AKA Minus 1!
    if (x > 33) {
      x = 0;
    }
    document.getElementById(x + 5).className = "active";
    document.getElementById(prev + 5).className = "hidden";
  }
}

function pauseImages() {
  document.getElementById("bg").classList.toggle("pause");
}

function fadeIn(el) {
  el.classList.add("fade_in");
}

function theatreView() {
  document.getElementById("body").classList.toggle("theatre");
}

function swipeLeft(e) {
  e.parentElement.classList.add("animateOut");
}

function pastIntro() {
  if (document.body.scrollTop > (document.getElementById("intro").offsetHeight - 20) || document.documentElement.scrollTop > (document.getElementById("intro").offsetHeight - 20)) {
    document.getElementById("body").classList.add("detail");
  } else {
    document.getElementById("body").classList.remove("detail");
  }
}

function contactForm() {
  if (contact == false) {
    document.getElementById('about').classList.toggle("show_form");
    if (document.body.classList.contains("mbl")) {
      document.getElementById('contact').innerHTML = "X.";
    } else {
      document.getElementById('contact').innerHTML = "About.";
    }
    contact = true;
  } else {
    document.getElementById('about').classList.toggle("show_form");
    document.getElementById('contact').innerHTML = "Contact.";
    contact = false;
  }
}

function galleryNext() {
  var el = document.querySelector('section');
  el.scrollLeft += 10;
}

function galleryPrev() {
  var el = document.querySelector('section');
  el.scrollLeft -= 10;
}

//delay links to run animations
function delay(URL) {
  document.body.classList.add("animate_out");
  setTimeout(function () {
    window.location = URL
  }, 500);
}

function getArtworkId(el) {
  //get id number of image
  var id = el.src.split("_").slice(-1).pop(); //get file name of image and containing folder
  id = id.split('.').slice(0, -1).join('.'); //take off file extention
  return id;
}
function getArtworkIdString(str) {
  //get id number of image
  var id = str.split("_").slice(-1).pop(); //get file name of image and containing folder
  id = id.split('.').slice(0, -1).join('.'); //take off file extention
  return id;
}

function fullscreenViewOpen(el) {

  //get id number of image
  // var id = getArtworkId(el);
  var id = el.id;

  if (artworks[id] == undefined) {
    document.getElementById("fullscreen_img").src = el.src;
    //get art infomation
    document.getElementById("art_title").innerHTML = "Untitled.";
    document.getElementById("dimentions").innerHTML = "";
    document.getElementById("medium").innerHTML = "";
  } else {

    var art = artworks[id];
    //place fullscreen image
    document.getElementById("fullscreen_img").src = el.src;

    //get art infomation
    document.getElementById("art_title").innerHTML = art.title;
    document.getElementById("dimentions").innerHTML = art.dimentions;
    document.getElementById("medium").innerHTML = art.medium;

    //see if work is for sale
    if (artworks[id].price == 0 || artworks[id].price == "NFS") {
      document.getElementById("price_text").innerHTML = "Not for Sale";
      // document.getElementById("price_text").style.color = "#aaa";
      document.getElementById("price").className = "nfs";
    } else if (artworks[id].price == "sold" || artworks[id].price == 1111) {
      document.getElementById("price_text").innerHTML = "Sold";
      document.getElementById("price").className = "sold";
    } else if (artworks[id].price == "hold" || artworks[id].price == 1) {
      document.getElementById("price_text").innerHTML = "Hold";
      document.getElementById("price").className = "hold"; 
      // document.getElementById("inquire_link").href = "contact.php?art=/imgs/" + el.src.split('/').slice(-2).join('/');
      document.getElementById("inquire_link").href = "contact.php?art="+id;
    } else {
      document.getElementById("price_text").innerHTML = "Available";
      document.getElementById("price").className = "available";
      // document.getElementById("inquire_link").href = "contact.php?art=/imgs/" + el.src.split('/').slice(-2).join('/');
      document.getElementById("inquire_link").href = "contact.php?art="+id;
    }

    // get detail images if available
    if (!(art.detail_imgs == 0 || art.detail_imgs == undefined)) {
      document.getElementById("detail_imgs").className = "active";
      //reset and add main image & add title
      document.getElementById("detail_imgs").innerHTML = "<p id='detail_title' >Detail.</p><img src='" + el.src + "' class = 'view'  onclick='detailActive(this)'></img>";
      var detail_folder = art.file.split('.').slice(0, -1).join('.');
      for (var i = 1; i <= art.detail_imgs; i++) {
        document.getElementById("detail_imgs").innerHTML += "<img src='/imgs/" + art.section + "/details/" + detail_folder + "/" + i + ".jpg' onclick='detailActive(this)'>"
      }
    }
  }
  //make screen active
  document.getElementById('fullscreen_view').classList.add('active');
}

function fullscreenViewClose() {
  document.getElementById('fullscreen_view').classList.remove('active');
  document.getElementById('detail_imgs').classList.remove('active');
}

//swap detail image with fullscreen image
function detailActive(el) {
  //remove view from all detail images
  NodeList.prototype.forEach = Array.prototype.forEach;
  var children = document.getElementById("detail_imgs").childNodes;
  children.forEach(function (item) {
    item.classList.remove("view")
  });
  //add view to clicked element
  el.classList.add("view");
  document.getElementById('fullscreen_img').src = el.src;
}

//grid view
function gridView() {
  document.getElementById("imgs").scrollTop = 0; // make sure images are scrolled to top
  document.body.classList.toggle('grid');
  document.body.classList.toggle('list');
}
function openCategories() {
  document.getElementById('categories').classList.toggle('open');
}

function filter(category, el) {
  if (category != "video") {
    if (document.body.classList.contains('video')) {document.body.classList.remove('video'); }
  //get all artwork images
  var images = document.getElementsByClassName("gallery");

  for (var i = 0; i < images.length; i++) {
    if (category == "all") {
      images[i].style.display = "block";
      images[i].style.animation = "slide-left 1s";
    } else {
      //get id number of image
      var id = images[i].id;
      if (artworks[id] == undefined || !(artworks[id].subsection == category)) {
        images[i].style.display = "none";
      } else {
        images[i].style.display = "block";
        images[i].style.animation = "slide-left 1s";
      }
    }
  }
}else{
  //video is category
  showVideo();
}
  //make clicked link active
  var children = document.getElementById("categories").children;
  for (var i = 0; i < children.length; i++) {
    children[i].classList.remove("active");
  }
  el.classList.add("active");
  document.getElementById('categories').classList.remove('open');
}

function displayImages(type, n){ //n is max number of images
  var folder = "imgs/"+type;
  for (var i = 0; i < n; i++){
    var file = artworks[i].file;
    console.log(file);
    if(file != undefined && file != "" && artworks[i].section == type){
      document.getElementById("imgs").innerHTML += "<div class='gallery_img'><img "
      + "srcset='" + folder + "/500px/" + file + " 500w, "
      + folder + "/1000px/" + file + " 1000w, "
      + folder + "/" + file + " 1700w'"
      + "alt='" + artworks[i].title + "' "
      + "src='" + folder + "/" + file + "' id='" + i + "' class='gallery' loading='lazy' onload='fadeIn(this)' onclick='fullscreenViewOpen(this)'></div>";
    }
  }
}

function showVideo() {
    document.body.classList.add('video');
    if (document.body.classList.contains('list')) {
      document.body.classList.remove('list');
      document.body.classList.add('grid');
    }
}

//init
z = 0;
x = 0; //change back to 0 to use above function
prev = 0;

//contact form not opened
var contact = false;

//interval id
var interval;