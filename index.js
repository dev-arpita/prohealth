
const mobileMenu = document.getElementById("mobile-menu")
document.getElementById("menu-btn").addEventListener("click", ()=> {
  mobileMenu.style.display = ("block")
})

document.getElementById("close-btn").addEventListener("click", ()=> {
  mobileMenu.style.display = ("none")
})
