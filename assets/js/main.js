// List In Responsive
var dropdownMenu = document.querySelector(".the-dropdown-menu");
var toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.onclick = function () {
    dropdownMenu.classList.toggle("open");
}