document.querySelector(".reset-options").onclick = () => {
    localStorage.removeItem("color_option");
    localStorage.removeItem("navBarBulletOption");
    localStorage.removeItem("storage_option");
    location.reload();
}