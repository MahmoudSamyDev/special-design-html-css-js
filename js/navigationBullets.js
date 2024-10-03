const allBullets = document.querySelectorAll(".nav-buttlets .bullet ");

allBullets.forEach((bullet) => {
    bullet.addEventListener("click", (e) => {
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: "smooth"
        })
    })
})