let productName = document.getElementById('productName')
let productRating = document.getElementById('ranking')
let productNr = document.getElementById('productArt')
let productPrice = document.getElementById('productPrice')
let productImage = document.getElementById('productImage')
let productStar = document.getElementById('star')
let productDots = document.getElementById('productDots')
let allProducts = window.netonnet_product

function findIndex(array, index) {
    let foundProd = array.map(element => element.image__alt)
    return foundProd.indexOf(index)
}

function productLoad() {
    let productID = JSON.parse(localStorage.getItem('productId'))
    let index = findIndex(allProducts, productID)

    console.log(index)

    productName.innerHTML = allProducts[index].description__text
    productRating.innerHTML = allProducts[index].rating__stars
    productNr.innerHTML = allProducts[index].image__alt
    productImage.src = allProducts[index].image
    productPrice.innerHTML = allProducts[index].price
    productDots.innerHTML = ''
    productDots.innerHTML += allProducts[index].description__bulet.foreach(element => {
        console.log('working')
        productDots.innerHTML = element
    })
}

productLoad()