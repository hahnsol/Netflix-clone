const body = document.querySelector("body"),
    home_header = document.querySelector(".home_header"),
    header = documnet.querySelector(".header-bottom");

function handleScroll(event) {
    home_header.style.Color = "#141414";
    header.style.Color = "#141414";
}

function init(){
    body.addEventListener("scroll", handleScroll); 
}

init();