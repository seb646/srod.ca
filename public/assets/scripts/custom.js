// Current year for footer
var yearCurrent = new Date().getFullYear();
document.getElementById("current-year").innerHTML = yearCurrent;

window.onload = function() {
    document.getElementsByClassName("preload")[0].classList.remove("preload");
};