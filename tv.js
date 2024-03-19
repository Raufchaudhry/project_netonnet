
let card = 0;
function controller(x){
   card = card + x;
   slideshow(card);
}
slideshow(card);
function slideshow(num){
  let slides = document.getElementsByClassName("mini-slide-inner");
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
  }
  const netonnet__product =  [
    {
        image: "/product/tv/1023957.webp",
        image__alt: "1023957",
       description__text: "55 Smart 4K QLED-TV med Android 11 & HDR",
         description__bulet: ["4K Ultra HD-upplösning","Omslutande ljud med Dolby Atmos","Android™ 11 SmartTV"],
       rating__stars: 4,
       price: 3599,
       category:"QLED",
       available:"internet",
       brand:"anderson",
       size:55,
      
       
    },

    {
        image: "/product/tv/1029577.webp",
        image__alt: "1029577",
        description__text: "70 4K UHD TV med levande färger och djupa kontraster",
        description__bulet: ["Uppskalar innehållet till 4K", "Tizen OS Smart TV","Dynamisk kontrastförstärkare"],
        rating__stars: 4,
        price: 8000,
        price__sale: 7490,
        category:"UHD",
        available:"internet",
        brand:"toshiba",
        size:70,
    },

    {
        image: "/product/tv/lg-1029254.webp",
        image__alt: "1029254",
        description__text: "77 4K OLED TV glapp mellan TV och vägg",
        description__bulet: ["AI-förbättrad bild & ljud", "Perfekt för gaming och sport","Infällt väggfäste"],
        rating__stars: 4,
        price: 6990,
        category:"OLED",
        available:"Borås",
        brand:"anderson",
        size:77,

    },
    
    {
        image: "/product/tv/philips-1029891.webp",
        image__alt: "1029891",
        description__text: "58 4K OLED Ambilight-TV med otrolig ljusstyrka & 120 Hz",
        description__bulet: ["3-sidig Ambilight", "Perfekt för gaming","4K UHD-upplösning"],
        rating__stars: 4,
        price: 7990,
        available:"Borås",
        brand:"philips",
        size:58,
        
    },

    {
        image: "/product/tv/philips-1029899.webp",
        image__alt: "1029899",
        description__text: "65 4K LED Smart-TV med ultraskarp bild & tunn design",
        description__bulet: ["Philips Smart-TV", "Tunn, kantlös design","Skarp bild med Dolby Vision"],
        rating__stars: 4,
        price:7990,
        tag: "Sänkt lagerpris",
        category:"LED",
        available:"Falun",
        brand:"philips",
        size:65,
    },

    {
        image: "/product/tv/samsung-1024587 .webp",
        image__alt: "1024587",
        description__text: "70 4K UHD QLED Android™ smartTV ",
        description__bulet: ["Perfekt för gaming", "Quantum Dot-teknik","Ok Google & Google Play"],
        rating__stars: 4,
        price:8990,
        tag: "Sänkt lagerpris",
        category:"QLED",
        available:"Falun",
        brand:"samsung",
        size:70,
        
        
    },

    {
        image: "/product/tv/samsung-1027102.webp",
        image__alt: "1027102",
        description__text: "85 4K UHD Smart-TV med Crystal-display",
        description__bulet: [
        "4K UHD-upplösning", "Tizen OS Smart TV","HDR 10+, Dolby Digital Plus"],
        rating__stars: 4,
        price: 7990,
        tag: "Sänkt lagerpris",
        category:"UHD",
        available:"internet",
        brand:"samsung",
        size:85,
    },

    {
        image: "/product/tv/samsung-1029565.webp",
        image__alt: "1029565",
        description__text: "65 4K Crystal UHD TV med tunn profil & levande färger",
        description__bulet: [
        "Uppskalar innehållet till 4K", "Dynamisk kontrastförstärkare","Ultratunn profil"],
        rating__stars: 4,
        price:8900,
        tag: "Sänkt lagerpris",
        category:"UHD",
        available:"Falun",
        brand:"samsung",
        size:65,
    },
   
    {
        image: "/product/tv/skantic-1023954.webp",
        image__alt: "1023954",
        description__text: "Prisvärd 50 Ultra UHD-TV med HDR 10 & Dolby Vision",
        description__bulet: ["Ultra HD-upplösning (3840x2160)", "3 x HDMI & 2 x USB-portar","Dolby Vision & Dolby Atmos"],
        rating__stars: 4,
        price:5000,
        tag: "Sänkt lagerpris",
        category:"UHD",
        available:"Falun",
        brand:"samsung",
        size:50,
    },

    {
        image: "/product/tv/sony-1031122.webp",
        image__alt: "1031122",
        description__text: "32 Smart LED-TV med High Dynamic Range och Android",
        description__bulet: ["Android Smart-TV", "HD-klar (1366 x 768)","Live Colour-teknik"],
        rating__stars: 4,
        price: 4400,
        tag: "Sänkt lagerpris",
        category:"LED",
        available:"Göteborg Hisings Backa",
        brand:"samsung",
        size:32,
    },

    {
        image: "/product/tv/toshiba-1028783.webp",
        image__alt: "1028783",
        description__text: "40 Smart LED-TV med HD-upplösning & inbyggd Chromecast",
        description__bulet: ["Bioljud med Dolby Audio", "3 x HDMI & 2 x USB","Inbyggd Google Assistant"],
        rating__stars: 4,
        price: 5900,
        tag: "Sänkt lagerpris",
        category:"LED",
        available:"Göteborg Hisings Backa",
        brand:"toshiba",
        size:40,
    },

    {
        image: "/product/tv/toshiba-1028783.webp",
        image__alt: "1028784",
        description__text: "44Smart LED-TV med inbyggd Chromecast & FHD-upplösning",
        description__bulet: ["43 LED Smart-TV ", "Bioljud med Dolby Audio","Bättre bild med HDR"],
        rating__stars: 4,
        price: 5000,
        tag: "Sänkt lagerpris",
        category:"LED",
        available:"Göteborg Hisings Backa",
        brand:"toshiba",
        size:44,
    },



];
function showProds(products){
for(i=0;i<products.length;i++){
    document.getElementById("main--content").innerHTML+= 
    
    `<div class="card">
    <div class = "card-inner">
    <div class= "product-image">
    <img src="${products[i].image}" alt="${products[i].image__alt}"/>
    </div>
    <div class = "text-holder1">
    <h4>${products[i].description__text}<h4>
    <h3 id="${[i]}-stars"></h3>  
    <div class="discription"><ul> 
        <li class="list">${products[i].description__bulet[0]}</li>
        <li class="list">${products[i].description__bulet[1]}</li>
        <li class="list">${products[i].description__bulet[2]}</li>
    </ul>
    </div>
       
        <h3>${products[i].price}</h3>
       <span></span>
       
        
        <div class="add-items">
       <button class="button">Lag i cart</button>
     
       </div>
       </div>
           </div>`
      for (j=0;j<5;j++){
        if (j < netonnet__product[i].rating__stars){
             document.getElementById(`${[i]}-stars`).innerHTML += `<i style="color:orange;" class="fa-solid fa-star"></i>`
        }
        else{
            document.getElementById(`${[i]}-stars`).innerHTML += `<i style="color:grey;" class="fa-solid fa-star"></i>`
        }
        
      }     
}


}
showProds(netonnet__product)
// check box function
let allFlagCheckButts = document.getElementsByClassName('check-but-lager') 
allFlagCheckButts = [...allFlagCheckButts]
for(i=0;i<allFlagCheckButts.length;i++){
    allFlagCheckButts[i].addEventListener('change',(e)=>{
        if(e.target.checked===true){
console.log(e.target.parentElement.textContent)
        }
    })
}
// drop down function
function sortAZ(){
    let val = document.getElementById('page-sort-dropdown').value
    document.getElementById('page-sort-dropdown').innerHTML=""
    if (val==="alphabetical"){
        netonnet__product.sort((a,b) => {
        if(a.brand > b.brand){
            return 1;
        }
        return 0;})
    }

    showProds()
    }
   

// drop down function end

// toggle hidden function
let hidden=true
function toggleHiddenText() {
  
    let hiddenText = document.getElementById("hiddenText");
  
    if (hidden===true) {
      
        hiddenText.style.display = "inline"; // Show the hidden text
    } else {
        hiddenText.style.display = "none"; // Hide the hidden text
    }
    hidden=!hidden
}

//toggle hidden finish
//code till filter category
let checkedCats=[]

    function valChecked(num, filt){

            if (checkedCats.length===0){

                    document.getElementById('main--content').innerHTML="";
            }

            
        
            let val=document.getElementById(`check-btn${num}`).value

        

            if (document.getElementById(`check-btn${num}`).checked){

                checkedCats.push(val)

                let seasonTv =netonnet__product.filter(tv => {
                    console.log(tv)
                    return filt==="brand"? tv.brand === val:filt==="cat"? tv.category === val:filt=="available"? tv.available==val:null;
                   
                    });
                    console.log(seasonTv);
                    
                    seasonTv.forEach((tv) => {
                       //card to filter using same card from showprod()
                        document.getElementById('main--content').innerHTML+=`
                        <div class="card ${val}"> 
                        <div class = "card-inner">
                        <div class= "product-image">
                        <img src="${tv.image}" alt="${tv.image__alt}"/>
                        </div>
                        <div class = "text-holder1">
                        <h4>${tv.description__text}<h4>
                        <h3 id="${[i]}-stars"></h3>  
                        <div class="discription">
                        <ul> 
                            <li class="list">${tv.description__bulet[0]}</li>
                            <li class="list">${tv.description__bulet[1]}</li>
                            <li class="list">${tv.description__bulet[2]}</li>
                        </ul>
                        </div>
                           
                            <h3>${tv.price}</h3>
                           <span></span>
                           
                            
                            <div class="add-items">
                           <button class="button">Lag i cart</button>
                         
                           </div>
                           </div>
                           </div>
                               </div>
                               `
                       
                           
                    });}


                
            else {
                let allCatProds = document.getElementsByClassName(val)
                allCatProds = [...allCatProds]
                allCatProds.forEach(prod=>prod.style.display='none')
               
                let catIndex; 
                checkedCats.forEach((cat,i)=>{
                    if (cat===val){
                        catIndex = i
                    }
                })

                checkedCats.splice(catIndex,1)
            }
        }



 // code to price range input

 const productsContainer = document.getElementById('main--content');
 const priceRange = document.getElementById('priceRange');
 const priceValue = document.getElementById('priceValue');
 
 // Display initial price value
 priceValue.textContent = `${priceRange.value} kr`;
 
 // Update price value when slider changes
 priceRange.addEventListener('change', function() {
   const selectedPrice = parseInt(this.value);
   priceValue.textContent = `${selectedPrice} kr`;
   console.log(selectedPrice)
   filterPriceProducts(selectedPrice);
 });
 
 // Function to filter and display products based on price
 function filterPriceProducts(selectedPrice) {
   
   productsContainer.innerHTML = ''; // Clear previous products
 
   let filteredRangeProds = netonnet__product.filter(product => {return product.price <= selectedPrice} )
   
 
   
   filteredRangeProds.sort(function(a, b){return a.price-b.price});
 
     showProds(filteredRangeProds)
   
 }
    // code to price range input ends
    
// sizerange code start

 const sizeContainer = document.getElementById('main--content');
 const sizeRange = document.getElementById('sizeRange');
 const sizeValue = document.getElementById('sizeValue');

// // Display initial price value
sizeValue.textContent = `${sizeRange.value}`;

 // Update price value when slider changes
sizeRange.addEventListener('change', function() {
   const selectedSize = parseInt(this.value);
   sizeValue.textContent = `${selectedSize}`;
  filterProducts(selectedSize);
 });

 // Function to filter and display products based on size
 function filterProducts(selectedSize) {
   productsContainer.innerHTML = ''; // Clear previous products

  let filteredRangeProds = netonnet__product.filter(product => {return product.size <= selectedSize} )
  

  
  filteredRangeProds.sort(function(a, b){return a.size-b.size});
  
   showProds(filteredRangeProds)
  
 }
 // sizerange code end
 
