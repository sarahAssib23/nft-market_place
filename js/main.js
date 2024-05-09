let toggleBars = document.querySelector(".fa-bars-staggered")
let nav = document.querySelector(".navbar")
let remove = document.querySelector(".fa-x")

toggleBars.addEventListener("click", () => {
    nav.style.transform = "translateX(0)";
    nav.style.opacity = "1";
})

remove.addEventListener("click", () => {
    nav.style.transform = "translateX(-100%)";
    nav.style.opacity = "0";

});



let header = document.querySelector("header");


window.addEventListener("scroll", () => {
    if (window.scrollY >= 200) {
        header.classList.add("full-H");
    } else {
        header.classList.remove("full-H");
    }
})