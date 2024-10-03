// Get options bullets
let options = document.querySelectorAll(".bullets-show span");
let navBullets = document.querySelector(".nav-buttlets");
let localOption = localStorage.getItem("navBarBulletOption");

if (localOption === "hide") {
    navBullets.style.display = "none";
} else {
    navBullets.style.display = "block";
}

options.forEach((bullet) => {
    bullet.addEventListener("click", (e) => {
        if (e.target.dataset.bulletshow === "hide") {
            localStorage.setItem("navBarBulletOption", "hide")
            navBullets.style.display = "none"
        } else {
            navBullets.style.display = "block"
            localStorage.setItem("navBarBulletOption", "show")
        }
    })
})