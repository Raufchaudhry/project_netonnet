let myProds = [
    {img:"img/netonnet-png/apple-airpods.png", name:"Förfinad magi.", yellowStars:4, price: 2290, button: "Lägg i kundvagn"},
    {img:"img/netonnet-png/apple-mkeyboard.png", name:"Trådlöst, mekaniskt gamingtangentbord med låg profil", yellowStars:3, price: 229, button: "Lägg i kundvagn"},
    {img:"img/netonnet-png/apple-charger.png", name:"70 W USB-C strömadapter för Apple MacBook", yellowStars:5, price: 499, button: "Lägg i kundvagn"},
    {img:"img/netonnet-png/brother-printer.png", name:"Effektiv monolaserskrivare för hemmakontoret", yellowStars:3, price: 2290, button: "Lägg i kundvagn"},
    {img:"img/netonnet-png/andersson-powerbank.png", name:"Testvinnande powerbank med många laddmöjligheter", yellowStars:2, price: 399, button: "Lägg i kundvagn"},
    {img:"img/netonnet-png/kingston-data.png", name:"64 GB USB 3.2 Gen 1-minne", yellowStars:4, price: 69, button: "Lägg i kundvagn"},
    {img:"img/netonnet-png/apple-20w-usb-charger-power.png", name:"20W USB-C Strömadapter från Apple", yellowStars:5, price: 299, button: "Lägg i kundvagn"},
    {img:"img/netonnet-png/nqkitchen-50-pack.png", name:"50-pack stora bakplåtspapper till din airfryer", yellowStars:3, price: 69, button: "Lägg i kundvagn"},
    {img:"img/netonnet-png/andersson-påse.png", name:"Dammsugarpåsar Andersson A9312", yellowStars:3, price: 99, button: "Lägg i kundvagn"},
    {img:"img/netonnet-png/wireless-headphones.png", name:"True Wireless-hörlurar med laddningsfodral", yellowStars:4, price: 99, button: "Lägg i kundvagn"},
    {img:"img/netonnet-png/jbl-headphones.png", name:"Trådlösa on-ear-hörlurar med aktiv brusreducering", yellowStars:3, price: 700, button: "Lägg i kundvagn"},
    {img:"img/netonnet-png/electrolux-s-bag.png", name:"Dammsugarpåsar E210S med extra hygienisk filtrering", yellowStars:2, price: 99, button: "Lägg i kundvagn"},
    
    
  ]
  
  for(i=0;i<myProds.length;i++){
    const grayStars =5 - myProds[i].yellowStars;
    document.getElementById("main-container").innerHTML +=
    `<div class="card-container">
    <img class="pic" src= ${myProds[i].img}>
    <a href="#" class="product-link">
    <h3> ${myProds[i].name}</h3>
    </a>
    
    <span class="stars">
    <span style="color:#FFA500;">${'&#9733;'.repeat(myProds[i].yellowStars)}</span>
    <span style="color:gray;">${'&#9733;'.repeat(grayStars)}</span>
</span>

   
    <p class="price">${myProds[i].price}:-</p>
    <a class='button' href="#">
    <button id='button'>${myProds[i].button}</button></a></div>
    `
  }
  document.querySelectorAll('.product-link').forEach(link => {
    link.addEventListener('click', function (event) {
      // Prevent the default behavior of the link
      event.preventDefault();
  
      // You can add additional logic here if needed
  
      // For example, you can log a message indicating that the card was clicked
      console.log('Product card clicked!');
    });
  });
  
  const container = document.getElementById('main-container');
  
  // Function to handle scrolling
  function scrollContainer(direction) {
    const cardWidth = 260; // Adjust this value based on your card width
    const cardsToMove = 4; // Number of cards to move at a time
    const scrollAmount = direction === 'left' ? -cardWidth * cardsToMove : cardWidth * cardsToMove;
  
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
  
  // Function to handle arrow visibility based on scroll position and window width
  function handleScroll() {
    const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
    // Check if the window width is greater than 760px
    if (windowWidth > 760) {
      // Check if the first card is in view
      const isFirstCardInView = container.scrollLeft === 0;
  
      // Check if the last card is in view
      const isLastCardInView = container.scrollLeft + container.clientWidth === container.scrollWidth;
  
      // Hide or show arrows based on the scroll position
      document.querySelector('.arrow.left').style.display = isFirstCardInView ? 'none' : 'block';
      document.querySelector('.arrow.right').style.display = isLastCardInView ? 'none' : 'block';
    } else {
      // If window width is 760px or smaller, hide both arrows
      document.querySelector('.arrow.left').style.display = 'none';
      document.querySelector('.arrow.right').style.display = 'none';
    }
  }
  
  // Add event listeners to the arrow buttons
  document.querySelector('.arrow.left').addEventListener('click', function () {
    scrollContainer('left');
  });
  
  document.querySelector('.arrow.right').addEventListener('click', function () {
    scrollContainer('right');
  });
  
  // Add scroll event listener to handle arrow visibility
  container.addEventListener('scroll', handleScroll);
  
  // Add resize event listener to handle arrow visibility on window resize
  window.addEventListener('resize', handleScroll);
  
  // Call handleScroll initially to set initial arrow visibility
  handleScroll();
  document.addEventListener("DOMContentLoaded", function() {
    // Get the "Ändra" link element
    var andraLink = document.getElementById("andraa");

    // Add a click event listener to the "Ändra" link
    andraLink.addEventListener("click", function(event) {
        // Prevent the default behavior of the anchor tag
        event.preventDefault();
    });
});
