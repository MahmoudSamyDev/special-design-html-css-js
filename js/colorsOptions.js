// [2] Switch colors option
let mainColor = localStorage.getItem("color_option");

if (mainColor) {
    document.documentElement.style.setProperty('--main-color', mainColor);

    // Remove active class element from all colors list item
    document.querySelectorAll(".colors-list li").forEach((ele) => {
        ele.classList.remove("active")
        // Adding active class in data-color === localStorage item
        
        if (ele.dataset.color === mainColor) {
            ele.classList.add("active")
        }
    })
}

const colorsLi = document.querySelectorAll(".colors-list li");

colorsLi.forEach((color) => {
    color.addEventListener("click", (e) => {
        // Set color on root
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
        // Set the color on local storage
        localStorage.setItem("color_option", e.target.dataset.color);
        // Remove active class from all childrens
        e.target.parentElement.querySelectorAll(".active").forEach((ele) => {
            ele.classList.remove("active")
        })
        // Add active class on target
        e.target.classList.add("active")
    })
})