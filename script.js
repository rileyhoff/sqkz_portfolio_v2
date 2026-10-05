//mobile menu animation
function mobileIcon(el) {
  el.classList.toggle("change");
  document.getElementsByTagName('NAV')[0].classList.toggle("show");
  document.getElementById('sqkz_title').classList.toggle("open");
}

function fadeIn(el) {
  el.classList.add("fade_in");
}

function theatreView() {
  document.getElementById("body").classList.toggle("theatre");
}

function galleryNext() {
  var el = document.querySelector('section');
  el.scrollLeft += 10;
}

function galleryPrev() {
  var el = document.querySelector('section');
  el.scrollLeft -= 10;
}

function fullscreenViewOpen(el) {

  const artMainImg = document.getElementById("fullscreen_img");
  const artTitle = document.getElementById("art_title");
  const artDim = document.getElementById("dimensions");
  const artMedium = document.getElementById("medium");
  const artPriceText = document.getElementById("price_text");
  const artPriceBox = document.getElementById("price");
  const inquireLink = document.getElementById("inquire_link");
  const detailImgs = document.getElementById("detail_imgs");


  //get id number of image
  var id = el.id;

  if (artworks[id] == undefined) {
    artMainImg.src = el.src;
    //get art information
    artTitle.innerHTML = "Untitled.";
    artDim.innerHTML = "";
    artMedium.innerHTML = "";
  } else {

    var art = artworks[id];
    //place fullscreen image
    artMainImg.src = el.src;

    //get art infomation
    artTitle.innerHTML = art.title;
    artDim.innerHTML = art.dimensions;
    artMedium.innerHTML = art.medium;

    //see if work is for sale
    if (artworks[id].price == 0 || artworks[id].price == "NFS") {
      artPriceText.innerHTML = "Not for Sale";
      // artPriceText.style.color = "#aaa";
      artPriceBox.className = "nfs";
    } else if (artworks[id].price == "sold" || artworks[id].price == 1111) {
      artPriceText.innerHTML = "Sold";
      artPriceBox.className = "sold";
    } else if (artworks[id].price == "hold" || artworks[id].price == 1) {
      artPriceText.innerHTML = "Hold";
      artPriceBox.className = "hold";
      // inquireLink.href = "index.html#contact?art=/imgs/" + el.src.split('/').slice(-2).join('/');
      inquireLink.href = "index.html?art=" + id + "#contact";
    } else {
      artPriceText.innerHTML = "Available";
      artPriceBox.className = "available";
      // inquireLink.href = "index.html#contact?art=/imgs/" + el.src.split('/').slice(-2).join('/');
      inquireLink.href = "index.html?art=" + id + "#contact";
    }

    // get detail images if available
    if (!(art.detail_imgs == 0 || art.detail_imgs == undefined)) {
      detailImgs.className = "active";
      //reset and add main image & add title
      detailImgs.innerHTML = "<p id='detail_title' class='hoverable' >Detail.</p><img src='" + el.src + "' class = 'view' alt=''  onclick='detailActive(this)'></img>";
      var detail_folder = art.file.split('.').slice(0, -1).join('.');
      var fileExt = art.file.split('.').pop(); // get extension from main image
      var detailExt = (fileExt === 'avif') ? '.avif' : '.jpg'; // use .avif if main is avif, else .jpg
      for (var i = 1; i <= art.detail_imgs; i++) {
        if (i >= 10) { return; } else {
          detailImgs.innerHTML += "<img src='/imgs/" + art.section + "/details/" + detail_folder + "/" + i + detailExt + "' alt='detail " + i + "' onclick='detailActive(this)'>"
        }
      }
    }
  }
  //make screen active
  document.getElementById('fullscreen_view').classList.add('active');
}

function fullscreenViewClose() {
  const fullscreen = document.getElementById('fullscreen_view');
  const detailImgs = document.getElementById('detail_imgs');

  if (fullscreen) fullscreen.classList.remove('active');
  if (detailImgs) detailImgs.classList.remove('active');
} 

//swap detail image with fullscreen image
function detailActive(el) {
  const detailImgs = document.getElementById('detail_imgs');
  //remove view from all detail images
  NodeList.prototype.forEach = Array.prototype.forEach;
  var children = detailImgs.childNodes;
  children.forEach(function (item) {
    item.classList.remove("view")
  });
  //add view to clicked element
  el.classList.add("view");
  document.getElementById('fullscreen_img').src = el.src;
}

//change grid or list view
function gridView() {
  // Scroll to top of image container
  document.getElementById("imgs").scrollTop = 0;

  const body = document.body;

  if (body.classList.contains('list')) {
    body.classList.replace('list', 'grid');
  } else {
    body.classList.remove('grid');
    body.classList.add('list');
  }
}

function aoToggle() {
  document.getElementById('available_only').classList.toggle('active');
  document.getElementById('ao_cat').classList.toggle('active');
}

function filter(category, el) {
  const imgs = document.getElementById('imgs');
  const availableOnlyButton = document.getElementById('available_only');
  const ao = availableOnlyButton.classList.contains('active');
  const images = document.getElementsByClassName('gallery');
  const navTitle = document.getElementById('nav_title');
  let hasImages = false;

  // Fade out
  imgs.style.opacity = "0";
  document.getElementById('no_art_msg').classList.add('hide');

  if (category === "video") {
    showVideo();
  } else {
    document.body.classList.remove('video');

    for (let i = 0; i < images.length; i++) {
      const img = images[i];
      const id = img.id;
      const artwork = artworks[id];

      let show = false;

      if (category === "all") { //show artworks
        show = ao ? (artwork && artwork.price !== 1111 && artwork.price !== 0) : true;  //check if available only is toggled
      } else {
        if (artwork && artwork.subsection === category) {
          show = ao ? (artwork.price !== 1111 && artwork.price !== 0) : true;  //check if available only is toggled
        }
      }

      //display or hide images 
      img.parentElement.style.display = show ? "inline-block" : "none";
      if (show) { hasImages = true; }
    }

    if (!hasImages) {
      document.getElementById('no_art_msg').classList.remove('hide');
    }
  }

  // Update active category buttons
  const catLists = document.querySelectorAll('.cat-list .cat');
  for (let i = 0; i < catLists.length; i++) {
    const catEl = catLists[i];
    catEl.classList.toggle("active", catEl.dataset.cat == category);
  }

  // Fade in
  imgs.style.opacity = "1";

  if (el) {
    if (navTitle && (category != 'all')) {
      navTitle.innerHTML = el.innerHTML;
      navTitle.classList.add('open');
    } else {
      navTitle.innerHTML = "";
      navTitle.classList.remove('open');
    }
    el.parentElement.classList.remove('open'); //close category menu
  }

  document.body.scrollTo(0, 0);
  imgs.scrollTo(0,0);

  return category;
}

function displayImages(type, n) { //n is max number of images
  var folder = "/imgs/" + type;
  var imgHtml = "";

  for (var i = 0; i < n; i++) {
    if (typeof artworks[i] === 'undefined' || artworks[i] === null) { break; }
    else {
      var file = artworks[i].file;
      if (file != undefined && file != "" && artworks[i].section == type) {
        imgHtml += "<div class='gallery_img fs-link'  onclick='fullscreenViewOpen(this.firstChild)'><img srcset='" + folder + "/500px/" + file + " 500w, "
          + folder + "/1000px/" + file + " 1000w, "
          + folder + "/" + file + " 1700w'"
          + "alt='" + artworks[i].title + "' "
          + "src='" + folder + "/" + file + "' id='" + i + "' class='gallery '";
        if (i < 3) { imgHtml += " loading='eager' " } else { imgHtml += " loading='lazy' " }
        imgHtml += " onload='fadeIn(this)' onclick='fullscreenViewOpen(this)'></div>";
      }
    }
  }
  document.getElementById("imgs").innerHTML += imgHtml;
}

function showVideo() {
  document.body.classList.add('video');
  if (document.body.classList.contains('list')) {
    document.body.classList.remove('list');
    document.body.classList.add('grid');
  }
}

//custom cursor hover animation
  function cursorHover() {
    $('#cursor').addClass('hover');
  }
  function endCursorHover() {
    $('#cursor').removeClass('hover');
  }

//interval id
var interval;

function runPreloader() {
    var imgs = Array.prototype.slice.call(document.images);
    var totalImages = imgs.length;
    var totalToLoad = Math.min(totalImages, 5);
    var counter = 0;
    var pChange = totalToLoad > 0 ? 100 / totalToLoad : 100;
    var splash = document.getElementById('splash');
    var percent = document.getElementById('percent');
    var section = document.getElementById('imgs');
    if (!splash || !percent) return;

    function incrementCounter() {
        counter++;
        var pct = Math.min(100, Math.ceil(counter * pChange));
        percent.innerHTML = pct;
        if (counter >= totalToLoad) {
            splash.classList.add('loaded');
            section.classList.add('slide-left');
        }
    }
    function onImgLoad() {
        incrementCounter();
    }
    if (totalToLoad === 0) {
        percent.innerHTML = 100;
        splash.classList.add('loaded');
        section.classList.add('slide-left');
    } else {
        imgs.forEach(function (img) {
            if (img.complete) {
                incrementCounter();
            } else {
                img.addEventListener('load', onImgLoad, { once: true });
                img.addEventListener('error', onImgLoad, { once: true });
            }
        });
    }
}