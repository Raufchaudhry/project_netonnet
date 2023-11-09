let SlideIndex = 1


let slideInterval;

//Next/Prev slide function
function nextSlide(n) {
    showSlide(SlideIndex += n)
}

//Current slide checker
function currentSlide(n) {
    showSlide(SlideIndex = n);
}

//Timer function so its not inbedded inside different function
function startAutoSlide() {
    slideInterval = setInterval(autoSlide, 5000); //5 second timer between auto slide
}

//Automatic Slider
function autoSlide() {
    let i;
    let slider = document.getElementsByClassName("mySlider");
    let dots = document.getElementsByClassName("Slider_Dots");
    for (i = 0; i < slider.length; i++) {
        slider[i].style.display = "none";
      }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    SlideIndex++;
    if (slider.length < SlideIndex) {SlideIndex = 1};
    slider[SlideIndex-1].style.display = "block";
    dots[SlideIndex-1].className += " active"; 
}

//Manual Slider
function showSlide(n) {
    //Clears Timeout so it doesnt overlap
    clearInterval(slideInterval)
    let i;
    let slider = document.getElementsByClassName("mySlider");
    let dots = document.getElementsByClassName("Slider_Dots");
    if (n > slider.length) {SlideIndex = 1}
    if (n < 1) {SlideIndex = slider.length}
    for (i = 0; i < slider.length; i++) {
        slider[i].style.display = "none";
      }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slider[SlideIndex-1].style.display = "block";
    dots[SlideIndex-1].className += " active"; 
    startAutoSlide()
}

//Start Function
showSlide(SlideIndex)
