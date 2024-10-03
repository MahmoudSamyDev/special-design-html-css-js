// Select skills
let ourSkills = document.querySelector(".skills");

window.onscroll = function() {
    // Skills offset top
    let skillsOffsetTop = ourSkills.offsetTop;

    // Window height
    let windowHeight = this.innerHeight;

    // Window ScrollTop
    let windowScrollTop = this.scrollY;

    if (windowScrollTop > (skillsOffsetTop - windowHeight)) {
        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

        allSkills.forEach((skill) => {
            skill.style.width = skill.dataset.progress
        })
    }
};
