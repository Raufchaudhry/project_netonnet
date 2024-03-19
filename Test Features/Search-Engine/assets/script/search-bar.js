let input_bar = document.getElementById('inputbar');
let show = document.getElementById('products');

let products = window.netonnet__product;

function productSearch() {
    let search = input_bar.value.trim().toLowerCase(); // Trim whitespace and convert to lowercase
    show.innerHTML = ''; // Clear previous search results
    
    if (search === '') {
        show.style.display = 'none'; // Hide products if search bar is empty
        return;
    }
    
    let found = false; // Flag to check if any products are found
    
    for (let i = 0; i < products.length; i++) {
        let prodname = products[i].name.toLowerCase();
        if (prodname.includes(search)) { // Use includes() to match substrings
            found = true;
            show.style.display = 'block';
            let productItem = document.createElement('p');
            productItem.textContent = products[i].name;
            show.appendChild(productItem); // Append each matching product
        }
    }
    
    if (!found) {
        show.style.display = 'none'; // Hide products if no matches found
    }
}