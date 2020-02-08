function displayItems() {
  var url = document.URL;
  var id = url.substring(url.lastIndexOf('#') + 1);
  if(Number.isInteger(id)){
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
      prev = 28;
    } else {
      prev = x - 1;
    }
    x += 1;
    //number of items (including 0)
    if (x > 28) {
      x = 0;
    }
    document.getElementById(x + 3).className = "active";
    document.getElementById(prev + 3).className = "hidden";
    console.log("prev:", x + 3);
  }

  // document.getElementById("num").innerHTML = x;
  // document.getElementById("prev").innerHTML = prev + 2;
}

function pauseImages() {
  document.getElementById("bg").classList.toggle("pause");
}

function swipeLeft(e){
  e.parentElement.classList.add("animateOut");
}

//init
z = 0;
x = 0; //change back to 0 to use above function
prev = 0;