/*
Carousel used 
section-shop,
section-information,
section-gifs 
*/
$("#shop-owl").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  navText: [
    "<i class='fas fa-chevron-left'></i>",
    "<i class='fas fa-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
$(".tab-owl").owlCarousel({
  loop: true,
  margin: 5,
  nav: true,
  navText: [
    "<i class='fa fa-arrow-left'></i>",
    "<i class='fa fa-arrow-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  navText: [
    "<i class='fa fa-arrow-left'></i>",
    "<i class='fa fa-arrow-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
/*
LightSlider used 
section-shop
 */
$(document).ready(function () {
  $("#imageGallery").lightSlider({
    gallery: true,
    item: 1,
    loop: true,
    thumbItem: 9,
    slideMargin: 0,
    enableDrag: false,
    currentPagerPosition: "left",
    onSliderLoad: function (el) {
      el.lightGallery({
        selector: "#imageGallery .lslide",
      });
    },
  });
});
$(".burger").click(function () {
  console.log("kjbs");
  $(this).toggleClass("burgeractive");
  $(".header-mobile--menu").toggleClass("active-menu");
});

/*
The code below will dynamically  change
images text in "section-shop "
*/
(() => {
  const jsTextBlock = document.getElementById("js-text-block"),
    jsTextInput = document.getElementById("js-text-value");

  if (jsTextInput.value.length === 0) {
    jsTextBlock.innerHTML = "";
  }

  jsTextInput.addEventListener("input", () => {
    jsTextBlock.setAttribute("data-text", jsTextInput.value);

    jsTextBlock.innerHTML = jsTextBlock.getAttribute("data-text");

    if (jsTextInput.value.length === 0) {
      jsTextBlock.innerHTML = "С Днем Рождения,Мама!Мы тебя любим!";
    }
  });
})();
/*
The code below will dynamically  change
 "popup modal images"  text in "section-shop "
*/
(() => {
  const jsTextBlock = document.getElementById("js-text-block1"),
    jsTextInput = document.getElementById("js-text-value");

  if (jsTextInput.value.length === 0) {
    jsTextBlock.innerHTML = "";
  }

  jsTextInput.addEventListener("input", () => {
    jsTextBlock.setAttribute("data-text", jsTextInput.value);

    jsTextBlock.innerHTML = jsTextBlock.getAttribute("data-text");

    if (jsTextInput.value.length === 0) {
      jsTextBlock.innerHTML = "С Днем Рождения,Мама!Мы тебя любим!";
    }
  });
})();

/*
The code below will show popup in section-shop 
*/
window.onload = function () {
  // add window.onload here and set it euqal to a function
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById("myImg");
  var imgOpen = document.getElementById("myImg-open");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
  imgOpen.onclick = function () {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
  };
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };
}; // close the function

/*
The code below will open "Choose a postcard" part
*/
$(".open-shop").click(function (e) {
  e.preventDefault();
  $(".info").toggleClass("info-active");
});
/*
The code below will open "Comment for images" part
*/
$(".shop-comment--title").click(function (e) {
  $(".shop-comment").toggleClass("checked-section");
});
$("a").click(function (e) {
  e.preventDefault();
});
