document.addEventListener("DOMContentLoaded", function () {
  const reviews = document.querySelectorAll(".review");
  let currentReviewIndex = 0;

  function showReview(index) {
      reviews[index].style.display = "flex";
      setTimeout(function () {
          reviews[index].style.transform = "translateX(0)";
          reviews[index].style.opacity = 1;
      }, 100);
  }

  function hideReview(index) {
      reviews[index].style.transform = "translateX(-50%)";
      reviews[index].style.opacity = 0;
      setTimeout(function () {
          reviews[index].style.display = "none";
      }, 1000);
  }

  function nextReview() {
      hideReview(currentReviewIndex);
      currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
      showReview(currentReviewIndex);
  }

  showReview(currentReviewIndex);

  setInterval(nextReview, 5000);
});

let i=0;
function countAnimation(){
    document.getElementById("total").innerHTML=i+'+';
    if (i == 50){
      clearInterval(interval);
    }
    i++
}

const observer = new IntersectionObserver(handleIntersection, {
  root: null,
  rootMargin: "0px",
  threshold: 1,
});
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
        const interval = setInterval(countAnimation, 5);
        observer.unobserve(entry.target);
      }
  });
}

const targetElement = document.getElementById("dashboard-item");
observer.observe(targetElement);




var touchStartX = 0;
var touchEndX = 0;

document.getElementsByClassName("event-item")[0].addEventListener("touchstart", function(e) {
  touchStartX = e.changedTouches[0].clientX;
});

document.getElementsByClassName("event-item")[0].addEventListener("touchend", function(e) {
  touchEndX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  var threshold = 10;

  if (touchStartX - touchEndX > threshold) {
    changeEventImg(slideIndex + 1);
  } else if (touchEndX - touchStartX > threshold) {
    changeEventImg(slideIndex - 1);
  }
}


function nextEvent(n) {
    changeEventImg(slideIndex += n);
}

// Auto Change Image
function autoChangeEvent() {
    slideIndex++;
    changeEventImg(slideIndex);
    setTimeout(autoChangeEvent, 10000); // Change image after every 10 seconds
}

// Change image
function changeEventImg(n) {
  var i;
  var slides = document.getElementsByClassName("event-item");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }

  // Hide every other image
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  //  Display the particular image
  slides[slideIndex-1].style.display = "block";  

  document.getElementById('event-counter').innerHTML=slideIndex+" out of "+slides.length
}

// Main
var slideIndex = 1;

changeEventImg(slideIndex);
autoChangeEvent();