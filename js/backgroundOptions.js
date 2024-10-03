// Get the landing section
let landingPage = document.querySelector(".landing-page");
let backgroundRandomizeOptionStorage = localStorage.getItem("storage_option") ? localStorage.getItem("storage_option") : "yes";
let imgArr = [];
// Initialize a variable to hold the interval ID
let backgroundInterval;

// Identify images array
for (let i = 1; i < 6; i++) {
    imgArr.push(`0${i}.jpg`);
}

if (backgroundRandomizeOptionStorage === "yes") {
    changeBackgroundRandomly();
} else {
    clearInterval(backgroundInterval);
}

// Function to change the background randomly
function changeBackgroundRandomly() {
    if (backgroundInterval) {
        clearInterval(backgroundInterval);
    }

    // Change background randomly every 10 seconds
    backgroundInterval = setInterval(() => {
        let random = Math.floor(Math.random() * imgArr.length);
        landingPage.style.backgroundImage = `url("../imgs/${imgArr[random]}")`;
    }, 10000);
}

// [3] Switch background options
const randomBackgroundOptions = document.querySelectorAll(".option-box span");
randomBackgroundOptions.forEach((span) => {
    span.addEventListener("click", (e) => {
        // Remove active classes for all spans
        e.target.parentElement.querySelectorAll(".active").forEach((element) => {
            element.classList.remove("active");
        });

        // Add active class on the clicked option
        e.target.classList.add("active");

        // Set optionSelected to the clicked background option
        backgroundRandomizeOptionStorage = e.target.dataset.background;

        // If "yes" is selected, start changing the background randomly
        if (backgroundRandomizeOptionStorage === "yes") {
            changeBackgroundRandomly();
            localStorage.setItem("storage_option", "yes");
        } else {
            clearInterval(backgroundInterval)
            localStorage.setItem("storage_option", "no");
        }
    });
});
