let cartMenu = document.getElementById("cartMenu")
let cartBtn = document.getElementById("cartBtn")
let cartContent = document.getElementById('cartContent')
let cartAmont = document.getElementById('cartAmount')
let products = window.netonnet_product
let localproducts = JSON.parse(localStorage.getItem('localProds'))


function openCartMenu() {
    cartMenu.style.display = "flex"
}

function closeCartMenu() {
    cartMenu.style.display = "none"
}

cartBtn.addEventListener("click", openCartMenu);
cartMenu.addEventListener("click", function(event) {
    if (event.target === cartMenu) {
        closeCartMenu()
    } 
});

function deleteProd(index) {
    products[index].qty = 0
    updateCartProds()
}

function addProd(index) {
    products[index].qty += 1
    updateCartProds()
}

function removeProd(index) {
    if (products[index].qty == 1) {
        return
    }
    products[index].qty += -1
    updateCartProds()
}

function updateCartProds() {
    console.log(localproducts)
    let quantity = 0
    let cartContentHTML = ''
    localproducts.forEach((prod, index) => {
    let prodname = prod.description__text;
    let prodpic = prod.image
    let prodid = prod.image__alt;
    let prodqty = prod.qty;
    quantity += prodqty 
    if (prodqty >= 1) {
        cartContentHTML += `
        <div class="prod">
        <img src="${prodpic}" alt="item">
        <div class="itemcolumn">
            <h2 class="name">${prodname}</h2>
            <p>Art Nr: ${prodid}</p>
            <p>Quantity: ${prodqty}</p>
        </div>
        <div class="remove">
            <i class="fa-solid fa-trash" onClick='deleteProd(${index})'></i>
            <div class="row-quantity">
                <button id="quantityRemove" onClick='removeProd(${index})'><i class="fa-solid fa-minus"></i></button>
                <button id="quantityAdd" onClick='addProd(${index})'><i class="fa-solid fa-plus"></i></button>
            </div>
        </div>
    </div>
        `} 
    });

    if (cartContentHTML === '') {
        cartContent.innerHTML = `<h2 id="empty">Kundvagnen är tom</h2>`;
    } else {
        cartContent.innerHTML = cartContentHTML;
        cartAmont.innerHTML = quantity
    }

    // Adjust cartContent styles based on the presence of items
    if (localproducts.some(prod => prod.qty > 0)) {
        cartContent.style.justifyContent = 'start';
        cartContent.style.alignItems = 'start';
        cartAmont.style.display = 'flex'
    } else {
        cartContent.style.justifyContent = 'center';
        cartContent.style.alignItems = 'center';
        cartAmont.style.display = 'none'
    }
}

updateCartProds()