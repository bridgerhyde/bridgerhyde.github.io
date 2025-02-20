document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("slider");
    const beforeImg = document.getElementById("before-img");

    slider.addEventListener("input", function () {
        beforeImg.style.width = `${100 - slider.value}%`;
    });

    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelectorAll("section").forEach(section => {
                section.style.display = "none";
            });
            document.querySelector(this.getAttribute("href")).style.display = "block";
        });
    });

    document.getElementById("home").style.display = "block";
});
