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

function swipeLeft(e) {
  e.parentElement.classList.add("animateOut");
}

function pastIntro(){
  if (document.body.scrollTop > (document.getElementById("intro").offsetHeight-20) || document.documentElement.scrollTop > (document.getElementById("intro").offsetHeight - 20)){
    // console.log("douchea");
    document.getElementById("body").classList.add("detail");
  }else{
    // console.log("inherr");
    document.getElementById("body").classList.remove("detail");
  }
}

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyPhoto() {
  //scrolled into new section
  if (document.body.scrollTop > sticky) {
    sections[next].classList.add("sticky");
    if (next < 4) {
      next++;
      cur++;
    }
    //set to next section and record previous
    sticky = sections[next].offsetTop;
    drop = (sections[cur].offsetTop + sections[cur].offsetHeight);

    //drop photo when scrolling up 
  } if (document.body.scrollTop < drop) {
    sections[next].classList.remove("sticky");
    if (next > 0) {
      next--;
      cur--;
    }
    //record location on page
    sticky = sections[next].offsetTop;
    if (cur > 0) {
      drop = (sections[cur].offsetTop + sections[cur].offsetHeight);
    }
  }
  //check if past intro
  pastIntro();
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


//init
z = 0;
x = 0; //change back to 0 to use above function
prev = 0;

//contact form not opened
var contact = false;

//interval id
var interval;