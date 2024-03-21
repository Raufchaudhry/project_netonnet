let cartMenu = document.getElementById("cartMenu")
let cartBtn = document.getElementById("cartBtn")
let cartContent = document.getElementById('cartContent')
let products = window.netonnet_product

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


function updateCartProds() {
    let cartContentHTML = ''
    products.forEach(prod => {
    let prodname = prod.description__text;
    let prodpic = prod.image
    let prodid = prod.image__alt;
    let prodqty = prod.qty;
    if (prodqty >= 1) {
        console.log(prodqty)

        cartContentHTML += `
        <div class="prod">
        <img src="${prodpic}" alt="item">
        <div class="itemcolumn">
            <h2 class="name">${prodname}</h2>
            <p>Art Nr: ${prodid}</p>
            <p>Quantity: ${prodqty}</p>
        </div>
        <div class="remove">
            <i class="fa-solid fa-trash"></i>
        </div>
    </div>
        `} 
    });

    if (cartContentHTML === '') {
        cartContent.innerHTML = `<h2 id="empty">Kundvagnen är tom</h2>`;
    } else {
        cartContent.innerHTML = cartContentHTML;
    }

    // Adjust cartContent styles based on the presence of items
    if (products.some(prod => prod.qty > 0)) {
        cartContent.style.justifyContent = 'start';
        cartContent.style.alignItems = 'start';
    } else {
        cartContent.style.justifyContent = 'center';
        cartContent.style.alignItems = 'center';
    }
}

updateCartProds()