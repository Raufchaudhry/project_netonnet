
function clickLeft() {
  let container = document.querySelector('#card-container');
  container.scrollTo({
      left:container.scrollLeft - 200,
      top: 0,
      behavior: "smooth"
  });
}

function clickRight() {
  let container = document.querySelector('#card-container');
  container.scrollTo({
      left:container.scrollLeft + 200,
      top: 0,
      behavior: "smooth"
  });
}
  
  /*let card = 0;
  function controller(x){
     card = card + x;
     slideshow(card);
  }
  slideshow(card);
  function slideshow(num){
    let slides = document.getElementsByClassName("slider");
    if(num == slides.length){
      card = 0;
      num = 0;
    }
    if(num < 0){
      card = slides.length-1;
      num = slides.length-1;
    }
    for(let y of slides){
  y.style.display = "none";
    }
    slides[num].style.display = "block";
    }*/
    