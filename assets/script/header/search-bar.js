let input_bar = document.getElementById('inputbar');
let show = document.getElementById('searched-products');

let productss = window.netonnet_product;

function productSearch() {
    let search = input_bar.value.trim().toLowerCase(); // Trim whitespace and convert to lowercase
    show.innerHTML = ''; // Clear previous search results
    console.log(productss)
    
    if (search === '') {
        show.style.display = 'none'; // Hide products if search bar is empty
        return;
    }
    
    let found = false; // Flag to check if any products are found
    
    for (let i = 0; i < productss.length; i++) {
        let prodname = productss[i].description__text.toLowerCase();
        if (prodname.includes(search)) { // Use includes() to match substrings
            found = true;
            show.style.display = 'flex';
            let productItem = document.createElement('p');
            productItem.textContent = productss[i].description__text;
            productItem.addEventListener('click', function() {
                alert(productss[i].image__alt)
            })
            show.appendChild(productItem); // Append each matching product
        }
    }
    
    if (!found) {
        show.style.display = 'none'; // Hide products if no matches found
    }
}