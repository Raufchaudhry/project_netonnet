let productName = document.getElementById('productName')
let productRating = document.getElementById('ranking')
let productNr = document.getElementById('productArt')
let productPrice = document.getElementById('productPrice')
let productImage = document.getElementById('productImage')
let productStar = document.getElementById('star')
let productDots = document.getElementById('productDots')
let allProducts = window.netonnet_product

function productLoad() {
    let productID = JSON.parse(localStorage.getItem('productId'))
    let foundProd = allProducts.find((element) => element = productID)

    console.log(foundProd)

    productName.innerHTML = foundProd.description__text
    productRating.innerHTML = foundProd.rating__stars
    productNr.innerHTML = foundProd.image__alt
    productImage.src = foundProd.image
    productPrice.innerHTML = foundProd.price
}

productLoad()