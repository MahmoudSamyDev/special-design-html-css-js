let toggleBtn = document.querySelector(".toggle-menu");
let links = document.querySelector(".links");

toggleBtn.onclick = function() {
    this.classList.toggle("menu-active")
    links.classList.toggle("open")
}

document.addEventListener("click", (e) => {
    e.stopPropagation()
    if (e.target !== toggleBtn && e.target !== links) {
        toggleBtn.classList.remove("menu-active")
        links.classList.remove("open")
    }
})

links.onclick = function(e) {
    e.stopPropagation()
}