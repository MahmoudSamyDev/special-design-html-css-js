// Create popUp witht the image
let ourGallary = document.querySelectorAll(".gallery img");
ourGallary.forEach((img) => {
    img.addEventListener("click", (e) => {  
        // Create overlay element
        let overlay = document.createElement("div");

        // Add class
        overlay.className = 'popup-overlay';
        
        // Append overlay to the body
        document.body.appendChild(overlay);
        
        // Create popUp
        let popupBox = document.createElement("div");

        // Add class
        popupBox.className = 'popup-box';

        // Create image
        let popupImage = document.createElement("img");

        // Customize Image
        popupImage.src = e.target.src;

        if (img.alt) {
            // Create Heading
            let imgHeading = document.createElement("h3");

            // Create text for image heading
            let imgText = document.createTextNode(img.alt);

            // Append the text to the heading
            imgHeading.appendChild(imgText);

            // Append the heading to the popup box
            popupBox.appendChild(imgHeading)
        }

        // Add imag to popUp box
        popupBox.appendChild(popupImage);

        // Add box to body
        document.body.appendChild(popupBox)

        // Create close span
        let closeButton = document.createElement("span");

        // Create the close button text
        let closeButtonText = document.createTextNode("X")

        // Append text to close button
        closeButton.appendChild(closeButtonText);

        // Add class to the close button
        closeButton.className = "close-button"

        // Add close button to the popUP box
        popupBox.appendChild(closeButton);
    })
})

// Removing the overlay at clicking the close button
document.addEventListener("click", (e) => {
    if (e.target.className === "close-button") {
        // Remove the current popup
        e.target.parentNode.remove()

        // Remove overlay
        document.querySelector(".popup-overlay").remove()
    }
})