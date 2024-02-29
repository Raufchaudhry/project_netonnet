
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
  
  const netonnet__product = [
    {
        image: "/product/tv/1023957.webp",
        image__alt: "1023957",
       description__text: "55 Smart 4K QLED-TV med Android 11 & HDR",
         description__bulet: ["4K Ultra HD-upplösning","Omslutande ljud med Dolby Atmos","Android™ 11 SmartTV"],
       rating__stars: 4,
       price: "5990 kr:-",
      
       
    },

    {
        image: "/product/tv/1029577.webp",
        image__alt: "1029577",
        description__text: "70 4K UHD TV med levande färger och djupa kontraster",
        description__bulet: ["Uppskalar innehållet till 4K", "Tizen OS Smart TV","Dynamisk kontrastförstärkare"],
        rating__stars: 4,
        price: "18000 kr:-",
        price__sale: 7490,
    },

    {
        image: "/product/tv/lg-1029254.webp",
        image__alt: "1029254",
        description__text: "77 4K OLED TV glapp mellan TV och vägg",
        description__bulet: ["AI-förbättrad bild & ljud", "Perfekt för gaming och sport","Infällt väggfäste"],
        rating__stars: 4,
        price: "16990kr:-",

    },
    
    {
        image: "/product/tv/philips-1029891.webp",
        image__alt: "1029891",
        description__text: "55 4K OLED Ambilight-TV med otrolig ljusstyrka & 120 Hz",
        description__bulet: ["3-sidig Ambilight", "Perfekt för gaming","4K UHD-upplösning"],
        rating__stars: 4,
        price: "17990kr:-",
    },

    {
        image: "/product/tv/philips-1029899.webp",
        image__alt: "1029899",
        description__text: "65 4K LED Smart-TV med ultraskarp bild & tunn design",
        description__bulet: ["Philips Smart-TV", "Tunn, kantlös design","Skarp bild med Dolby Vision"],
        rating__stars: 4,
        price: "7990kr:-",
        tag: "Sänkt lagerpris"
    },

    {
        image: "/product/tv/samsung-1024587 .webp",
        image__alt: "1024587",
        description__text: "70 4K UHD QLED Android™ smartTV ",
        description__bulet: ["Perfekt för gaming", "Quantum Dot-teknik","Ok Google & Google Play"],
        rating__stars: 4,
        price: "8990kr:-",
        tag: "Sänkt lagerpris"
    },

    {
        image: "/product/tv/samsung-1027102.webp",
        image__alt: "1027102",
        description__text: "85 4K UHD Smart-TV med Crystal-display",
        description__bulet: [
        "4K UHD-upplösning", "Tizen OS Smart TV","HDR 10+, Dolby Digital Plus"],
        rating__stars: 4,
        price: "17990kr:-",
        tag: "Sänkt lagerpris"
    },

    {
        image: "/product/tv/samsung-1029565.webp",
        image__alt: "1029565",
        description__text: "65 4K Crystal UHD TV med tunn profil & levande färger",
        description__bulet: [
        "Uppskalar innehållet till 4K", "Dynamisk kontrastförstärkare","Ultratunn profil"],
        rating__stars: 4,
        price: "8900kr:-",
        tag: "Sänkt lagerpris"
    },
   
    {
        image: "/product/tv/skantic-1023954.webp",
        image__alt: "1023954",
        description__text: "Prisvärd 55 Ultra HD-TV med HDR 10 & Dolby Vision",
        description__bulet: ["Ultra HD-upplösning (3840x2160)", "3 x HDMI & 2 x USB-portar","Dolby Vision & Dolby Atmos"],
        rating__stars: 4,
        price: "5000kr:-",
        tag: "Sänkt lagerpris"
    },

    {
        image: "/product/tv/sony-1031122.webp",
        image__alt: "1031122",
        description__text: "32 Smart LED-TV med High Dynamic Range och Android",
        description__bulet: ["Android Smart-TV", "HD-klar (1366 x 768)","Live Colour-teknik"],
        rating__stars: 4,
        price: "4490kr:-",
        tag: "Sänkt lagerpris"
    },

    {
        image: "/product/tv/toshiba-1028783.webp",
        image__alt: "1028783",
        description__text: "32 Smart LED-TV med HD-upplösning & inbyggd Chromecast",
        description__bulet: ["Bioljud med Dolby Audio", "3 x HDMI & 2 x USB","Inbyggd Google Assistant"],
        rating__stars: 4,
        price: "2990kr:-",
        tag: "Sänkt lagerpris"
    },

    {
        image: "/product/tv/toshiba-1028783.webp",
        image__alt: "1028784",
        description__text: "43Smart LED-TV med inbyggd Chromecast & FHD-upplösning",
        description__bulet: ["43 LED Smart-TV ", "Bioljud med Dolby Audio","Bättre bild med HDR"],
        rating__stars: 4,
        price: "4290kr:-",
        tag: "Sänkt lagerpris"
    },



];
function showProds(){
for(i=0;i<netonnet__product.length;i++){
    document.getElementById("main--content").innerHTML+= 
    
    `<div class="card">
    <div class = "card-inner">
    <div class= "product-image">
    <img src="${netonnet__product[i].image}" alt="${netonnet__product[i].image__alt}"/>
    </div>
    <div class = "text-holder1">
    <h4>${netonnet__product[i].description__text}<h4>
    <h3 id="${[i]}-stars"></h3>  
    <div class="discription"><ul> 
        <li class="list">${netonnet__product[i].description__bulet[0]}</li>
        <li class="list">${netonnet__product[i].description__bulet[1]}</li>
        <li class="list">${netonnet__product[i].description__bulet[2]}</li>
    </ul>
    </div>
       
        <h3>${netonnet__product[i].price}</h3>
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
showProds()
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
/* drop down function
function sortAZ(){
    document.getElementById('page-sort-dropdown').innerHTML=""
    page-sort-dropdown.sort(a,b) => {
        if(a.brand > b.brand){
            return 1;
        }
        return 0;})
    }
}
*/
