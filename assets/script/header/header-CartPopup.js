let cartMenu = document.getElementById("cartMenu")
let cartBtn = document.getElementById("cartBtn")

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
window.addEventListener("resize", function() {
    if (window.innerWidth < 1200) {
        closeCartMenu()
    }
})

