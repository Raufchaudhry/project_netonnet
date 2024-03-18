let input_bar = document.getElementById('inputbar')
let show = document.getElementById('products')

// console.log(window.netonnet__product)
let products = window.netonnet__product

function productSearch() {
    let search = input_bar.value.toLowerCase()
    show.innerHTML = ''
    
    for(let i = 0; i < window.netonnet__product.length; i++){
        let prodname = products[i].name.toLowerCase()
        if(prodname.startsWith(search)) {
            show.innerHTML = `<p>${products[i].name}</p>`
        }
        
    }
    
}

